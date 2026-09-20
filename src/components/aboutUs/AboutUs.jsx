import { scrollToContact } from "../../utils/scrollToContact";

const treatments = [
  "Hair transplant & restoration",
  "Skin, nail & STD conditions",
  "Advanced aesthetic & anti-ageing treatments",
  "Plastic, cosmetic & reconstructive surgery",
];

function AboutUs() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24" id="aboutUs">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            About <span className="text-[#527E9F]">Us.</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-[960px]">
          <div className=" p-7 sm:p-10">
            
            {/* Lead sentence */}
            <p
              className="text-[#0E2236] font-semibold leading-snug tracking-[-0.015em]"
              style={{ fontSize: "clamp(18px, 2.2vw, 22px)" }}
            >
              West Valley Clinic - Pokhara&apos;s trusted name in hair transplant, skin, and aesthetic care.
            </p>

            {/* Intro paragraph */}
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.8] text-[#536273]">
              Located on New Road, Pokhara, we bring together experienced doctors, modern technology, and over 20 years of combined clinical expertise to treat you with the care you deserve.
            </p>

            {/* What we treat list */}
            <div className="mt-7">
              <h3 className="text-[13px] font-semibold tracking-wider text-[#527E9F] uppercase">
                What we treat
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatments.map((treatment) => (
                  <div
                    key={treatment}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-[#527E9F] shrink-0" />
                    <span className="text-[15px] font-medium text-[#0E2236]">
                      {treatment}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value & philosophy */}
            <p className="mt-7 text-[15px] sm:text-[16px] leading-[1.8] text-[#536273]">
              Every treatment plan is built around you - your goals, your condition, your comfort. Safety, privacy, and natural results come first, always.
            </p>

            {/* CTA row */}
            <div className="mt-8 pt-6 border-t border-[#EAECEF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[15px] sm:text-[16px] font-medium text-[#0E2236] text-center sm:text-left">
                Ready for a change?
              </p>
              <button
                onClick={scrollToContact}
                id="about-us-book-btn"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Book your consultation today
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
