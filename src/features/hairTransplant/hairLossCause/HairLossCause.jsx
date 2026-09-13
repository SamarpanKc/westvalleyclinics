const causes = [
  {
    title: "Hormones",
    description:
      "DHT, a derivative of testosterone, can contribute to progressive follicle miniaturization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M14.5 3c0 6-2.2 8.8-6.5 10.5M8 13.5c-2.2.8-3.5 2.5-3.5 4.5M17 6h.01M15 11h.01M9 18h.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Metabolism",
    description:
      "Inflammation, blood-sugar regulation and thyroid function can influence healthy hair growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M8.5 5c1.5 0 2.5 1.4 3.5 3 1-1.6 2-3 3.5-3 2 0 3.5 1.8 3.5 4 0 4.7-7 9-7 9S5 13.7 5 9c0-2.2 1.5-4 3.5-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Stress",
    description:
      "Physical and emotional stress may disrupt the natural hair-growth cycle and increase shedding.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 12h4l2-5 3 10 2.5-7 2 4H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Nutrition",
    description:
      "Deficiencies in key nutrients and an imbalanced diet can compromise normal follicle function.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 7c-2-3-5-2.5-6.5 0S5 16 8 19c1.5 1.5 2.7 0 4 0s2.5 1.5 4 0c3-3 4-9.5 2.5-12S14 4 12 7Zm0 0c0-2 1-3.5 3-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Environment",
    description:
      "Lifestyle, environmental exposure and the products you use can affect scalp and hair health.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 20v-7m0 0C8 13 5 10 5 6c4 0 7 2 7 7Zm0 0c4 0 7-3 7-7-4 0-7 2-7 7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function HairLossCause() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">

          <h2 className="mt-5 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Hair loss has multiple
            <span className="text-[#527E9F]"> root causes.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Effective treatment starts with understanding what is actually
            driving your hair loss, not simply treating what you see. Identifying the underlying cause helps determine the most
            appropriate treatment approach for you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {causes.map((cause, index) => (
            <article
              key={cause.title}
              className={[
                "lg:col-span-2",
                index === 3 ? "lg:col-start-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                borderRadius: "16px 22px 22px 108px",
                background: "linear-gradient(160deg, #EEF5FC 0%, #dae7f1ff 55%, #afd1ebff 100%)",
                border: "1px solid rgba(255,255,255,0.70)",
                padding: "28px 28px 26px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={e => {
                // e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 28px 0 rgba(82,126,159,0.18), inset 0 1px 0 rgba(255,255,255,0.60)";
              }}
              onMouseLeave={e => {
                // e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(82,126,159,0.10), inset 0 1px 0 rgba(255,255,255,0.55)";
              }}
            >
              {/* Gloss streak */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "48%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 100%)",
                borderRadius: "16px 22px 0 0",
                pointerEvents: "none",
              }} />

              {/* Top row: icon LEFT, title RIGHT */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>

                {/* Left: icon */}
                <div style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "42px",
                  width: "42px",
                  borderRadius: "12px",
                  color: "#2D6A94",
                }}>
                  {cause.icon}
                </div>

                {/* Right: title */}
                <h3 style={{
                  flex: 1,
                  fontSize: "17px",
                  fontWeight: 650,
                  letterSpacing: "-0.025em",
                  color: "#0E2236",
                  lineHeight: "1.3",
                  margin: 0,
                  paddingTop: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "10px",
                }}>
                  {cause.title}
                </h3>

              </div>

              {/* Divider */}
              {/* <div style={{
                margin: "14px 0 11px",
                height: "1px",
                background: "rgba(255,255,255,0.55)",
              }} /> */}

              {/* Description — full width below */}
              <p style={{
                fontSize: "13.5px",
                lineHeight: "1.72",
                color: "#1C3A52",
                margin: 0,
                opacity: 0.88,
                textAlign: "right",
              }}>
                {cause.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HairLossCause;
