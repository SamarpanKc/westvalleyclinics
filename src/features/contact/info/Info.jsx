import { Phone, Mail, MapPin } from "react-feather";

const contactItems = [
  {
    id: "phone",
    icon: Phone,
    label: "Call Us",
    lines: ["061-590095", "9856080095"],
    href: "tel:061590095",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    lines: ["wvmedico@gmail.com"],
    href: "mailto:wvmedico@gmail.com",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Visit Here",
    lines: ["Infront of Nagarpalika Office, New Rd, Pokhara"],
    href: "https://maps.google.com/?q=West+Valley+Medical+Clinic",
  },
];

function Info() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Section Heading */}
        <div className="mx-auto max-w-[640px] text-center">
          <h1
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Get in{" "}
            <span className="text-[#527E9F]">Touch.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            We&apos;re here to help. Reach out to us via phone, email, or visit
            our clinic in Pokhara.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto mt-12 grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-3">
          {contactItems.map(({ id, icon: Icon, label, lines, href }) => (
            <a
              key={id}
              href={href}
              target={id === "location" ? "_blank" : undefined}
              rel={id === "location" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-4 rounded-[24px] bg-white/50 px-6 py-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FB]/40 transition-colors duration-300 group-hover:bg-[#527E9F]">
                <Icon
                  size={20}
                  className="text-[#527E9F] transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#0E2236]">{label}</p>
                {lines.map((line, i) => (
                  <p key={i} className="mt-1 text-[14px] leading-snug text-[#536273]">
                    {line}
                  </p>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Map */}
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-[24px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7859459923075!2d83.97360701413321!3d28.213815309660657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951ea3b2ef2b%3A0x8d06c118e03ed10b!2sWest%20Valley%20Medical%20Clinic%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1674728494954!5m2!1sen!2snp"
            width="100%"
            height="420"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block border-0"
          />
        </div>

      </div>
    </section>
  );
}

export default Info;
