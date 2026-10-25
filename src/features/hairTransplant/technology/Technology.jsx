function Technology() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="mt-5 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Hair Transplant{" "}
            <span className="text-[#527E9F]">Technology.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            We use the most advanced techniques available to ensure natural-looking,
            long-lasting results with minimal downtime and maximum graft survival.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-14 max-w-[1240px] lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left: text */}
            <div className="min-w-0">
              <h3 className="text-[clamp(18px,2.2vw,26px)] font-[650] tracking-[-0.025em] text-[#0E2236] leading-[1.3]">
                FUE-DHT — Follicular Unit Extraction with Direct Hair Transplant
              </h3>

              <div className="my-[18px] h-[1px] bg-[#D8E7F1]" />

              <p className="text-[14px] leading-[1.78] text-[#536273] text-justify">
                FUE-DHT, or Follicular Unit Extraction with &ldquo;No Root Touch,&rdquo; represents a
                significant advancement in hair transplantation. This technique focuses on preserving
                the integrity of hair follicles during the procedure. Grafts are extracted from the
                donor area and immediately transplanted into the recipient site, reducing graft
                exposure time and maximizing graft survival rates, often reaching 99–100%.
              </p>

              <p className="mt-3 text-[14px] leading-[1.78] text-[#536273] text-justify">
                This meticulous approach minimizes graft damage, ensuring precise, one-at-a-time
                extraction, leading to a more natural and denser hair restoration outcome. FUE-DHT
                with &ldquo;No Root Touch&rdquo; offers precision and exceptional results, making it
                a superior choice for individuals seeking effective hair restoration.
              </p>
            </div>

            {/* Right: image masked with asymmetric shape */}
            <div
              style={{
                borderRadius: "16px 22px 22px 108px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="/images/hairTransplant/transplant1.png"
                alt="FUE-DHT Hair Transplant Technology"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Technology;
