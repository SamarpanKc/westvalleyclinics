import Image from "next/image";
import { scrollToContact } from "../../../utils/scrollToContact";

function Banner() {
  return (
    <section
      className="relative w-full bg-[#EEF4FB] overflow-hidden"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      {/* ── Bottom fade blending into next section ── */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-t from-white/70 to-transparent pointer-events-none z-20" />

      {/* ═══════════════════════════════════════════
          DESKTOP (lg+)
          ═══════════════════════════════════════════ */}
      <div
        className="hidden lg:flex items-center relative z-30 h-full"
        style={{ minHeight: "calc(100vh - 88px)" }}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-10 xl:px-16 2xl:px-20">

          {/* Text block */}
          <div className="flex-1 max-w-[620px] xl:max-w-[680px] 2xl:max-w-[720px]">
            <h1
              className="font-semibold text-[#0E1A2B] leading-[1.13] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 2.6vw, 62px)" }}
            >
              Dental Clinic in Pokhara
              <br />
              with modern care &amp;{" "}
              <span
                className="font-editorial italic font-normal text-[#527E9F]"
                style={{ letterSpacing: "0.005em" }}
              >
                gentle touch.
              </span>
            </h1>

            <p className="mt-5 text-[16px] leading-relaxed text-[#536273] max-w-[520px]">
              From dental implants and orthodontics to pain-free root canals and
              smile makeovers — West Valley Dental brings world-class dentistry
              to Pokhara.
            </p>

            <div className="mt-8">
              <button
                onClick={scrollToContact}
                id="dental-banner-book-btn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium tracking-normal hover:brightness-105 transition-all duration-200 cursor-pointer"
              >
                Book a Dental Consultation
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="flex-shrink-0 flex flex-col gap-6 pl-8 items-start">
            {[
              { value: "10,000+", label: "Patients Treated" },
              { value: "15+", label: "Years Experience" },
              { value: "4.8★", label: "Google Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-left">
                <p
                  className="font-semibold text-[#2D4F6F] leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(28px, 2.4vw, 44px)" }}
                >
                  {value}
                </p>
                <p className="mt-1 text-[13px] text-[#536273]">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          TABLET + MOBILE (< lg)
          ═══════════════════════════════════════════ */}
      <div className="flex lg:hidden flex-col items-center relative z-30 pt-12 sm:pt-14 md:pt-16 pb-6 px-6 sm:px-10 md:px-16 text-center">
        <h1
          className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 6vw, 46px)" }}
        >
          Dental Clinic in Pokhara
          <br />
          with modern care &amp;{" "}
          <span className="font-editorial italic font-normal text-[#527E9F]">
            gentle touch.
          </span>
        </h1>

        <p className="mt-4 text-[15px] leading-relaxed text-[#536273] max-w-[480px]">
          From dental implants and orthodontics to pain-free root canals and
          smile makeovers — West Valley Dental brings world-class dentistry to
          Pokhara.
        </p>

        <div className="mt-6 sm:mt-7">
          <button
            onClick={scrollToContact}
            id="dental-banner-book-btn-mobile"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium tracking-normal shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a Dental Consultation
          </button>
        </div>

        {/* Stat strip */}
        <div className="mt-10 grid grid-cols-3 gap-6 w-full max-w-[420px]">
          {[
            { value: "10,000+", label: "Patients" },
            { value: "15+", label: "Years Exp." },
            { value: "4.8★", label: "Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-bold text-[#2D4F6F] text-[22px] leading-none">
                {value}
              </p>
              <p className="mt-1 text-[12px] text-[#536273]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
