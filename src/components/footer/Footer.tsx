import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "react-feather";

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="wv-container py-16 md:grid md:grid-cols-4 lg:grid-flow-col lg:gap-10">

        {/* ── Brand column ───────────────────────────────────────────── */}
        <div className="md:col-span-full lg:col-span-2">
          <Link href="/" aria-label="West Valley Medical Clinic — Home">
            <Image
              src="/rebranding/logoSVGs/westvalleywhite_logo_nobg.svg"
              alt="West Valley Medical Clinic"
              width={200}
              height={64}
              priority
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            West Valley Medical Clinic provides hair transplant, skin,
            aesthetics &amp; antiaging, and pharmacy services in Pokhara.
            Our experienced team is here to help you understand your options
            and take the next step with confidence.
          </p>
        </div>

        {/* ── Services column ─────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-0">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Services
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                Hair Transplant
              </Link>
            </li>
            <li>
              <Link
                href="/skin"
                className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                Skin
              </Link>
            </li>
            <li>
              <Link
                href="/aesthetics&antiaging"
                className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                Aesthetics &amp; Antiaging
              </Link>
            </li>
            <li>
              <Link
                href="/pharmacy"
                className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                Pharmacy
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Follow column ────────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-0 col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Follow Us
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="https://www.facebook.com/Westvalleyclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                <Facebook size={14} aria-hidden="true" />
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/westvalleyclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
              >
                <Instagram size={14} aria-hidden="true" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Contact column ───────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-0">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Contact
          </p>
          <address className="not-italic flex flex-col gap-2">
            <p className="text-sm text-white/70">
              New Road (Infront of Nagarpalika Office)
            </p>
            <p className="text-sm text-white/70">Pokhara 33700</p>
            <a
              href="tel:061590095"
              className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
            >
              061-590095
            </a>
            <a
              href="tel:+9779856080095"
              className="text-sm text-white/70 hover:text-white transition-colors duration-[150ms]"
            >
              +977 985-6080095
            </a>
          </address>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="wv-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            &copy; 2026/27 West Valley Medical Clinic. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs text-white/50 hover:text-white transition-colors duration-[150ms]"
          >
            Privacy Information
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

