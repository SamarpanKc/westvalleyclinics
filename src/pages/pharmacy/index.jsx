import { useState } from "react";
import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { scrollToContact } from "../../utils/scrollToContact";
import {
  ArrowRight,
  Plus,
  CheckCircle,
  Shield,
  Activity,
  Heart,
  Droplet,
  Sun,
  Smile,
  PhoneCall,
  Calendar,
  Star,
} from "react-feather";

const serviceCards = [
  {
    id: "skincare",
    num: "01",
    title: "Dermatology & Skin Care",
    description:
      "Cleansing, barrier hydration, acne management, pigmentation correction & broad-spectrum sun care.",
    highlight: "Japan, Korea & Europe",
    icon: Droplet,
  },
  {
    id: "haircare",
    num: "02",
    title: "Hair Care & Scalp Therapy",
    description:
      "Therapeutic shampoos, follicle nourishment, scalp treatments & post-transplant recovery care.",
    highlight: "Turkey, Europe & India",
    icon: Star,
  },
  {
    id: "babycare",
    num: "03",
    title: "Hypoallergenic Baby Care",
    description:
      "Gentle tear-free washes, soothing barrier balms, delicate hair care & pediatric-safe essentials.",
    highlight: "Europe, America & Japan",
    icon: Heart,
  },
  {
    id: "wellness",
    num: "04",
    title: "Multivitamins & Wellness",
    description:
      "Bio-active daily vitamins, essential minerals, immune fortification & holistic personal care.",
    highlight: "America, Europe & Japan",
    icon: Activity,
  },
];

const teamSpecialists = [
  {
    name: "Dr. Sundar Raj Pandey",
    role: "Hair Transplant Surgeon",
    image: "/images/team/team-1.png",
    status: "Consult",
  },
  {
    name: "Dr. A. Sharma",
    role: "Chief Pharmacist",
    image: "/images/pharmacy/doctor-portrait.jpg",
    status: "Available",
  },
  {
    name: "Dr. Sarah Jensen",
    role: "Dermatology Specialist",
    image: "/images/pharmacy/consulting-doctor.jpg",
    status: "Consult",
  },
  {
    name: "Dr. David Chen",
    role: "Internal Medicine",
    image: "/images/pharmacy/hero-doctor.jpg",
    status: "Available",
  },
];

const inquiryCategories = [
  { id: "skin", label: "Skin", icon: Droplet, dept: "Skin Care & Dermatology" },
  { id: "hair", label: "Hair", icon: Star, dept: "Hair Care & Scalp Therapy" },
  { id: "baby", label: "Baby", icon: Heart, dept: "Pediatric & Baby Care" },
  { id: "wellness", label: "Wellness", icon: Smile, dept: "Wellness & Personal Care" },
  { id: "vitamins", label: "Vitamins", icon: Activity, dept: "Multivitamins & Supplements" },
  { id: "prescription", label: "Prescription", icon: Plus, dept: "Prescription Dispensing" },
];

