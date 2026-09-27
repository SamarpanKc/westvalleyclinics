import Image from "next/image";

const teamMembers = [
  {
    id: "dr-pravin",
    name: "Dr. Pravin Baniya, MD & Team",
    credential: "",
    role: "Dermatologist",
    image: "/images/team/team dr PRAVIN BANIYA.jpg",
    bio: "Dr. Baniya leads West Valley's dermatology practice with a focus on medical and cosmetic skin care, treating conditions ranging from acne and pigmentation to complex inflammatory skin diseases.",
  },
  
];

function OurTeamSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{ background: "#f7f9fc" }}>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Heading */}
        <div className="mb-14 sm:mb-16">
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#527E9F]"
          >
            The People Behind Your Care
          </p>
          <h2
            className="font-semibold leading-[1.06] tracking-[-0.035em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            Our Team
          </h2>
        </div>

        {/* Members */}
        <div className={teamMembers.length > 1 ? "grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" : "w-full max-w-[1080px]"}>
          {teamMembers.map((member) => (
            <article key={member.id} className="flex flex-col">
              {/* Photo */}
              <div
                className="relative mb-6 w-full overflow-hidden"
                style={{ aspectRatio: teamMembers.length === 1 ? "3 / 2" : "3 / 4" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes={teamMembers.length === 1 ? "(max-width: 1024px) 100vw, 1080px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"} 
                  priority={member.id === "dr-pravin"}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col max-w-[800px]">
                <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#527E9F]">
                  {member.role}
                </p>
                <h3
                  className="font-semibold leading-snug tracking-[-0.025em] text-[#0E1A2B]"
                  style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
                >
                  {member.name}
                  {member.credential && (
                    <span className="ml-1.5 text-[14px] font-normal text-[#536273]">
                      {member.credential}
                    </span>
                  )}
                </h3>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.75] text-[#536273]">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Stats — plain text strip, no container */}
        <div className="mt-20 grid grid-cols-2 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {[
            { value: "20+", label: "Years combined experience" },
            { value: "2,000+", label: "Patients treated" },
            { value: "4.8", label: "Google rating" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-semibold leading-none tracking-[-0.04em] text-[#2D4F6F]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
              >
                {value}
              </span>
              <span className="mt-2 text-[13px] text-[#6B7E90]">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurTeamSection;
