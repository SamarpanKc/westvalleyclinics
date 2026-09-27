import Head from "next/head";
import Link from "next/link";
import Layout from "../../layout/BaseLayout";
import AboutUs from "../../components/aboutUs/AboutUs";
import { ArrowRight, ArrowUpRight } from "react-feather";

const categories = [
  {
    num: "01",
    title: "Skin Care",
    description:
      "Discover skincare essentials for cleansing, hydration, acne, pigmentation, sensitive skin, sun protection, anti-ageing and everyday skin health.",
  },
  {
    num: "02",
    title: "Hair Care",
    description:
      "Explore products for hair and scalp care, including shampoos, conditioners, hair treatments, scalp care and hair-fall support.",
  },
  {
    num: "03",
    title: "Baby Care",
    description:
      "Gentle everyday essentials for babies and children, including baby skincare, bathing, hygiene, hair care and personal care.",
  },
  {
    num: "04",
    title: "Wellness",
    description:
      "A range of products selected to support everyday health, wellbeing, personal care and a healthy lifestyle.",
  },
  {
    num: "05",
    title: "Multivitamins & Supplements",
    description:
      "Explore a range of vitamins, minerals and nutritional supplements to support different nutritional and wellness needs.",
  },
];

const markets = ["Japan", "Korea", "Turkey", "Europe", "India", "America"];

function PharmacyPage() {
  return (
    <>
      <Head>
        <title>West Valley Pharmacy | Pokhara</title>
        <meta
          name="description"
          content="At West Valley Pharmacy, we bring together healthcare, skincare, haircare, wellness, baby care and personal-care products from Japan, Korea, Turkey, Europe, India, America and beyond."
        />
      </Head>

      <main className="bg-white min-h-screen">
        {/* ═══════════════════════════════════════════════════════════════
            FULL-BLEED EDITORIAL LANDING BANNER
           ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden bg-[#0A1624]"
          style={{ minHeight: "calc(100vh - 88px)" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/pharmacy/Pharmacy banner.jpg"
              alt="West Valley Pharmacy curated healthcare, wellness, and beauty products"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.72) contrast(1.04)" }}
            />
            {/* Scrim gradient for contrast and legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050E18]/90 via-[#050E18]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Banner Content Container */}
          <div
            className="relative z-10 flex flex-col justify-end h-full"
            style={{ minHeight: "calc(100vh - 88px)" }}
          >
            {/* Top overline status bar */}
            {/* <div className="flex items-start justify-between px-6 sm:px-10 lg:px-16 xl:px-20 pt-10 sm:pt-12 lg:pt-14">
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/70">
                West Valley Pharmacy
              </span>
              <span className="hidden sm:block text-[11.5px] font-medium tracking-[0.12em] text-white/50">
                Healthcare · Wellness · Skin Care · Hair Care · Baby Care · Personal Care · Multivitamins & Supplements
              </span>
            </div> */}

            {/* Bottom Content Area */}
            <div className="px-6 sm:px-10 lg:px-16 xl:px-20 pb-14 sm:pb-16 lg:pb-20 max-w-[720px]">
              <h1
                className="font-semibold text-white leading-[1.05] tracking-[-0.04em]"
                style={{ fontSize: "clamp(36px, 5vw, 70px)" }}
              >
                West Valley
                <br />
                <span
                  className="inline-block mt-1"
                  style={{
                    color: "#A8C8E0",
                    letterSpacing: "0.005em",
                    fontSize: "clamp(32px, 4.5vw, 64px)",
                  }}
                >
                  Pharmacy
                </span>
              </h1>

              <p className="mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.8] text-white/80 max-w-[500px]">
                At West Valley Pharmacy, we bring together a carefully selected
                range of healthcare, skincare, haircare, wellness, baby care and
                personal-care products for your everyday needs. Explore products
                from leading markets around the world, including Japan, Korea,
                Turkey, Europe, India, America and beyond.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  id="pharmacy-hero-inquire-btn"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#0E1A2B] text-[13.5px] font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Inquire with Pharmacist
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white/85 hover:text-white transition-colors"
                >
                  <span>Explore Categories</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Global Markets Strip */}
              <div className="mt-9 pt-6 border-t border-white/20 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mr-1.5">
                  Global Choices
                </span>
                {markets.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 text-[11.5px] font-medium text-white/85 border border-white/25 rounded-full bg-white/5 backdrop-blur-xs"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CATEGORIES SECTION (Latest Editorial Index)
           ═══════════════════════════════════════════════════════════════ */}
        <section id="categories" className="py-20 sm:py-24 lg:py-28 scroll-mt-12">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
            {/* Header */}
            <div className="max-w-[680px] mb-14 sm:mb-16">
              <h2
                className="font-semibold text-[#0E1A2B] leading-[1.12] tracking-[-0.03em]"
                style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
              >
                Curated collections for everyday wellbeing
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.75] text-[#536273]">
                Every product is selected with clinical care to ensure safety,
                proven ingredients, and genuine manufacturing origins.
              </p>
            </div>

            {/* Editorial Category Index */}
            <div className="divide-y divide-[#E3E8EE] border-t border-b border-[#E3E8EE]">
              {categories.map((cat) => (
                <article
                  key={cat.num}
                  className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center hover:bg-[#F2F6FA] -mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20 px-6 sm:px-10 lg:px-16 xl:px-20 transition-colors duration-200"
                >
                  <div className="md:col-span-1">
                    <span className="text-[12px] font-bold tracking-[0.14em] text-[#7E95A8]">
                      {cat.num}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0E1A2B] tracking-[-0.02em] group-hover:text-[#2D4F6F] transition-colors duration-200">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#475569] max-w-[560px]">
                      {cat.description}
                    </p>
                  </div>

                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <span className="h-8 w-8 rounded-full flex items-center justify-center text-[#7E95A8] group-hover:text-[#2D4F6F] group-hover:bg-white transition-all duration-200">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CLOSING ASSISTANCE CARD (Latest Refined Design)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="rounded-[24px] bg-[#EEF4FB] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-[520px]">
                <h3
                  className="font-semibold text-[#0E1A2B] leading-[1.18] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  Looking for a specific prescription or formulation?
                </h3>
                <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[#536273]">
                  Speak directly with our pharmacy team for product availability,
                  usage instructions, or verified international imports.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  id="pharmacy-footer-inquire-btn"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#527E9F_100%)] text-white text-[14px] font-medium transition-all duration-200 hover:brightness-105 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4F6F] cursor-pointer"
                >
                  Inquire with Pharmacist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shared AboutUs Section */}
        <div>
          <AboutUs bookingHref="/contact#contact" />
        </div>
      </main>
    </>
  );
}

export default PharmacyPage;

PharmacyPage.Layout = Layout;
