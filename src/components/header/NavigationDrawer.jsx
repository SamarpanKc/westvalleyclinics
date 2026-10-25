import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { ChevronDown, X } from "react-feather";
import BrandLogo from "./BrandLogo";
import navigation, { isItemActive } from "../../navigation/navigation";
import { scrollToContact } from "../../utils/scrollToContact";
import { inertWhen } from "../../utils/inertWhen";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const rowClass = (isActive) =>
  cn(
    "flex min-h-[48px] w-full items-center rounded-lg px-3 text-left text-[17px] font-medium tracking-[-0.01em] transition-colors duration-150",
    isActive
      ? "bg-[#EAF0F6] font-semibold text-[#1D2C40]"
      : "text-[#3D4A5C] hover:bg-black/5 hover:text-[#1D2C40]"
  );

/** Expandable group for an item with children; opens itself when one of them is the current page. */
function DrawerGroup({ item, pathname, onNavigate }) {
  const isActive = isItemActive(item, pathname);
  const [isExpanded, setIsExpanded] = useState(isActive);
  const panelId = useId();

  useEffect(() => {
    if (isActive) setIsExpanded(true);
  }, [isActive]);

  return (
    <>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className={cn(
          "flex min-h-[48px] w-full items-center justify-between rounded-lg px-3 text-left text-[17px] font-medium tracking-[-0.01em] transition-colors duration-150 hover:bg-black/5",
          isActive ? "font-semibold text-[#1D2C40]" : "text-[#3D4A5C] hover:text-[#1D2C40]"
        )}
      >
        {item.name}
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={cn("shrink-0 text-[#5B6779] transition-transform duration-200", isExpanded && "rotate-180")}
        />
      </button>

      {/* Animating grid rows from 0fr to 1fr gives a height transition without measuring */}
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden" {...inertWhen(!isExpanded)}>
          <ul role="list" className="mb-1 ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-[#EAECEF] pl-2">
            {item.children.map((child) => {
              const isCurrent = child.path === pathname;
              return (
                <li key={child.id}>
                  <Link
                    href={child.path}
                    onClick={onNavigate}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "flex min-h-[44px] items-center rounded-lg px-3 text-[16px] font-medium transition-colors duration-150",
                      isCurrent
                        ? "bg-[#EAF0F6] font-semibold text-[#1D2C40]"
                        : "text-[#3D4A5C] hover:bg-black/5 hover:text-[#1D2C40]"
                    )}
                  >
                    {child.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function NavigationDrawer({ isOpen, closeDrawer, returnFocusRef }) {
  const router = useRouter();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Close on any navigation, including browser back/forward
  useEffect(() => {
    closeDrawer();
  }, [router.asPath, closeDrawer]);

  // Close if the window widens into the desktop layout, where the drawer is hidden
  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => e.matches && closeDrawer();
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, [isOpen, closeDrawer]);

  // While open: lock page scroll, focus the close button, keep Tab inside, close on Escape.
  // On close: hand focus back to the menu button.
  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) returnFocusRef?.current?.focus({ preventScroll: true });
      wasOpenRef.current = false;
      return;
    }
    wasOpenRef.current = true;

    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const previous = { overflow: root.style.overflow, paddingRight: root.style.paddingRight };
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll(FOCUSABLE)).filter(
        (el) => !el.closest("[inert]")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!panelRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first?.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      root.style.overflow = previous.overflow;
      root.style.paddingRight = previous.paddingRight;
    };
  }, [isOpen, closeDrawer, returnFocusRef]);

  return (
    <>
      {/* Backdrop. data-lenis-prevent stops smooth scroll from moving the page behind it */}
      <div
        aria-hidden="true"
        data-lenis-prevent
        onClick={closeDrawer}
        className={cn(
          "fixed inset-0 z-[60] bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer panel. Visibility flips instantly on open, but waits for the slide on close */}
      <div
        ref={panelRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        data-lenis-prevent
        {...inertWhen(!isOpen)}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-[360px] flex-col lg:hidden",
          "rounded-l-3xl bg-[#F8F9FA] shadow-[-8px_0_40px_rgba(0,0,0,0.10)]",
          "duration-300 ease-[cubic-bezier(0.32,0,0.15,1)]",
          isOpen
            ? "visible translate-x-0 transition-transform"
            : "invisible translate-x-full transition-[transform,visibility]"
        )}
      >
        {/* Same height and gutter as the header bar, so the close button lands where the menu button was */}
        <div className="flex h-16 shrink-0 items-center justify-between px-6">
          <Link href="/" onClick={closeDrawer} className="block">
            <BrandLogo className="h-8" />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="-mr-[11px] inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#5B6779] transition-colors duration-150 hover:bg-black/5 hover:text-[#1D2C40]"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto overscroll-contain px-3 pb-4 pt-2">
          <ul role="list" className="flex flex-col divide-y divide-[#EAECEF]">
            {navigation.map((item) => {
              if (item.children?.length) {
                return (
                  <li key={item.id} className="py-1">
                    <DrawerGroup item={item} pathname={router.pathname} onNavigate={closeDrawer} />
                  </li>
                );
              }

              const isActive = isItemActive(item, router.pathname);
              return (
                <li key={item.id} className="py-1">
                  <Link
                    href={item.path}
                    onClick={closeDrawer}
                    aria-current={isActive ? "page" : undefined}
                    className={rowClass(isActive)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-[#EAECEF] px-5 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              closeDrawer();
              scrollToContact();
            }}
            id="mobile-nav-cta"
            className="flex h-[52px] w-full items-center justify-center rounded-xl bg-[#1D2C40] text-[16px] font-medium text-white transition-[background-color,transform] duration-200 hover:bg-[#162130] active:scale-[0.98]"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </>
  );
}

export default NavigationDrawer;
