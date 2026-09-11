import { Menu } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import NavigationDrawer from "./NavigationDrawer";

function MobileHeader({ isOpen, closeDrawer, openDrawer }) {
  return (
    <>
      {/* ── Mobile header bar ──────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between lg:hidden sticky top-0 z-40 px-5 py-3 bg-surface/95 backdrop-blur-sm border-b border-border"
        role="banner"
      >
        {/* Logo */}
        <Link href="/" aria-label="West Valley Medical Clinic — Home">
          <Image
            src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
            alt="West Valley Medical Clinic"
            width={110}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Hamburger toggle */}
        <button
          onClick={openDrawer}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          aria-label="Open navigation menu"
          className="p-2 rounded-control text-ink hover:bg-sage transition-colors duration-[150ms] focus-visible:outline-2 focus-visible:outline-primary"
          id="mobile-menu-toggle"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </header>

      {/* ── Slide-out drawer ───────────────────────────────────────────── */}
      <NavigationDrawer isOpen={isOpen} closeDrawer={closeDrawer} />
    </>
  );
}

export default MobileHeader;

