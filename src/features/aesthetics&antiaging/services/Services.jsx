import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { scrollToContact } from "../../../utils/scrollToContact";

const concerns = [
  {
    id: "fine-lines",
    tag: "Wrinkle Softening",
    concern: "Fine Lines & Wrinkles",
    description:
      "Targeted softening of dynamic and static lines while preserving natural facial expressions.",
    options: ["Botulinum Toxin", "Ultraformer III", "Skin Boosters", "Fractional CO₂"],
  },
  {
    id: "skin-laxity",
    tag: "Tissue Tightening",
    concern: "Skin Laxity & Sagging",
    description:
      "Deep ultrasound stimulation of collagen and elastin to firm loose skin and restore facial definition.",
    options: ["Ultraformer III (HIFU)", "Profhilo", "Skin Boosters"],
  },
  {
    id: "pigmentation",
    tag: "Pigment Correction",
    concern: "Pigmentation & Melasma",
    description:
      "Ultra-short picosecond laser energy breaks down stubborn sun spots, melasma, and uneven tone.",
    options: ["Pico Laser", "Medical Skincare", "Targeted Peels"],
  },
  {
    id: "acne-scars",
    tag: "Texture Remodeling",
    concern: "Acne Scars & Texture",
    description:
      "Ablative micro-thermal zones stimulate rapid dermal renewal to smooth atrophic scars and roughness.",
    options: ["Fractional CO₂ Laser", "Pico Laser", "Combination Protocols"],
  },
  {
    id: "enlarged-pores",
    tag: "Pore Refinement",
    concern: "Enlarged Pores",
    description:
      "Deep vortex extraction combined with thermal laser resurfacing to clear and tighten pore structures.",
    options: ["HydraFacial MD", "CO₂ Laser", "Carbon Rejuvenation"],
  },
  {
    id: "dull-skin",
    tag: "Hydration & Glow",
    concern: "Dull & Dehydrated Skin",
    description:
      "Direct intradermal infusion of hyaluronic acid, polynucleotides, and restorative antioxidants.",
    options: ["HydraFacial MD", "Skin Boosters", "Profhilo", "PDRN"],
  },
  {
    id: "volume-loss",
    tag: "Volume Restoration",
    concern: "Loss of Facial Volume",
    description:
      "Replenishing deep structural volume in cheeks, temples, and under-eyes with biocompatible fillers.",
    options: ["Dermal Fillers", "Facial Contouring", "Biostimulators"],
  },
  {
    id: "jawline",
    tag: "Lower Face Sculpting",
    concern: "Jawline & Contouring",
    description:
      "Sharpening the mandibular border and reducing submental fullness for balanced lower-face structure.",
    options: ["Ultraformer III", "Dermal Fillers", "Submental Contouring"],
  },
  {
    id: "under-eye",
    tag: "Periorbital Care",
    concern: "Under-Eye Concerns",
    description:
      "Revitalizing delicate periorbital tissue, softening dark hollows, and improving fine skin quality.",
    options: ["Polynucleotides (PDRN)", "Skin Boosters", "Light Fillers"],
  },
  {
    id: "neck",
    tag: "Neck Rejuvenation",
    concern: "Neck Lines & Laxity",
    description:
      "Firming neck crepiness, softening horizontal bands, and restoring smooth jawline-to-neck continuity.",
    options: ["Ultraformer III", "Profhilo Neck", "Skin Boosters"],
  },
  {
    id: "sun-damage",
    tag: "Photorejuvenation",
    concern: "Sun-Damaged Skin",
    description:
      "Reversing photo-induced pigmentation, texture damage, and cellular sluggishness for renewed radiance.",
    options: ["Pico Laser", "CO₂ Laser", "Skin Rejuvenation"],
  },
  {
    id: "hair-removal",
    tag: "Permanent Reduction",
    concern: "Unwanted Hair",
    description:
      "Precision follicle deactivation with advanced contact cooling for comfortable, progressive hair reduction.",
    options: ["Laser Hair Removal", "Contact Cooling Technology"],
  },
  {
    id: "rejuvenation",
    tag: "Comprehensive Care",
    concern: "Overall Facial Rejuvenation",
    description:
      "A harmonious multi-modality plan addressing laxity, texture, tone, and volume in staged sessions.",
    options: ["Ultraformer III", "Pico Laser", "Profhilo", "Dermal Fillers"],
  },
];

