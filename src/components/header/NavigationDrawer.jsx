import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { X } from "react-feather";
import navigation from "../../navigation/navigation";
import { scrollToContact } from "../../utils/scrollToContact";

function NavigationDrawer({ isOpen, closeDrawer }) {
  const router = useRouter();
  const closeButtonRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeDrawer]);

  // Move focus to close button when drawer opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 flex flex-col",
          "w-[88vw] max-w-[360px]",
          "bg-[#F8F9FA] rounded-l-3xl",
          "shadow-[-8px_0_40px_rgba(0,0,0,0.10)]",
          "transition-transform duration-[320ms] ease-[cubic-bezier(0.32,0,0.15,1)]",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        {/* ── Header: logo + close ── */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5">
          <Link
            href="/"
            onClick={closeDrawer}
            aria-label="West Valley Medical Clinic — Home"
          >
            <Image
              src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
              alt="West Valley Medical Clinic"
              width={120}
              height={38}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <button
            ref={closeButtonRef}
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl  text-[#5B6779] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1D2C40]"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* ── Nav links ── */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-5 py-2"
        >
          <ul className="flex flex-col" role="list">
            {navigation.map((item) => {
              const isActive = item.path === router.pathname;
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={closeDrawer}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center px-3 py-4 text-[17px] font-medium tracking-[-0.01em]",
                      "border-b border-[#EAECEF] last:border-none",
                      "transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1D2C40] rounded-lg",
                      isActive
                        ? "text-[#1D2C40]"
                        : "text-[#3D4A5C] hover:text-[#1D2C40]"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── CTA ── */}
        <div className="px-5 pb-8 pt-4">
          <button
            onClick={() => {
              closeDrawer();
              scrollToContact();
            }}
            id="mobile-nav-cta"
            className="w-full py-4 rounded-full bg-[#1D2C40] text-white text-[15px] font-medium tracking-normal hover:bg-[#162130] active:scale-[0.98] transition-all duration-200"
          >
            Book a Consultant
          </button>
        </div>
      </div>
    </>
  );
}

export default NavigationDrawer;
