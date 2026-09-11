import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import navigation from "../../navigation/navigation";
import MobileHeader from "./MobileHeader";
import { scrollToContact } from "../../utils/scrollToContact";

function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);
  const openDrawer  = () => setIsOpen(true);

  return (
    <>
      {/* ── Desktop header ─────────────────────────────────────────────── */}
      <header
        className={cn(
          "hidden lg:flex items-center justify-between",
          "sticky top-0 z-40 w-full",
          "px-8 xl:px-14 2xl:px-20 py-4",
          "bg-white/90 backdrop-blur-md",
          "transition-all duration-200"
        )}
        role="banner"
      >
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="West Valley Medical Clinic — Home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <Image
              src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
              alt="West Valley — Hair & Skin Clinic"
              width={230}
              height={90}
              priority
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Navigation links */}
          <nav aria-label="Primary navigation" className="mx-8">
            <ul className="flex items-center gap-8 xl:gap-11" role="list">
              {navigation.map((item) => {
                const isActive = item.path === router.pathname;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className={cn(
                        "text-[15px] font-medium transition-colors duration-150 py-1 inline-block",
                        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                        isActive
                          ? "text-[#1D2C40]"
                          : "text-[#1D2C40]/55 hover:text-[#1D2C40]"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Primary CTA with exact Figma button gradient angle & radius */}
          <button
            onClick={scrollToContact}
            className={cn(
              "shrink-0 inline-flex items-center justify-center",
              "px-7 py-2.5 rounded-xl",
              "bg-[linear-gradient(145deg,#305472_0%,#7AA2C2_100%)]",
              "text-white text-[16px] font-medium tracking-normal",
              "hover:brightness-105 active:scale-[0.98]",
              "transition-all duration-200 cursor-pointer",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            )}
            id="header-cta-desktop"
          >
            Book a Consultant
          </button>
        </div>
      </header>

      {/* ── Mobile header ──────────────────────────────────────────────── */}
      <MobileHeader
        isOpen={isOpen}
        closeDrawer={closeDrawer}
        openDrawer={openDrawer}
      />
    </>
  );
}

export default Header;

