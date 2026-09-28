import Image from "next/image";
import { scrollToContact } from "../../../utils/scrollToContact";

function Banner() {
  return (
    <section
      className="relative w-full bg-[#EEF4FB] overflow-hidden"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      {/* ── Background gradient ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/hairTransplant/clean_blue_gradient_background.png"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* ── Bottom fade blending into next section ── */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-t from-white/70 to-transparent pointer-events-none z-20" />

      {/* ═══════════════════════════════════════════
          DESKTOP (lg+): Single flex row, max-width
          capped and centered
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
              Enhance the{" "}
              <span
                className="font-editorial italic font-normal"
                style={{ letterSpacing: "0.005em" }}
              >
                Natural Beauty
              </span>{" "}
              within you and Unveil the Best Version of Yourself
            </h1>

            {/* CTA — Book Your Consultant */}
            <div className="mt-8">
              <button
                onClick={scrollToContact}
                id="skin-banner-book-appointment-btn"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal shadow-md hover:brightness-105 hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Book Your Consultant
              </button>
            </div>
          </div>

          {/* Image block */}
          <div className="flex-shrink-0 flex items-end justify-center pl-8 xl:pl-12">
            <Image
              src="/images/skin&aethetics/SkinBanner.png"
              alt="West Valley Skin Specialist"
              width={1100}
              height={1466}
              priority
              className="select-none pointer-events-none"
              style={{
                height: "clamp(560px, 52vw, 880px)",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "top center",
              }}
            />
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          TABLET + MOBILE (< lg):
          Text centred → Image below
          ═══════════════════════════════════════════ */}
      <div className="flex lg:hidden flex-col items-center relative z-30 pt-12 sm:pt-14 md:pt-16 pb-6 px-6 sm:px-10 md:px-16 text-center">
        <h1
          className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 6vw, 46px)" }}
        >
          Enhance the{" "}
          <span
            className="font-editorial italic font-normal"
            style={{ letterSpacing: "0.005em" }}
          >
            Natural Beauty
          </span>{" "}
          within you and Unveil the Best Version of Yourself
        </h1>

        {/* CTA — Book Your Consultant button */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center">
          <button
            onClick={scrollToContact}
            id="skin-banner-book-appointment-btn-mobile"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book Your Consultant
          </button>
        </div>

        <div className="w-full max-w-[380px] sm:max-w-[460px] md:max-w-[560px] mt-6 sm:mt-4">
          <Image
            src="/images/skin&aethetics/SkinBanner.png"
            alt="West Valley Skin Specialist"
            width={1100}
            height={1466}
            priority
            className="w-full h-auto object-contain object-top select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
