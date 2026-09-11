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
        <div className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {causes.map((cause, index) => (
            <article
              key={cause.title}
              className={[
                "rounded-2xl bg-[#F7F9FB] border border-[#E4EBF2] p-6 sm:p-7",
                "lg:col-span-2",
                index === 3 ? "lg:col-start-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Top row: title left, icon right */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#132335] leading-snug">
                  {cause.title}
                </h3>
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#D8E7F1] text-[#3E7298]">
                  {cause.icon}
                </div>
              </div>

              {/* Description below */}
              <p className="mt-4 text-[14px] leading-[1.7] text-[#687686]">
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