function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* ── Concern-Led Treatment Section ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" id="concerns">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

          {/* Section heading + carousel navigation controls */}
          <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-[700px]">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
                Concern-Led Care
              </span>
              <h2
                className="mt-3 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Explore by <span className="text-[#527E9F]">Concern.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#536273] sm:text-[16px]">
                Using advanced technologies and medically supervised injectable treatments, we develop personalised plans based on your skin condition, facial anatomy and goals.
              </p>
            </div>

            {/* Carousel navigation arrows */}
            <div className="flex items-center gap-2.5 self-start md:self-end">
              <button
                aria-label="Previous concern"
                className="concerns-prev-btn flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white border border-[#D8E7F1] text-[#2D4F6F] shadow-xs transition-all duration-200 hover:bg-[#EBF3F8] hover:border-[#527E9F] active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next concern"
                className="concerns-next-btn flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white border border-[#D8E7F1] text-[#2D4F6F] shadow-xs transition-all duration-200 hover:bg-[#EBF3F8] hover:border-[#527E9F] active:scale-95 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Concern Carousel */}
          <div className="mx-auto mt-10 sm:mt-12 max-w-[1240px]">
            {isMounted ? (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".concerns-prev-btn",
                  nextEl: ".concerns-next-btn",
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={concerns.length > 3}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 22,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 3.2,
                    spaceBetween: 24,
                  },
                }}
                className="!pb-6 !pt-2"
              >
                {concerns.map((item, i) => (
                  <SwiperSlide key={item.id} className="!h-auto flex">
                    <article className="h-full w-full flex flex-col justify-between rounded-[22px] bg-white p-6 sm:p-7 border border-[#EAECEF] transition-all duration-300 group select-none">
                      {/* Top row: Number and category tag */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#EBF3F8]/40 text-[11px] font-bold text-[#2D4F6F] tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527E9F] bg-[#F0F5FA]/50 px-2.5 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title & condensed description */}
                        <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0E2236] tracking-[-0.02em] leading-snug group-hover:text-[#2D4F6F] transition-colors">
                          {item.concern}
                        </h3>

                        <p className="mt-2.5 text-[13.5px] text-[#536273] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom row: Divider + Modalities + Quick CTA */}
                      <div>
                        <div className="mt-5 pt-4 border-t border-[#EDF2F7]">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9BA8] block mb-2">
                            Treatment Options:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.options.map((opt) => (
                              <span
                                key={opt}
                                className="inline-block px-2.5 py-1 text-[11.5px] font-medium text-[#2D4F6F] bg-[#F7F9FC] border border-[#EAECEF] rounded-full"
                              >
                                {opt}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {concerns.slice(0, 3).map((item, i) => (
                  <article
                    key={item.id}
                    className="flex flex-col justify-between rounded-[22px] bg-white p-6 sm:p-7 border border-[#EAECEF]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#EBF3F8] text-[11px] font-bold text-[#2D4F6F]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527E9F] bg-[#F0F5FA] border border-[#DCE8F1] px-2.5 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-[18px] font-semibold text-[#0E2236]">
                        {item.concern}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] text-[#536273]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Technology Section Header ── */}
      <section className="bg-neutral-50 pt-16 sm:pt-20 lg:pt-24 pb-4" id="technology">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left: heading + intro */}
              <div className="lg:col-span-6">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
                  Advanced Technology
                </span>
                <h2
                  className="mt-3 font-semibold leading-[1.1] tracking-[-0.04em] text-[#0E1A2B]"
                  style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
                >
                  Technology at{" "}
                  <span className="text-[#527E9F]">
                    West Valley.
                  </span>
                </h2>

                <div className="my-5 h-px bg-[#D8E7F1]" />

                <p className="text-[15px] leading-[1.78] text-[#536273]">
                  Our concern-led approach is supported by advanced aesthetic technology and injectable treatments, selected based on what is appropriate for your individual skin condition and goals.
                </p>
              </div>

              {/* Right: Philosophy callout */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-white p-6 sm:p-7">
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F] mb-2.5">
                    Our Philosophy
                  </p>
                  <p className="text-[16px] font-semibold text-[#0E2236] leading-snug tracking-[-0.02em]">
                    Assess first. Treat appropriately. Enhance naturally.
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

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
