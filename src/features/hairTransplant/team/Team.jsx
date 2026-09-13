import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    id: "dr-sundar",
    name: "Dr. Sundar Raj Pandey",
    role: "Hair Transplant Surgeon",
    specialty: "FUE-DHT & Hair Restoration",
    image: "/images/team/team-1.png",
    bio: "Pioneering hair restoration specialist with extensive expertise in FUE-DHT 'No Root Touch' technique. Dr. Pandey has helped hundreds of patients regain their confidence through precise, natural-looking transplants.",
  },
  {
    id: "dr-team-2",
    name: "West Valley Medical Team",
    role: "Skin & Aesthetics Specialists",
    specialty: "Dermatology & Aesthetic Medicine",
    image: "/images/team/team-2.png",
    bio: "Our multidisciplinary team of skin and aesthetics professionals brings together cutting-edge techniques in PRP therapy, botox, fillers, carbon peels, and thread lifts — delivering personalized care for every patient.",
  },
];

function OurTeamSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h1
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Our{" "}
            <span className="text-[#527E9F]">Team.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Meet the dedicated professionals behind West Valley&apos;s
            world-class care — experienced, passionate, and committed to your
            best results.
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
                  <span className="inline-flex items-center rounded-full bg-[#527E9F] px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-sm">
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 pt-4">
                <h2 className="text-[19px] font-bold leading-snug tracking-[-0.02em] text-[#0E2236] transition-colors duration-300 group-hover:text-[#3E7298]">
                  {member.name}
                </h2>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-widest text-[#527E9F]">
                  {member.role}
                </p>
                <div className="my-4 h-[1px] w-full bg-[#D8E7F1]" />
                <p className="text-[14px] leading-relaxed text-[#536273] text-justify">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mx-auto mt-16 max-w-[1000px]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 rounded-[24px] bg-white px-8 py-8 shadow-[0_2px_16px_rgba(82,126,159,0.08)]">
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "2000+", label: "Patients Treated" },
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

export default OurTeamSection;
