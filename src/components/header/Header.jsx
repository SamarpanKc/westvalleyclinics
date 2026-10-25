import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { Menu } from "react-feather";
import BrandLogo from "./BrandLogo";
import DesktopNav from "./DesktopNav";
import NavigationDrawer from "./NavigationDrawer";
import { scrollToContact } from "../../utils/scrollToContact";

// Auto-hide thresholds, in px of scroll.
const ALWAYS_SHOW_WITHIN = 80;
const SCROLL_JITTER = 10;

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 8);

      // Keep the bar in place near the top and while the drawer is open
      if (isDrawerOpen || currentScrollY <= ALWAYS_SHOW_WITHIN) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < SCROLL_JITTER) return;

      // Scroll down -> hide; scroll up -> show
      setIsVisible(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen]);

  return (
    <>
      {/* Holds the bar's space in the page flow, since the bar itself is fixed */}
      <div aria-hidden="true" className="h-16 lg:h-[72px] xl:h-20" />

      {/* Fixed rather than sticky: when focus lands in the hidden bar, a sticky
          header makes the browser scroll the page back up to the bar's place */}
      <header
        // A keyboard user tabbing into a hidden bar should see where focus went
        onFocus={() => setIsVisible(true)}
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-16 border-b bg-white/90 backdrop-blur-md lg:h-[72px] xl:h-20",
          "transition-[transform,border-color] duration-300 ease-in-out",
          isScrolled ? "border-[#1D2C40]/10" : "border-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center gap-4 px-6 sm:px-10 lg:px-16 xl:px-20">
          <Link href="/" className="block shrink-0 transition-opacity duration-150 hover:opacity-80">
            <BrandLogo className="h-8 lg:h-10 xl:h-11" />
          </Link>

          <DesktopNav isHeaderVisible={isVisible} className="hidden flex-1 justify-center lg:flex" />

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            {/* Primary CTA: Figma gradient angle & radius. The light end is deepened
                from Figma's #7AA2C2 so white text stays above 4.5:1 contrast */}
            <button
              type="button"
              onClick={scrollToContact}
              id="header-cta-desktop"
              className={cn(
                "hidden h-11 shrink-0 items-center justify-center rounded-xl px-5 sm:inline-flex xl:px-6",
                "bg-[linear-gradient(145deg,#305472_0%,#4F7A9E_100%)]",
                "whitespace-nowrap text-[15px] font-medium text-white",
                "transition-[filter,transform] duration-200 hover:brightness-95 active:scale-[0.98]"
              )}
            >
              Book Your Consultation
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-nav-drawer"
              aria-haspopup="dialog"
              aria-label="Open navigation menu"
              id="mobile-menu-toggle"
              className="-mr-[11px] inline-flex h-11 w-11 items-center justify-center rounded-control text-ink transition-colors duration-150 hover:bg-sage lg:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <NavigationDrawer
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        returnFocusRef={menuButtonRef}
      />
    </>
  );
}

export default Header;
