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
          capped and centered so text + image stay
          visually paired on ultra-wide / 4K screens
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
              Hair Transplant in Pokhara
              <br />
              with advanced FUE-DHT
              <br />
              <span
                className="font-editorial italic font-normal"
                style={{ letterSpacing: "0.005em" }}
              >
                &ldquo;No Root Touch&rdquo;
              </span>{" "}
              technique.
            </h1>

            {/* CTA — pill wrapper holding button + text together */}
            <div className="mt-8">
              <div className="relative inline-flex items-center rounded-full p-1.5 pr-8">
                <button
                  onClick={scrollToContact}
                  id="banner-book-appointment-btn"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium tracking-normal  hover:brightness-105 transition-all duration-200 cursor-pointer"
                >
                  Book Free Hair Consultation
                </button>
                {/* <span className="ml-4 text-[14px] font-semibold text-[#0E1A2B] whitespace-nowrap">
                  Book Free Hair Consultation
                </span> */}
              </div>
            </div>
          </div>

          {/* Image block — grows with container, capped sensibly */}
          <div className="flex-shrink-0 flex items-end justify-center pl-8">
            <Image
              src="/images/hairTransplant/NurseImage-1.png"
              alt="West Valley Hair Transplant Specialist"
              width={1086}
              height={1206}
              priority
              className="select-none pointer-events-none"
              style={{
                height: "clamp(480px, 42vw, 760px)",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          TABLET + MOBILE (< lg):
          Text centred → Nurse below
          ═══════════════════════════════════════════ */}
      <div className="flex lg:hidden flex-col items-center relative z-30 pt-12 sm:pt-14 md:pt-16 pb-6 px-6 sm:px-10 md:px-16 text-center">
        <h1
          className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 6vw, 46px)" }}
        >
          Hair Transplant in Pokhara
          <br />
          with advanced FUE-DHT
          <br />
          <span
            className="font-editorial italic font-normal"
            style={{ letterSpacing: "0.005em" }}
          >
            &ldquo;No Root Touch&rdquo;
          </span>{" "}
          technique.
        </h1>

        {/* CTA — stacked: button on top, consultation text below */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center gap-3">
          <button
            onClick={scrollToContact}
            id="banner-book-appointment-btn-mobile"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium tracking-normal shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book Your Appointment
          </button>
          <span className="text-[13px] font-medium text-[#0E1A2B] tracking-tight">
            Book Free Hair Consultation
          </span>
        </div>

        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] mt-4 sm:mt-2">
          <Image
            src="/images/hairTransplant/NurseImage-1.png"
            alt="West Valley Hair Transplant Specialist"
            width={1086}
            height={1206}
            priority
            className="w-full h-auto object-contain object-top select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;