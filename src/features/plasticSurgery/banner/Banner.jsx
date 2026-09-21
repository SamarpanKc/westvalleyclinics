import Image from "next/image";
import { scrollToContact } from "../../../utils/scrollToContact";

function Banner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="w-full h-[1px] bg-[#EAECEF]" />

      {/* Desktop */}
      <div className="hidden lg:block relative z-30 max-w-[1440px] mx-auto px-8 xl:px-12 pt-14 pb-0">
        <div className="flex items-center justify-between min-h-[540px]">

          {/* Text block */}
          <div className="flex-1 max-w-[620px] xl:max-w-[680px]">
            <h1
              className="font-semibold text-[#0E1A2B] leading-[1.12] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 2.6vw, 62px)" }}
            >
              Specialist Plastic &amp; Reconstructive{" "}
              <span
                className="font-editorial italic font-normal"
                style={{ letterSpacing: "0.005em" }}
              >
                Surgery
              </span>{" "}
              at West Valley.
            </h1>

            <p
              className="mt-5 text-[#1D2C40]/65 leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.1vw, 17px)", maxWidth: "520px" }}
            >
              Personalised surgical care for the face, breast and body — together with
              reconstructive and corrective procedures. Every treatment plan begins with
              a detailed consultation tailored to your anatomy and goals.
            </p>

            <div className="mt-8">
              <button
                onClick={scrollToContact}
                id="plastic-surgery-banner-book-btn"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal shadow-md hover:brightness-105 hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Image block */}
          <div className="flex-shrink-0 flex items-end justify-center pl-8">
            <Image
              src="/images/Plastic Surgery/Woman_with_surgical_markings_plo…_2K_20260921134514.png"
              alt="West Valley Plastic Surgery Specialist"
              width={2400}
              height={1792}
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

      {/* Tablet + Mobile */}
      <div className="flex lg:hidden flex-col items-center relative z-30 pt-12 sm:pt-14 md:pt-16 pb-6 px-6 sm:px-10 md:px-16 text-center">
        <h1
          className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 6vw, 46px)" }}
        >
          Specialist Plastic &amp; Reconstructive{" "}
          <span
            className="font-editorial italic font-normal"
            style={{ letterSpacing: "0.005em" }}
          >
            Surgery
          </span>{" "}
          at West Valley.
        </h1>

        <p className="mt-4 text-[#1D2C40]/65 leading-relaxed text-[15px] max-w-[480px]">
          Personalised surgical care for the face, breast and body — together with
          reconstructive and corrective procedures.
        </p>

        <div className="mt-6 sm:mt-7">
          <button
            onClick={scrollToContact}
            id="plastic-surgery-banner-book-btn-mobile"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>

        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] mt-6 sm:mt-4">
          <Image
            src="/images/Plastic Surgery/Woman_with_surgical_markings_plo…_2K_20260921134514.png"
            alt="West Valley Plastic Surgery Specialist"
            width={2400}
            height={1792}
            priority
            className="w-full h-auto object-contain object-top select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
