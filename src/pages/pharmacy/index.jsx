import Head from "next/head";
import Image from "next/image";
import Layout from "../../layout/BaseLayout";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { scrollToContact } from "../../utils/scrollToContact";

const pharmacyDepartments = [
  {
    id: "skincare",
    num: "01",
    tag: "Dermatology & Skin Health",
    title: "Skin Care",
    description:
      "Discover skincare essentials for cleansing, hydration, acne, pigmentation, sensitive skin, sun protection, anti-ageing and everyday skin health. Every formulation in our clinic dispensary is vetted for clinical efficacy, ingredient integrity, and dermatological safety.",
    img: "/images/pharmacy/skincare.jpg",
    imgPosition: "left",
    focusAreas: [
      "Cleansing & Deep Hydration",
      "Acne & Blemish Management",
      "Pigmentation & Tone Correction",
      "Sensitive & Barrier Care",
      "Broad-Spectrum Sun Protection",
      "Anti-Ageing Therapeutics",
    ],
    sourcing: "Japan, Korea, Europe & America",
  },
  {
    id: "haircare",
    num: "02",
    tag: "Trichology & Scalp Care",
    title: "Hair Care",
    description:
      "Explore products for hair and scalp care, including specialized shampoos, conditioners, hair treatments, scalp care and hair-fall support. Formulations are selected by our trichology team to complement medical hair treatments and post-procedure recovery.",
    img: "/images/pharmacy/haircare.jpg",
    imgPosition: "right",
    focusAreas: [
      "Therapeutic Shampoos",
      "Nourishing Hair Conditioners",
      "Clinical Hair Treatments",
      "Targeted Scalp Therapy",
      "Hair-Fall & Follicle Support",
      "Post-Procedure Care",
    ],
    sourcing: "Turkey, Europe & India",
  },
  {
    id: "babycare",
    num: "03",
    tag: "Pediatric Gentle Care",
    title: "Baby Care",
    description:
      "Gentle everyday essentials for babies and children, including baby skincare, bathing, hygiene, hair care and personal care. Formulated with soothing, hypoallergenic ingredients strictly free from harsh sulfates, parabens, and artificial fragrances.",
    img: "/images/pharmacy/babycare.jpg",
    imgPosition: "left",
    focusAreas: [
      "Hypoallergenic Baby Skincare",
      "Tear-Free Bathing Washes",
      "Daily Gentle Hygiene Care",
      "Delicate Baby Hair Care",
      "Soothing Barrier Balms",
      "Pediatric Safe Formulations",
    ],
    sourcing: "Europe, America & Japan",
  },
  {
    id: "wellness",
    num: "04",
    tag: "Everyday Holistic Health",
    title: "Wellness & Personal Care",
    description:
      "A range of products selected to support everyday health, wellbeing, personal care and a healthy lifestyle. From restorative body care to daily hygiene essentials, each item meets rigorous pharmaceutical safety benchmarks.",
    img: "/images/pharmacy/wellness.jpg",
    imgPosition: "right",
    focusAreas: [
      "Everyday Health Support",
      "Holistic Daily Wellbeing",
      "Personal & Dermatological Care",
      "Active Lifestyle Essentials",
      "Restorative Body Formulations",
    ],
    sourcing: "Japan, Europe, America & India",
  },
  {
    id: "supplements",
    num: "05",
    tag: "Nutritional Health & Fortification",
    title: "Multivitamins & Supplements",
    description:
      "Explore a range of vitamins, minerals and nutritional supplements to support different nutritional and wellness needs. Batch-verified and sourced directly from certified laboratories to guarantee active ingredient potency and purity.",
    img: "/images/pharmacy/supplements.jpg",
    imgPosition: "left",
    focusAreas: [
      "Comprehensive Multivitamins",
      "Essential Minerals & Trace Elements",
      "Immune & Energy Support",
      "Targeted Nutritional Fortification",
      "Bone, Joint & Cellular Health",
    ],
    sourcing: "America, Europe, Japan & India",
  },
];

