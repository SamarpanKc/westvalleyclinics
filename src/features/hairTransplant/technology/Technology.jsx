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
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
            className="grid-cols-1-to-2"
          >

            {/* Left: text */}
            <div style={{ minWidth: 0 }}>
              <h3 style={{
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontWeight: 650,
                letterSpacing: "-0.025em",
                color: "#0E2236",
                lineHeight: "1.3",
                margin: 0,
              }}>
                FUE-DHT — Follicular Unit Extraction with Direct Hair Transplant
              </h3>

              <div style={{
                margin: "18px 0 14px",
                height: "1px",
                background: "#D8E7F1",
              }} />

              <p style={{
                fontSize: "14px",
                lineHeight: "1.78",
                color: "#536273",
                margin: 0,
                textAlign: "justify",
              }}>
                FUE-DHT, or Follicular Unit Extraction with &ldquo;No Root Touch,&rdquo; represents a
                significant advancement in hair transplantation. This technique focuses on preserving
                the integrity of hair follicles during the procedure. Grafts are extracted from the
                donor area and immediately transplanted into the recipient site, reducing graft
                exposure time and maximizing graft survival rates, often reaching 99–100%.
              </p>

              <p style={{
                fontSize: "14px",
                lineHeight: "1.78",
                color: "#536273",
                marginTop: "12px",
                textAlign: "justify",
              }}>
                This meticulous approach minimizes graft damage, ensuring precise, one-at-a-time
                extraction, leading to a more natural and denser hair restoration outcome. FUE-DHT
                with &ldquo;No Root Touch&rdquo; offers precision and exceptional results, making it
                a superior choice for individuals seeking effective hair restoration.
              </p>
            </div>

            {/* Right: image masked with asymmetric shape filling container */}
            <div style={{
              borderRadius: "16px 22px 22px 108px",
              overflow: "hidden",
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
            }}>
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 767px) {
          .grid-cols-1-to-2 {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}

export default Technology;
