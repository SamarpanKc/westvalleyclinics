import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    id: "dr-dental-1",
    name: "West Valley Dental Team",
    role: "Dental Surgeons &amp; Specialists",
    specialty: "Implants &amp; Orthodontics",
    image: "/images/team/team-1.png",
    bio: "Our experienced team of dental professionals specialises in the full spectrum of modern dentistry — from pain-free root canals and dental implants to cosmetic smile makeovers and orthodontics. Every patient receives personalised, gentle care.",
  },
  {
    id: "dr-dental-2",
    name: "Cosmetic &amp; Restorative Unit",
    role: "Cosmetic Dentists",
    specialty: "Smile Makeovers &amp; Veneers",
    image: "/images/team/team-2.png",
    bio: "Our cosmetic dentistry unit combines artistry with clinical precision to deliver natural-looking smile transformations. Whether you need veneers, crowns, whitening, or bonding, our team tailors every treatment to your facial aesthetics and goals.",
  },
];

function Team() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Our{" "}
            <span className="text-[#527E9F]">Team.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Meet the dedicated dental professionals behind West Valley&apos;s
            compassionate, world-class oral care.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-8 sm:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <article
              key={member.id}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(0)}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_2px_16px_rgba(82,126,159,0.08)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(82,126,159,0.16)] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden bg-[#EEF4FB]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                {/* Specialty pill */}
                <div className="absolute top-4 right-4">
                  <span
                    className="inline-flex items-center rounded-full bg-[#527E9F] px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-sm"
                    dangerouslySetInnerHTML={{ __html: member.specialty }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 pt-4">
                <h3
                  className="text-[19px] font-bold leading-snug tracking-[-0.02em] text-[#0E2236] transition-colors duration-300 group-hover:text-[#3E7298]"
                  dangerouslySetInnerHTML={{ __html: member.name }}
                />
                <p
                  className="mt-1 text-[13px] font-semibold uppercase tracking-widest text-[#527E9F]"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                />
                <div className="my-4 h-[1px] w-full bg-[#D8E7F1]" />
                <p className="text-[14px] leading-relaxed text-[#536273] text-justify">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-16 max-w-[1000px]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 rounded-[24px] bg-white px-8 py-8 shadow-[0_2px_16px_rgba(82,126,159,0.08)]">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "10,000+", label: "Patients Treated" },
              { value: "4.8★", label: "Google Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="font-semibold text-[#2D4F6F] leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
                >
                  {value}
                </p>
                <p className="mt-2 text-[13px] text-[#536273]">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;
