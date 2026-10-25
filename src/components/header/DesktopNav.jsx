import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { ChevronDown } from "react-feather";
import navigation, { isItemActive } from "../../navigation/navigation";
import { inertWhen } from "../../utils/inertWhen";

// Grace period before a hover-opened menu closes, so the pointer can
// travel from the trigger into the panel without it snapping shut.
const CLOSE_DELAY_MS = 150;

const navItemClass = (isHighlighted) =>
  cn(
    "group relative inline-flex h-11 items-center gap-1 whitespace-nowrap rounded-control px-2.5 xl:px-3.5",
    "text-[15px] font-medium transition-colors duration-150",
    isHighlighted ? "text-[#1D2C40]" : "text-[#1D2C40]/70 hover:text-[#1D2C40]"
  );

/** Label with an underline that marks the current section (and previews it on hover). */
function NavLabel({ isActive, children }) {
  return (
    <span
      className={cn(
        "relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#1D2C40]",
        "after:transition-opacity after:duration-150",
        isActive ? "after:opacity-100" : "after:opacity-0 group-hover:after:opacity-25"
      )}
    >
      {children}
    </span>
  );
}

function NavMenu({ item, pathname, isOpen, onOpenChange }) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openedByHoverRef = useRef(false);
  const pendingFocusRef = useRef(null);

  const panelId = `nav-menu-${item.id}`;
  const isActive = isItemActive(item, pathname);

  const setOpen = useCallback((open) => onOpenChange(item.id, open), [item.id, onOpenChange]);
  const clearCloseTimer = () => clearTimeout(closeTimerRef.current);
  const getMenuLinks = () => Array.from(panelRef.current?.querySelectorAll("a") ?? []);

  useEffect(() => clearCloseTimer, []);

  useEffect(() => {
    if (!isOpen) {
      openedByHoverRef.current = false;
      return;
    }

    // Arrow-key opening asks for focus on the first or last link.
    if (pendingFocusRef.current) {
      const links = getMenuLinks();
      (pendingFocusRef.current === "last" ? links[links.length - 1] : links[0])?.focus();
      pendingFocusRef.current = null;
    }

    const handlePointerDown = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      const hadFocus = containerRef.current?.contains(document.activeElement);
      setOpen(false);
      if (hadFocus) triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setOpen]);

  // Hover only applies to a real mouse; touch taps go through onClick alone,
  // otherwise the synthetic hover would open the menu and the tap would close it.
  const handlePointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    clearCloseTimer();
    if (!isOpen) {
      openedByHoverRef.current = true;
      setOpen(true);
    }
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    closeTimerRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  const handleTriggerClick = () => {
    // A click right after hover-open confirms the menu instead of closing it.
    if (isOpen && openedByHoverRef.current) {
      openedByHoverRef.current = false;
      return;
    }
    setOpen(!isOpen);
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    if (isOpen) {
      const links = getMenuLinks();
      (e.key === "ArrowUp" ? links[links.length - 1] : links[0])?.focus();
    } else {
      pendingFocusRef.current = e.key === "ArrowUp" ? "last" : "first";
      setOpen(true);
    }
  };

  const handlePanelKeyDown = (e) => {
    const links = getMenuLinks();
    const index = links.indexOf(document.activeElement);
    const moves = {
      ArrowDown: (index + 1) % links.length,
      ArrowUp: (index - 1 + links.length) % links.length,
      Home: 0,
      End: links.length - 1,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    links[moves[e.key]]?.focus();
  };

  const handleBlur = (e) => {
    if (e.relatedTarget && !containerRef.current?.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <li
      ref={containerRef}
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        className={navItemClass(isActive || isOpen)}
      >
        <NavLabel isActive={isActive}>{item.name}</NavLabel>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {/* Visibility flips instantly on open, but waits for the fade on close;
          inert takes the links out of the tab order the moment it closes */}
      <div
        ref={panelRef}
        id={panelId}
        onKeyDown={handlePanelKeyDown}
        {...inertWhen(!isOpen)}
        className={cn(
          "absolute top-full z-50 min-w-[15rem] pt-2 -left-2 xl:-left-1",
          "duration-150 ease-out",
          isOpen
            ? "visible translate-y-0 opacity-100 transition-[opacity,transform]"
            : "invisible -translate-y-1 opacity-0 transition-[opacity,transform,visibility]"
        )}
      >
        <ul
          role="list"
          className="rounded-panel border border-[#1D2C40]/10 bg-white p-1.5 shadow-[0_12px_32px_rgba(29,44,64,0.12)]"
        >
          {item.children.map((child) => {
            const isCurrent = child.path === pathname;
            return (
              <li key={child.id}>
                <Link
                  href={child.path}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-11 items-center whitespace-nowrap rounded-control px-3 text-[15px] font-medium transition-colors duration-150",
                    isCurrent
                      ? "bg-[#1D2C40]/10 font-semibold text-[#1D2C40]"
                      : "text-[#1D2C40]/70 hover:bg-[#F0F4F8] hover:text-[#1D2C40]"
                  )}
                >
                  {child.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

function DesktopNav({ isHeaderVisible, className }) {
  const router = useRouter();
  const [openId, setOpenId] = useState(null);

  const handleOpenChange = useCallback((id, open) => {
    setOpenId((current) => (open ? id : current === id ? null : current));
  }, []);

  useEffect(() => {
    setOpenId(null);
  }, [router.asPath]);

  useEffect(() => {
    if (!isHeaderVisible) setOpenId(null);
  }, [isHeaderVisible]);

  return (
    <nav aria-label="Primary navigation" className={className}>
      <ul role="list" className="flex items-center gap-0.5 xl:gap-1.5">
        {navigation.map((item) => {
          if (item.children?.length) {
            return (
              <NavMenu
                key={item.id}
                item={item}
                pathname={router.pathname}
                isOpen={openId === item.id}
                onOpenChange={handleOpenChange}
              />
            );
          }

          const isActive = isItemActive(item, router.pathname);
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={navItemClass(isActive)}
              >
                <NavLabel isActive={isActive}>{item.name}</NavLabel>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DesktopNav;
