import Image from "next/image";
import { scrollToContact } from "../../../utils/scrollToContact";

function Banner() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top divider */}
      <div className="w-full h-[1px] bg-[#EAECEF]" />

      {/* ── Desktop (lg+) ── */}
      <div
        className="hidden lg:flex items-center relative z-30 w-full"
        style={{ minHeight: "calc(100vh - 88px)", maxHeight: "780px" }}
      >
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center px-10 xl:px-16 2xl:px-20 gap-10 xl:gap-14">

          {/* Text block — 40% */}
          <div className="w-[40%] xl:w-[38%] flex-shrink-0">
            <h1
              className="font-semibold text-[#0E1A2B] leading-[1.12] tracking-[-0.03em]"
              style={{ fontSize: "clamp(34px, 2.8vw, 62px)" }}
            >
              Aesthetic &amp; Anti-Ageing
              <br />
              <span
                className="font-editorial italic font-normal"
                style={{ letterSpacing: "0.005em" }}
              >
                Personalised for you.
              </span>
            </h1>

            <p
              className="mt-5 text-[#1D2C40]/65 leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.1vw, 17px)", maxWidth: "480px" }}
            >
              Treatments are designed around your individual skin and facial concerns — using advanced technologies and medically supervised injectable treatments to achieve natural results.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <button
                onClick={scrollToContact}
                id="aesthetics-banner-book-appointment-btn"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Book a Consultation
              </button>

              <a
                href="#concerns"
                className="text-[14px] font-semibold text-[#2D4F6F] hover:text-[#0E1A2B] transition-colors"
              >
                Explore by concern ↓
              </a>
            </div>
          </div>

          {/* Image block — natural cutout, width-controlled for landscape */}
          <div className="w-[52%] xl:w-[54%] flex-shrink-0 flex items-end justify-center">
            <Image
              src="/images/endocrine&nutrition/banner-v2.png"
              alt="West Valley Aesthetics & Anti-Ageing Specialist"
              width={900}
              height={700}
              priority
              className="select-none pointer-events-none"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "620px",
                objectFit: "contain",
              }}
            />
          </div>

        </div>
      </div>

      {/* ── Tablet + Mobile (<lg) ── */}
      <div className="flex lg:hidden flex-col items-center relative z-30 pt-12 sm:pt-14 md:pt-16 pb-0 px-6 sm:px-10 md:px-16 text-center">
        <h1
          className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 6vw, 46px)" }}
        >
          Aesthetic &amp; Anti-Ageing
          <br />
          <span
            className="font-editorial italic font-normal"
            style={{ letterSpacing: "0.005em" }}
          >
            Personalised for you.
          </span>
        </h1>

        <p className="mt-4 text-[#1D2C40]/65 leading-relaxed text-[14.5px] max-w-[480px]">
          Advanced technologies and medically supervised treatments designed around your individual skin concerns and goals.
        </p>

        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={scrollToContact}
            id="aesthetics-banner-book-appointment-btn-mobile"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14.5px] font-medium tracking-normal hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a Consultation
          </button>
          <a
            href="#concerns"
            className="text-[13.5px] font-semibold text-[#2D4F6F]"
          >
            Explore by concern ↓
          </a>
        </div>

        {/* Natural cutout image */}
        <div className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[560px] mt-4">
          <Image
            src="/images/endocrine&nutrition/banner-v2.png"
            alt="West Valley Aesthetics & Anti-Ageing Specialist"
            width={900}
            height={700}
            priority
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
