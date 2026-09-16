import Head from "next/head";
import Link from "next/link";
import Layout from "../../layout/BaseLayout";
import { PlusCircle, Clock, ArrowLeft } from "react-feather";

function PharmacyPage() {
  return (
    <>
      <Head>
        <title>Pharmacy | West Valley Medical Clinic</title>
        <meta
          name="description"
          content="West Valley Medical Clinic Pharmacy services in Pokhara. Under development."
        />
      </Head>

      <main className="min-h-[70vh] bg-[#f7f9fc] flex items-center justify-center py-20 px-6 sm:px-10">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#527E9F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#2D4F6F]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-sm font-semibold tracking-wide mb-6">
            <Clock size={16} className="text-[#527E9F]" />
            <span>Under Development</span>
          </div>

          {/* Icon */}
          <div className="mx-auto w-20 h-20 rounded-2xl bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] flex items-center justify-center text-white shadow-lg mb-6">
            <PlusCircle size={40} strokeWidth={2} />
          </div>

          {/* Titles */}
          <h1
            className="font-bold text-[#0E1A2B] leading-[1.15] tracking-[-0.03em]"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            West Valley <span className="text-[#527E9F]">Pharmacy</span>
          </h1>

          <p className="mt-4 text-[18px] font-semibold text-[#2D4F6F]">
            Under development
          </p>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#536273] leading-relaxed max-w-lg mx-auto">
            Our full-service clinic pharmacy is currently under development and will be launching soon. We look forward to providing verified prescription medications, specialized dermatology care, and hair restoration therapeutics directly to our patients.
          </p>

          {/* Return button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] text-white text-[15px] font-medium shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
            >
              <ArrowLeft size={16} />
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-neutral-100 text-[#0E1A2B] text-[15px] font-medium hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default PharmacyPage;

PharmacyPage.Layout = Layout;
