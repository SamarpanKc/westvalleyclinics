import Image from "next/image";
import hairLossCausesImg from "../../../../public/images/hairTransplant/hairLossCauses.png";

function HairLossCause() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="mt-5 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Hair loss has multiple
            <span className="text-[#527E9F]"> root causes.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Effective treatment starts with understanding what is actually
            driving your hair loss, not simply treating what you see. Identifying the underlying cause helps determine the most
            appropriate treatment approach for you.
          </p>
        </div>

        {/* Root Causes Graphic */}
        <div className="mx-auto mt-12 flex max-w-[1050px] items-center justify-center sm:mt-16">
          <Image
            src={hairLossCausesImg}
            alt="Hair loss has multiple root causes"
            priority
            className="h-auto w-full max-w-[950px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HairLossCause;
