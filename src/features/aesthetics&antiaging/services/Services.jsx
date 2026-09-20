import { scrollToContact } from "../../../utils/scrollToContact";

const concerns = [
  {
    id: "fine-lines",
    concern: "Fine Lines & Wrinkles",
    description:
      "Develop naturally with ageing, facial movement and sun exposure. Treatment is selected based on wrinkle type and location.",
    options: ["Botulinum Toxin", "Ultraformer III", "Skin Boosters", "Profhilo", "CO₂ Laser"],
  },
  {
    id: "skin-laxity",
    concern: "Skin Laxity & Sagging",
    description:
      "Loss of collagen and elastin can lead to loose skin and reduced facial definition over time.",
    options: ["Ultraformer III", "Profhilo", "Skin Boosters"],
  },
  {
    id: "pigmentation",
    concern: "Pigmentation & Uneven Tone",
    description:
      "May result from sun exposure, hormonal changes, acne or inflammation. Correct assessment is essential before treatment.",
    options: ["Pico Laser", "Medical Skincare", "Combination Treatments"],
  },
  {
    id: "acne-scars",
    concern: "Acne Scars & Texture",
    description:
      "Acne can leave behind scars, enlarged pores and uneven texture. Treatment is selected by scar type and depth.",
    options: ["Fractional CO₂ Laser", "Pico Laser", "Combination Treatments"],
  },
  {
    id: "enlarged-pores",
    concern: "Enlarged Pores",
    description:
      "Associated with excess sebum, acne and skin-texture changes. Treatment depends on the underlying cause.",
    options: ["CO₂ Laser", "HydraFacial", "Skin Rejuvenation"],
  },
  {
    id: "dull-skin",
    concern: "Dull & Dehydrated Skin",
    description:
      "Dehydration and environmental exposure can make skin appear dull, rough or tired.",
    options: ["HydraFacial", "Skin Boosters", "Profhilo", "PDRN", "Polynucleotides"],
  },
  {
    id: "volume-loss",
    concern: "Loss of Facial Volume",
    description:
      "Ageing can lead to volume changes around the cheeks, lips, chin and other facial areas.",
    options: ["Dermal Fillers", "Personalised Facial Contouring"],
  },
  {
    id: "jawline",
    concern: "Jawline & Facial Contouring",
    description:
      "Changes in skin laxity and volume can affect jawline definition and lower-face structure.",
    options: ["Ultraformer III", "Dermal Fillers", "Personalised Contouring"],
  },
  {
    id: "under-eye",
    concern: "Under-Eye Concerns",
    description:
      "The under-eye area can develop fine lines and skin-quality changes as part of the ageing process.",
    options: ["Skin Boosters", "PDRN", "Polynucleotides", "Personalised Treatment"],
  },
  {
    id: "neck",
    concern: "Neck Lines & Ageing",
    description:
      "The neck can develop fine lines, reduced firmness and other age-related changes over time.",
    options: ["Ultraformer III", "Profhilo", "Skin Boosters"],
  },
  {
    id: "sun-damage",
    concern: "Sun-Damaged Skin",
    description:
      "Long-term sun exposure can contribute to pigmentation, uneven tone, rough texture and visible ageing.",
    options: ["Pico Laser", "CO₂ Laser", "Skin Rejuvenation"],
  },
  {
    id: "early-ageing",
    concern: "Early Ageing & Skin Quality",
    description:
      "Early signs may include dehydration, fine lines, reduced elasticity and loss of radiance.",
    options: ["Skin Boosters", "Profhilo", "PDRN", "Polynucleotides", "HydraFacial"],
  },
  {
    id: "hair-removal",
    concern: "Unwanted Facial & Body Hair",
    description:
      "Laser hair removal targets follicles to progressively reduce unwanted hair over a course of treatments.",
    options: ["Laser Hair Removal"],
  },
  {
    id: "rejuvenation",
    concern: "Overall Facial Rejuvenation",
    description:
      "For multiple concerns — wrinkles, pigmentation, laxity, dehydration — a personalised combination plan is developed based on your facial anatomy and goals.",
    options: [
      "Ultraformer III",
      "Pico Laser",
      "CO₂ Laser",
      "HydraFacial",
      "Skin Boosters",
      "Profhilo",
      "Botulinum Toxin",
      "Dermal Fillers",
    ],
  },
];

