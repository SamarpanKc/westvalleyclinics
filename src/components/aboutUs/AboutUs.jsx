import { scrollToContact } from "../../utils/scrollToContact";

const treatments = [
  {
    label: "Hair transplant & restoration",
    note: "FUE & advanced grafting techniques",
  },
  {
    label: "Skin, nail & STD conditions",
    note: "Diagnosis-led, confidential care",
  },
  {
    label: "Advanced aesthetic & anti-ageing treatments",
    note: "Non-surgical rejuvenation",
  },
  {
    label: "Plastic, cosmetic & reconstructive surgery",
    note: "Precision surgical outcomes",
  },
];

const stats = [
  { value: "20+", label: "Years combined clinical expertise" },
  { value: "New Road", label: "Pokhara, easy to reach" },
  { value: "4", label: "Specialised care disciplines" },
];

function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-28" id="aboutUs">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#527E9F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Header row: eyebrow + heading on the left, lead statement on the right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-6">
            <h2
              className="mt-4 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              About <span className="text-[#527E9F]">Us.</span>
            </h2>
          </div>
        </div>

        {/* Split layout: image column + content column */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">

          {/* Image column */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[440px] lg:mx-0">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-[#527E9F]/20" />
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src="/images/about/DoctorConsultingPatientWestValley.jpg"
                  alt="Doctor consulting with a patient at West Valley Clinic"
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>
              {/* 20-year badge — half inside, half outside bottom-right */}
              <img
                src="/images/about/20yearsExperienceBatch.png"
                alt="20 years of experience"
                className="absolute bottom-0 right-0 h-[110px] w-[110px] translate-x-1/2 translate-y-1/2 sm:h-[128px] sm:w-[128px]"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#536273]">
              Located on New Road, Pokhara, we bring together experienced doctors, modern
              technology, and a patient-first philosophy to treat you with the care you deserve.
            </p>

            {/* Stats strip */}
            {/* <div className="mt-8 grid grid-cols-1 gap-4 border-y border-[#EAECEF] py-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="sm:border-l sm:first:border-l-0 sm:pl-4 sm:first:pl-0">
                  <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#2D4F6F]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-[#536273]">{stat.label}</p>
                </div>
              ))}
            </div> */}

            {/* What we treat list */}
            <div className="mt-8">
              <h3 className="text-[13px] font-semibold tracking-wider text-[#527E9F] uppercase">
                What we treat
              </h3>
              <div className="mt-4 divide-y divide-[#EAECEF] rounded-2xl bg-white">
                {treatments.map((treatment, index) => (
                  <div
                    key={treatment.label}
                    className="flex items-center gap-4 px-5 py-4 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#527E9F]/10 text-[13px] font-semibold text-[#2D4F6F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] font-medium text-[#0E2236]">{treatment.label}</p>
                      <p className="mt-0.5 truncate text-[13px] text-[#8592A3]">{treatment.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value & philosophy */}
            <p className="mt-8 text-[15px] sm:text-[16px] leading-[1.8] text-[#536273]">
              Every treatment plan is built around you &mdash; your goals, your condition, your comfort.
              Safety, privacy, and natural results come first, always.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,#0E2236_0%,#2D4F6F_55%,#6A97BC_100%)] px-7 py-8 sm:flex-row sm:px-10 sm:py-9 lg:mt-16">
          <div className="text-center sm:text-left">
            <p className="text-[18px] font-semibold tracking-[-0.01em] text-white">
              Ready for a change?
            </p>
            <p className="mt-1 text-[14px] text-white/70">
              Book a one-on-one consultation with our specialists today.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            id="about-us-book-btn"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-medium tracking-normal text-[#0E2236] transition-all duration-200 hover:brightness-95 active:scale-[0.98] cursor-pointer"
          >
            Book your consultation today
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