const globalMarkets = [
  { country: "Japan", highlight: "Precision dermaceuticals & advanced hydration science" },
  { country: "Korea", highlight: "Innovative soothing botanicals, essences & sun protection" },
  { country: "Turkey", highlight: "Post-transplant hair therapeutics & clinical formulations" },
  { country: "Europe", highlight: "EU-certified medical-grade dermatological care" },
  { country: "India", highlight: "Verified pharmaceutical essentials & nutritional standards" },
  { country: "America", highlight: "FDA-compliant active formulations & wellness science" },
];

function PharmacyPage() {
  return (
    <>
      <Head>
        <title>Pharmacy | West Valley Medical Clinic Pokhara</title>
        <meta
          name="description"
          content="West Valley Pharmacy in Pokhara. Premium healthcare, skincare, haircare, wellness, baby care, and multivitamins carefully sourced from Japan, Korea, Turkey, Europe, India, and America."
        />
      </Head>

      <main className="bg-neutral-50">
        {/* ── BANNER SECTION ── */}
        <section
          className="relative w-full bg-[#EEF4FB] overflow-hidden"
          style={{ minHeight: "calc(100vh - 88px)" }}
        >
          {/* Clean gradient background matching other site banners */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/hairTransplant/clean_blue_gradient_background.png"
              alt=""
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>

          {/* Bottom fade blending smoothly into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none z-20" />

          {/* Desktop Banner (lg+) */}
          <div
            className="hidden lg:flex items-center relative z-30 h-full py-16"
            style={{ minHeight: "calc(100vh - 88px)" }}
          >
            <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-10 xl:px-16 2xl:px-20 gap-10">
              {/* Text column */}
              <div className="flex-1 max-w-[660px] xl:max-w-[720px]">
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-[13px] font-semibold tracking-wide mb-6 border border-[#D8E7F1]">
                  <span>West Valley Pharmacy</span>
                </div>

                {/* Main Heading */}
                <h1
                  className="font-semibold text-[#0E1A2B] leading-[1.14] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(34px, 3.2vw, 56px)" }}
                >
                  Healthcare · Wellness · Beauty
                  <br />
                  <span
                    className="font-editorial italic font-normal text-[#2D4F6F]"
                    style={{ letterSpacing: "0.005em" }}
                  >
                    &ldquo;Personal Care&rdquo;
                  </span>{" "}
                  for Everyday Life.
                </h1>

                {/* Narrative Intro */}
                <p className="mt-6 text-[16px] xl:text-[17px] leading-[1.8] text-[#536273] max-w-[640px]">
                  At West Valley Pharmacy, we bring together a carefully selected range of healthcare,
                  skincare, haircare, wellness, baby care and personal-care products for your everyday needs.
                </p>

                <p className="mt-3 text-[15px] text-[#2D4F6F] font-medium leading-relaxed max-w-[640px]">
                  Explore products from leading markets around the world, including Japan, Korea, Turkey, Europe, India, America and beyond.
                </p>

                {/* CTA Action */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={scrollToContact}
                    id="pharmacy-banner-inquire-btn"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium tracking-normal hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Inquire or Consult
                  </button>

                  <a
                    href="#departments"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[#2D4F6F] text-[14px] font-semibold tracking-tight hover:text-[#0E1A2B] transition-colors"
                  >
                    Explore Departments ↓
                  </a>
                </div>

                {/* Quick origin tags */}
                <div className="mt-10 pt-6 border-t border-[#D8E7F1] flex flex-wrap items-center gap-2">
                  <span className="text-[12px] font-semibold text-[#527E9F] uppercase tracking-wider mr-2">
                    Global Sourcing:
                  </span>
                  {["Japan", "Korea", "Turkey", "Europe", "India", "America & Beyond"].map((origin) => (
                    <span
                      key={origin}
                      className="px-3 py-1 text-[12.5px] font-medium text-[#2D4F6F] bg-white rounded-full border border-[#D8E7F1]"
                    >
                      {origin}
                    </span>
                  ))}
                </div>
              </div>

              {/* Banner Image Column */}
              <div className="flex-shrink-0 flex items-center justify-center pl-4">
                <div
                  className="w-[440px] xl:w-[500px] 2xl:w-[540px] h-[480px] xl:h-[530px] overflow-hidden border border-[#D8E7F1]"
                  style={{
                    borderRadius: "24px 32px 32px 120px",
                  }}
                >
                  <img
                    src="/images/pharmacy/banner.jpg"
                    alt="West Valley Clinical Pharmacist"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Banner (< lg) */}
          <div className="flex lg:hidden flex-col relative z-30 pt-12 sm:pt-16 pb-12 px-6 sm:px-10 text-center items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-[12px] font-semibold tracking-wide mb-5 border border-[#D8E7F1]">
              <span>West Valley Pharmacy</span>
            </div>

            <h1
              className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
            >
              Healthcare · Wellness · Beauty
              <br />
              <span
                className="font-editorial italic font-normal text-[#2D4F6F]"
                style={{ letterSpacing: "0.005em" }}
              >
                &ldquo;Personal Care&rdquo;
              </span>
            </h1>

            <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#536273] max-w-[540px]">
              At West Valley Pharmacy, we bring together a carefully selected range of healthcare, skincare,
              haircare, wellness, baby care and personal-care products for your everyday needs.
            </p>

            <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-[#2D4F6F] font-medium max-w-[500px]">
              Products from Japan, Korea, Turkey, Europe, India, America and beyond.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                id="pharmacy-banner-inquire-btn-mobile"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[14px] font-medium tracking-normal hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Inquire or Consult
              </button>

              <a
                href="#departments"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#2D4F6F] border border-[#D8E7F1] text-[13.5px] font-medium"
              >
                Explore Departments
              </a>
            </div>

            {/* Mobile Banner Image */}
            <div className="mt-8 w-full max-w-[420px] h-[280px] overflow-hidden border border-[#D8E7F1] rounded-3xl">
              <img
                src="/images/pharmacy/banner.jpg"
                alt="West Valley Clinical Pharmacist"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-6 pt-5 border-t border-[#D8E7F1] flex flex-wrap justify-center gap-1.5 max-w-[420px]">
              {["Japan", "Korea", "Turkey", "Europe", "India", "America"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-[11.5px] font-medium text-[#2D4F6F] bg-white rounded-full border border-[#D8E7F1]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW INTRO ── */}
        <section id="departments" className="pt-14 sm:pt-16 pb-6 bg-neutral-50">
          <div className="app-layout">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
                Curated Pharmacy Dispensary
              </span>
              <h2
                className="mt-3 font-semibold leading-[1.12] tracking-[-0.04em] text-[#0E1A2B]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Healthcare · Skincare · Wellness ·{" "}
                <span className="font-editorial italic font-normal text-[#2D4F6F]">
                  Personal Care
                </span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-7 text-[#536273]">
                Every product line at West Valley Pharmacy is carefully chosen by medical professionals to ensure safety, authenticity, and proven clinical benefits for you and your family.
              </p>
            </div>
          </div>
        </section>

        {/* ── EVERY SECTION WITH IMAGE (CardLeft / CardRight Pattern) ── */}
        <div className="pb-12">
          {pharmacyDepartments.map((dept) => {
            const isLeft = dept.imgPosition === "left";

            return (
              <div key={dept.id} className="app-layout pt-10 bg-neutral-50">
                <div className="p-8 lg:p-10 lg:grid lg:grid-cols-2 lg:gap-12 items-center bg-white rounded-3xl border border-[#EAECEF]">
                  {/* Left Column: Image or Text depending on position */}
                  {isLeft ? (
                    <div className="flex justify-center lg:block">
                      <div
                        className="w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden border border-[#EAECEF]"
                        style={{
                          borderRadius: "16px 22px 22px 108px",
                        }}
                      >
                        <img
                          src={dept.img}
                          alt={dept.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null}

                  {/* Text Column */}
                  <div className={`mt-8 lg:mt-0 ${!isLeft ? "order-1" : "order-2"}`}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-[12px] font-bold text-[#527E9F] uppercase tracking-wider">
                        {dept.num}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#527E9F]" />
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-[12px] font-semibold">
                        {dept.tag}
                      </span>
                    </div>

                    <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#0E1A2B] tracking-[-0.02em]">
                      {dept.title}
                    </h3>

                    <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.78] text-[#536273]">
                      {dept.description}
                    </p>

                    {/* Included essentials / focus pills */}
                    <div className="mt-5">
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#8A9BA8] mb-2.5">
                        Key Categories &amp; Essentials:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dept.focusAreas.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#EAECEF] text-[13px] font-medium text-[#0E2236]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#527E9F] shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sourcing footprint badge */}
                    <div className="mt-6 pt-4 border-t border-[#F0F2F5] flex items-center gap-2">
                      <span className="text-[12px] font-semibold text-[#527E9F]">
                        Sourced From:
                      </span>
                      <span className="text-[12.5px] font-medium text-[#0E2236]">
                        {dept.sourcing}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Image if position is right */}
                  {!isLeft ? (
                    <div className="mt-8 flex justify-center lg:mt-0 lg:ml-auto items-center w-full order-2">
                      <div
                        className="w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden border border-[#EAECEF]"
                        style={{
                          borderRadius: "108px 16px 22px 22px",
                        }}
                      >
                        <img
                          src={dept.img}
                          alt={dept.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── GLOBAL MARKETS SOURCING ── */}
        <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 border-t border-[#EAECEF]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
            {/* Section Header */}
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#527E9F]">
                Authenticity &amp; Origin
              </span>
              <h2
                className="mt-3 font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Global Standards,{" "}
                <span className="font-editorial italic font-normal text-[#2D4F6F]">
                  Trusted Markets.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
                We partner with certified distributors and international pharmaceutical laboratories to deliver original, verified formulations to Pokhara.
              </p>
            </div>

            {/* Two-Column Info Card */}
            <div className="mx-auto mt-12 max-w-[1240px]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-7 sm:p-10 lg:p-12 rounded-3xl border border-[#EAECEF]">
                {/* Left side: Narrative & Commitments */}
                <div className="lg:col-span-6">
                  <h3
                    className="font-semibold text-[#0E2236] leading-[1.25] tracking-[-0.025em]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    Direct Access to Leading International Formulations
                  </h3>

                  <div className="my-5 h-[1px] bg-[#D8E7F1]" />

                  <p className="text-[15px] leading-[1.78] text-[#536273]">
                    Navigating specialty skincare, hair therapeutics, and supplements requires confidence in authenticity. At West Valley, our in-house medical oversight ensures every product in our pharmacy is properly vetted, sealed, and stored under ideal climate conditions.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "100% genuine and batch-verified imports",
                      "Specialized clinical dermatological and trichological formulations",
                      "Professional guidance from certified clinic pharmacists and practitioners",
                    ].map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 flex h-2 w-2 rounded-full bg-[#527E9F] shrink-0" />
                        <span className="text-[14.5px] font-medium text-[#0E2236]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: Countries & Highlights */}
                <div className="lg:col-span-6 space-y-3">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[#527E9F] mb-4">
                    Our Sourcing Footprint
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {globalMarkets.map((market) => (
                      <div
                        key={market.country}
                        className="rounded-xl border border-[#EAECEF] bg-[#F7F9FC] p-4"
                      >
                        <span className="text-[15px] font-bold text-[#0E2236] block">
                          {market.country}
                        </span>
                        <span className="text-[12.5px] text-[#536273] leading-snug mt-1 block">
                          {market.highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-[#EBF3F8] text-[#2D4F6F] flex items-center justify-between border border-[#D8E7F1]">
                    <span className="text-[13.5px] font-medium">
                      Looking for a specific prescription or imported brand?
                    </span>
                    <button
                      onClick={scrollToContact}
                      className="text-[13px] font-bold text-[#2D4F6F] underline underline-offset-4 hover:text-[#0E1A2B] shrink-0 ml-3 cursor-pointer"
                    >
                      Ask Us →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT US SECTION ── */}
        <AboutUs />

        {/* ── BOOK CONSULTATION SECTION ── */}
        <BookAppointment />
      </main>
    </>
  );
}

export default PharmacyPage;

PharmacyPage.Layout = Layout;