const technologies = [
  {
    name: "Ultraformer III",
    label: "HIFU & MMFU",
    detail: "Focused ultrasound for skin tightening and facial contouring.",
  },
  {
    name: "Pico Laser",
    label: "Pigmentation & Rejuvenation",
    detail: "Selected pigmentation and skin-rejuvenation indications.",
  },
  {
    name: "Fractional CO₂ Laser",
    label: "Resurfacing",
    detail: "Skin resurfacing, acne scars and texture treatments.",
  },
  {
    name: "HydraFacial",
    label: "Cleanse & Hydrate",
    detail: "Cleansing, exfoliation, extraction and deep hydration.",
  },
  {
    name: "Laser Hair Removal",
    label: "Unwanted Hair",
    detail: "Progressive reduction of unwanted facial and body hair.",
  },
  {
    name: "Injectable Treatments",
    label: "Volume & Quality",
    detail:
      "Botulinum toxin, dermal fillers, skin boosters, Profhilo, PDRN, polynucleotides and exosome-based treatments.",
  },
];

function Services() {
  return (
    <>
      {/* ── Concern-Led Treatment Section ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" id="concerns">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

          {/* Section heading */}
          <div className="mx-auto max-w-[760px] text-center">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
              Concern-Led Care
            </span>
            <h2
              className="mt-3 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              Explore by <span className="text-[#527E9F]">Concern.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
              Using advanced technologies and medically supervised injectable treatments, we develop personalised plans based on your skin condition, facial anatomy and goals.
            </p>
          </div>

          {/* Concern cards grid */}
          <div className="mx-auto mt-12 max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concerns.map((item, i) => (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl bg-[#FAFCFE] p-6 border border-[#EAECEF]"
              >
                {/* Number & concern */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#527E9F]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#D8E7F1]" />
                </div>

                <h3 className="text-[17px] font-semibold text-[#0E2236] tracking-[-0.02em] leading-snug">
                  {item.concern}
                </h3>

                <p className="mt-2 text-[13.5px] text-[#536273] leading-[1.7] flex-1">
                  {item.description}
                </p>

                {/* Treatment options */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.options.map((opt) => (
                    <span
                      key={opt}
                      className="inline-block px-2.5 py-1 text-[11.5px] font-medium text-[#2D4F6F] bg-[#EBF3F8] rounded-full"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Section ── */}
      <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24" id="technology">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

          <div className="mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left: heading + philosophy */}
              <div className="lg:col-span-5">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
                  Advanced Technology
                </span>
                <h2
                  className="mt-3 font-semibold leading-[1.1] tracking-[-0.04em] text-[#0E1A2B]"
                  style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
                >
                  Technology at{" "}
                  <span className="font-editorial italic font-normal text-[#2D4F6F]">
                    West Valley.
                  </span>
                </h2>

                <div className="my-5 h-px bg-[#D8E7F1]" />

                <p className="text-[15px] leading-[1.78] text-[#536273]">
                  Our concern-led approach is supported by advanced aesthetic technology and injectable treatments, selected based on what is appropriate for your individual skin condition and goals.
                </p>

                {/* Philosophy callout */}
                <div className="mt-8 rounded-2xl bg-white p-6 border border-[#EAECEF]">
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F] mb-3">
                    Our Philosophy
                  </p>
                  <p className="text-[16px] font-semibold text-[#0E2236] leading-snug tracking-[-0.02em]">
                    Assess first.{" "}
                    <span className="font-editorial italic font-normal text-[#2D4F6F]">
                      Treat appropriately.
                    </span>{" "}
                    Enhance naturally.
                  </p>
                  <p className="mt-3 text-[13.5px] text-[#536273] leading-relaxed">
                    Every face and every skin type is different. During your consultation, our dermatology and aesthetic team will assess your concerns and discuss the most suitable options.
                  </p>
                  <button
                    onClick={scrollToContact}
                    id="aesthetics-concerns-book-btn"
                    className="mt-5 inline-flex items-center justify-center px-7 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>

              {/* Right: Technology list */}
              <div className="lg:col-span-7 space-y-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-start gap-4 rounded-xl bg-white p-5 border border-[#EAECEF]"
                  >
                    <span className="mt-0.5 flex h-2 w-2 rounded-full bg-[#527E9F] shrink-0" />
                    <div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-[15px] font-semibold text-[#0E2236]">
                          {tech.name}
                        </span>
                        <span className="inline-block px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#527E9F] bg-[#EBF3F8] rounded-full">
                          {tech.label}
                        </span>
                      </div>
                      <p className="mt-1 text-[13.5px] text-[#536273] leading-relaxed">
                        {tech.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