function PharmacyPage() {
  const [activeCategory, setActiveCategory] = useState("skin");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const selectedCategoryObj = inquiryCategories.find((c) => c.id === activeCategory);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      scrollToContact();
    }, 400);
  };

  return (
    <>
      <Head>
        <title>Pharmacy | West Valley Medical Clinic Pokhara</title>
        <meta
          name="description"
          content="West Valley Pharmacy in Pokhara. Premium healthcare, skincare, haircare, wellness, baby care, and multivitamins carefully sourced from Japan, Korea, Turkey, Europe, India, and America."
        />
      </Head>

      <main className="bg-neutral-50 min-h-screen py-6 sm:py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14 space-y-12 sm:space-y-16 lg:space-y-20">

          {/* ══════════════════════════════════════════════════════
              SECTION 1: HERO / BANNER CARD
             ══════════════════════════════════════════════════════ */}
          <section className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] bg-[linear-gradient(135deg,#EEF5FB_0%,#F8FAFC_55%,#E7F0F8_100%)] border border-[#DCE7F2] p-8 sm:p-12 lg:p-16">
            {/* Subtle decorative background stars */}
            <div className="absolute top-10 right-1/2 text-[#527E9F]/25 text-xl select-none pointer-events-none">
              ✦
            </div>
            <div className="absolute bottom-8 left-1/3 text-[#527E9F]/20 text-lg select-none pointer-events-none">
              ✦
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#D0E0EE] text-[12px] font-semibold text-[#2D4F6F] shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#527E9F]" />
                Certified Dispensary
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7 xl:col-span-7">
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D0E0EE] text-[12.5px] font-semibold text-[#2D4F6F] shadow-2xs mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#527E9F]" />
                  <span>Clinical Pharmacy &amp; Medical Dispensary</span>
                </div>

                <h1
                  className="font-semibold text-[#0E1A2B] leading-[1.08] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(34px, 4.2vw, 58px)" }}
                >
                  Your health is <br />
                  <span className="text-[#527E9F]">our priority</span>
                </h1>

                <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#536273] max-w-[540px]">
                  At West Valley Pharmacy, we provide verified prescription dispensing,
                  specialized dermatological therapeutics, premium haircare formulations,
                  and holistic wellness essentials curated by clinical practitioners.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                  <button
                    onClick={scrollToContact}
                    id="pharmacy-hero-consult-btn"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14.5px] font-medium shadow-sm hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Consult Pharmacist
                  </button>

                  <a
                    href="#services-section"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2D4F6F] hover:text-[#0E1A2B] transition-colors"
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Sourcing Footprint Bar */}
                <div className="mt-10 pt-6 border-t border-[#D6E3EF] flex flex-wrap items-center gap-2">
                  <span className="text-[12px] font-semibold text-[#527E9F] uppercase tracking-wider mr-2">
                    Verified Sourcing:
                  </span>
                  {["Japan", "Korea", "Turkey", "Europe", "America"].map((country) => (
                    <span
                      key={country}
                      className="px-2.5 py-0.5 text-[11.5px] font-medium text-[#2D4F6F] bg-white/90 rounded-full border border-[#D4E2EE]"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Doctor Image with Soft Arch Backdrop */}
              <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-end">
                <div className="relative w-full max-w-[420px] flex justify-center">
                  {/* Soft Background Arch Backdrop */}
                  <div
                    className="absolute bottom-0 w-[88%] h-[92%] bg-[linear-gradient(180deg,#D4E4F5_0%,#E9F2FA_100%)] border border-white/80 shadow-inner"
                    style={{ borderRadius: "180px 180px 32px 32px" }}
                  />

                  {/* Doctor Image */}
                  <div
                    className="relative z-10 w-[84%] h-[380px] sm:h-[440px] overflow-hidden shadow-sm"
                    style={{ borderRadius: "160px 160px 24px 24px" }}
                  >
                    <img
                      src="/images/pharmacy/hero-doctor.jpg"
                      alt="West Valley Clinical Doctor"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 2: SERVICES & 2x2 FEATURE CARDS
             ══════════════════════════════════════════════════════ */}
          <section id="services-section" className="scroll-mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#527E9F] mb-3">
                  <span>Pharmacy Care</span>
                  <ArrowRight size={14} />
                </div>

                <h2
                  className="font-semibold text-[#0E1A2B] leading-[1.12] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
                >
                  Medical healthcare tailored for every prominent need.
                </h2>

                <p className="mt-5 text-[15px] sm:text-[15.5px] leading-[1.8] text-[#536273]">
                  Our dispensary provides precision dermaceuticals, trichological formulations,
                  safe infant essentials, and validated nutritional supplements with complete
                  chain-of-custody tracking.
                </p>

                <div className="mt-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-[13px] font-semibold border border-[#D8E7F1]">
                    <span className="h-2 w-2 rounded-full bg-[#527E9F]" />
                    <span>100% Verified Clinical Imports</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 2x2 Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {serviceCards.map((service) => {
                  return (
                    <article
                      key={service.id}
                      className="rounded-[24px] bg-white border border-[#EAECEF] p-6 shadow-xs hover:border-[#527E9F]/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Circular Action Button at Top */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-9 w-9 rounded-full bg-[#527E9F] text-white flex items-center justify-center shadow-xs group-hover:bg-[#2D4F6F] transition-colors">
                            <ArrowRight size={16} />
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#527E9F] bg-[#EBF3F8] px-2.5 py-0.5 rounded-full">
                            {service.num}
                          </span>
                        </div>

                        <h3 className="text-[17px] font-bold text-[#0E2236] leading-snug">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-[13.5px] text-[#536273] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-[#F0F2F5] flex items-center justify-between text-[12px]">
                        <span className="font-semibold text-[#8A9BA8]">Origin:</span>
                        <span className="font-medium text-[#2D4F6F]">{service.highlight}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* ── Sub-row: 4 Team Specialists ── */}
            <div className="mt-12 pt-8 border-t border-[#EAECEF] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamSpecialists.map((doc) => (
                <div
                  key={doc.name}
                  className="rounded-[20px] bg-white border border-[#EAECEF] p-4 flex items-center gap-3.5 shadow-2xs hover:border-[#527E9F]/30 transition-all"
                >
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-[#EBF3F8] border border-[#D8E7F1] shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[14px] font-bold text-[#0E2236] truncate leading-tight">
                      {doc.name}
                    </h4>
                    <p className="text-[12px] text-[#536273] truncate mt-0.5">{doc.role}</p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-[#2D4F6F] bg-[#EBF3F8] px-2 py-0.2 rounded-full">
                      {doc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 4: SPLIT FEATURE & DOCTOR IMAGE
             ══════════════════════════════════════════════════════ */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Left Tinted Information Card */}
              <div className="rounded-[28px] sm:rounded-[36px] bg-[#DDE8F4]/55 border border-[#CFDFEF] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#527E9F]">
                    Safety &amp; Compliance
                  </span>

                  <h3
                    className="mt-3 font-semibold text-[#0E2236] leading-[1.18] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(24px, 2.5vw, 34px)" }}
                  >
                    Direct access to certified international formulations.
                  </h3>

                  <div className="my-5 h-px bg-[#C8D9E8]" />

                  <p className="text-[15px] sm:text-[15.5px] leading-[1.8] text-[#475569]">
                    Navigating specialized medical treatments, sensitive skincare, and daily prescriptions
                    requires complete confidence in authenticity. At West Valley, our in-house medical oversight
                    ensures every product in our pharmacy is properly sealed, batch-verified, and maintained
                    under climate-controlled temperature standards with unbroken cold-chain compliance.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "100% genuine batch-verified imports with certified chain of custody",
                      "Medical-grade dermatological, trichological & pediatric formulations",
                      "Direct patient counseling from registered clinic pharmacists",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={17} className="text-[#527E9F] mt-0.5 shrink-0" />
                        <span className="text-[14px] font-medium text-[#1E293B]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#C8D9E8] flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#2D4F6F]">
                    Need a rare or specific prescription?
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="text-[13px] font-bold text-[#2D4F6F] underline underline-offset-4 hover:text-[#0E1A2B] cursor-pointer"
                  >
                    Inquire Availability →
                  </button>
                </div>
              </div>

              {/* Right: Consulting Doctor Photo */}
              <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#EAECEF] bg-white h-[360px] sm:h-[420px] lg:h-full min-h-[360px] shadow-xs">
                <img
                  src="/images/pharmacy/consulting-doctor.jpg"
                  alt="West Valley Clinical Consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 5: DOCTOR PORTRAIT + APPOINTMENT CARD
             ══════════════════════════════════════════════════════ */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Left Column: Doctor Portrait Photo */}
              <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#EAECEF] bg-white h-[380px] lg:h-full min-h-[380px] shadow-xs">
                <img
                  src="/images/pharmacy/doctor-portrait.jpg"
                  alt="West Valley Specialist Pharmacist"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Column: Appointment & Inquiry Card */}
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#EAECEF] p-7 sm:p-10 lg:p-12 shadow-xs flex flex-col justify-between">
                <div>
                  <h3
                    className="font-semibold text-[#0E1A2B] leading-tight tracking-[-0.03em]"
                    style={{ fontSize: "clamp(22px, 2.2vw, 30px)" }}
                  >
                    Appointment &amp; Pharmacy Inquiries
                  </h3>

                  <p className="mt-2 text-[14px] text-[#536273] leading-relaxed">
                    Select your area of interest or request prescription confirmation directly from our team.
                  </p>

                  {/* Category Pill Icons Row (Matching reference top icon selector) */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {inquiryCategories.map((cat) => {
                      const IconComp = cat.icon;
                      const isActive = activeCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#2D4F6F] text-white shadow-2xs"
                              : "bg-[#F0F5FA] text-[#527E9F] hover:bg-[#E2EDF6]"
                          }`}
                        >
                          <IconComp size={13} />
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4">
                    {/* Selected Department Field */}
                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#8A9BA8] mb-1">
                        Service Category
                      </label>
                      <div className="w-full px-4 py-3 rounded-xl bg-[#F7F9FC] border border-[#EAECEF] text-[14px] text-[#0E2236] font-medium">
                        {selectedCategoryObj?.dept}
                      </div>
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#8A9BA8] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Ramesh Thapa"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E2EC] text-[14px] text-[#0E2236] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#527E9F] transition-colors"
                      />
                    </div>

                    {/* Phone & Verification Action */}
                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#8A9BA8] mb-1">
                        Phone / WhatsApp
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="e.g. 9856080095"
                          className="w-full px-4 py-3 pr-28 rounded-xl bg-white border border-[#D8E2EC] text-[14px] text-[#0E2236] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#527E9F] transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (patientPhone) alert(`Inquiry initiated for ${patientPhone}`);
                          }}
                          className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#EBF3F8] text-[#2D4F6F] text-[12px] font-bold hover:bg-[#D8E7F1] transition-colors cursor-pointer"
                        >
                          Verify
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="pharmacy-appointment-submit-btn"
                      className="w-full mt-2 py-3.5 px-6 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14.5px] font-semibold tracking-wide shadow-sm hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      {formSubmitted ? "Connecting to Specialists..." : "Confirm & Inquire Consultation"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ── Standard Clinic AboutUs & Booking Sections ── */}
        <div className="mt-16 sm:mt-24">
          <AboutUs />
        </div>
      </main>
    </>
  );
}

export default PharmacyPage;

PharmacyPage.Layout = Layout;
