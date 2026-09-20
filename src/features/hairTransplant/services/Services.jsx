import { useState } from "react";

const servicesData = [
  {
    id: "prp",
    tag: "Therapy",
    code: "PRP",
    title: "Platelet Rich Plasma (PRP)",
    description:
      "Autologous plasma extracted from your blood is enriched and injected into the scalp to awaken dormant follicles and accelerate natural hair regrowth.",
    image: "/images/hairTransplant/prp.png",
  },
  {
    id: "gfc",
    tag: "Concentrate",
    code: "GFC",
    title: "Growth Factor Concentration (GFC)",
    description:
      "High-concentration growth factors isolated from blood plasma are directly delivered to hair roots to combat hair fall and enhance shaft thickness.",
    image: "/images/hairTransplant/gfc.png",
  },
  {
    id: "exosome",
    tag: "Biostimulation",
    code: "EXOSOME",
    title: "Exosome Hair Booster",
    description:
      "Advanced non-surgical scalp biostimulation delivering biological signalling factors to revitalize hair follicles, reduce thinning, and promote denser, healthier hair.",
    image: "/images/hairTransplant/exosomehairBooster.jpg",
  },
];

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="mt-5 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Hair Treatment{" "}
            <span className="text-[#527E9F]">Services.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Comprehensive non-surgical restoration therapies designed to stimulate
            natural growth, enhance scalp coverage, and maximize follicle vitality.
          </p>
        </div>

        {/* Steady Grid Cards Container (No height change, No shadow) */}
        <div className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {servicesData.map((service) => {
            const isHovered = activeCard === service.id;

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-white `}
              >
                {/* Image Banner Container (Fixed height, image zooms inside overflow-hidden without shifting layout) */}
                <div className="relative h-[230px] w-full overflow-hidden bg-[#F0F5FA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    style={{
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                  />

                  {/* Gradient Fade to White at Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-white pointer-events-none" />

                  {/* Category Tag Pill */}
                  <div className="absolute top-0 right-0 z-10">
                    <span className="inline-flex items-center bg-[#527E9F] px-3.5 py-1 text-[12px] font-semibold tracking-wide text-[#ffffff] rounded-bl-2xl">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 pt-2">
                  <h3 className="text-[20px] font-bold leading-snug tracking-[-0.02em] text-[#0E2236] transition-colors duration-300 group-hover:text-[#3E7298]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-[#536273] text-justify">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
