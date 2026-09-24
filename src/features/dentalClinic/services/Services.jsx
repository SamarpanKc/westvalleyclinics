import { useState } from "react";

const servicesData = [
  {
    id: "implants",
    tag: "Permanent Solution",
    title: "Dental Implants",
    description:
      "A secure, long-term replacement for missing teeth using titanium posts that integrate with your jawbone — looking and feeling just like natural teeth.",
    image: "/images/dentalClinic/implants.png",
  },
  {
    id: "root-canal",
    tag: "Pain-Free",
    title: "Root Canal Treatment",
    description:
      "Pain-free root canal therapy designed to relieve infection and save your natural tooth, performed with modern anaesthesia so you stay comfortable throughout.",
    image: "/images/dentalClinic/rootCanal.png",
  },
  {
    id: "braces",
    tag: "Orthodontics",
    title: "Braces &amp; Invisalign",
    description:
      "Personalised orthodontic treatment to correct bite issues and alignment — from traditional metal braces to clear aligner options like Invisalign.",
    image: "/images/dentalClinic/braces.png",
  },
  {
    id: "cosmetic",
    tag: "Smile Makeover",
    title: "Cosmetic Dentistry",
    description:
      "Comprehensive smile makeovers combining veneers, teeth whitening, and bonding to correct imperfections and give you the confident smile you deserve.",
    image: "/images/dentalClinic/cosmetic.png",
  },
  {
    id: "crown",
    tag: "Restoration",
    title: "Dental Crowns &amp; Bridges",
    description:
      "High-quality porcelain and metal crowns and bridges to restore damaged or missing teeth to their natural shape, strength, and appearance.",
    image: "/images/dentalClinic/crown.png",
  },
  {
    id: "surgery",
    tag: "Oral Surgery",
    title: "Dental Surgeries",
    description:
      "Expert oral surgical care including wisdom tooth extraction, surgical implant placement, and other procedures performed with precision and comfort.",
    image: "/images/dentalClinic/surgery.png",
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
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Dental{" "}
            <span className="text-[#527E9F]">Services.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Comprehensive dental care from routine treatments to advanced
            procedures — all delivered with modern technology and a gentle
            approach.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {servicesData.map((service) => {
            const isHovered = activeCard === service.id;

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white"
              >
                {/* Image Banner */}
                <div className="relative h-[230px] w-full overflow-hidden bg-[#F0F5FA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out"
                    style={{
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                  />
                  {/* Gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-white pointer-events-none" />

                  {/* Tag pill */}
                  <div className="absolute top-0 right-0 z-10">
                    <span
                      className="inline-flex items-center bg-[#527E9F] px-3.5 py-1 text-[12px] font-semibold tracking-wide text-white rounded-bl-2xl"
                      dangerouslySetInnerHTML={{ __html: service.tag }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 pt-2">
                  <h3
                    className="text-[20px] font-bold leading-snug tracking-[-0.02em] text-[#0E2236] transition-colors duration-300 group-hover:text-[#3E7298]"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
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
