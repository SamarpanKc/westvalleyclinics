import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Banner from "../../features/aesthetics&antiaging/banner/Banner";
import Services from "../../features/aesthetics&antiaging/services/Services";
import CardLeft from "../../components/cardLeft/CardLeft";
import CardRight from "../../components/cardRight/CardRight";
import Testimonial from "../../components/testimonial/Testimonial";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { testimonialContent } from "../../features/aesthetics&antiaging/testimonial/testimonialContent";

function AestheticsAndAntiaging() {
  return (
    <>
      <Head>
        <title>Aesthetics &amp; Anti-Ageing in Pokhara | West Valley</title>
        <meta
          name="description"
          content="Personalised aesthetic and anti-ageing treatments at West Valley Medical Clinic in Pokhara. Ultraformer III, Pico Laser, CO₂ Laser, HydraFacial, Botulinum Toxin, Dermal Fillers, Skin Boosters, Profhilo and more."
        />
      </Head>

      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* 01 — Ultraformer III */}
        <CardLeft
          img="/images/skin&aethetics/threadLift.png"
          tag="HIFU &amp; MMFU Technology"
          title="Ultraformer III"
          description="Ultraformer III is an advanced High-Intensity Focused Ultrasound (HIFU) and Micro &amp; Macro Focused Ultrasound (MMFU) system engineered for non-invasive skin tightening and precise facial contouring. By delivering targeted ultrasound thermal energy into deep dermal and SMAS layers, it stimulates natural neocollagenesis and tissue contraction without downtime."
          optionsTitle="Technology Treatment:"
          options={[
            "Skin Laxity & Sagging",
            "Non-Surgical Face & Neck Tightening",
            "Jawline & Facial Contouring",
            "Fine Lines & Wrinkle Reduction",
            "Submental / Double Chin Contouring",
          ]}
        />

        {/* 02 — Pico Laser */}
        <CardRight
          img="/images/skin&aethetics/carbonPeel.png"
          tag="Picosecond Laser System"
          title="Pico Laser"
          description="Pico Laser operates with ultra-short picosecond pulses to produce a photomechanical shockwave effect, disintegrating stubborn pigment clusters and melanin into microscopic dust-like particles that are cleared naturally by the body. It delivers notable improvement in pigmentation and skin clarity with minimal thermal impact to surrounding tissue."
          optionsTitle="Technology Treatment:"
          options={[
            "Pigmentation & Uneven Tone",
            "Melasma & Sun Spots",
            "Post-Inflammatory Hyperpigmentation (PIH)",
            "Freckles & Blemishes",
            "Tone Clarification & Rejuvenation",
          ]}
        />

        {/* 03 — Fractional CO₂ Laser */}
        <CardLeft
          img="/images/skin&aethetics/scars.png"
          tag="Fractional Ablative Resurfacing"
          title="Fractional CO₂ Laser"
          description="Fractional CO₂ Laser creates controlled microscopic thermal treatment columns deep into the dermis while preserving surrounding healthy tissue for rapid healing. This stimulates vigorous collagen renewal, structural dermal remodeling, and tissue contraction, making it the clinical gold standard for scar revision, enlarged pores, and deep textural rejuvenation."
          optionsTitle="Technology Treatment:"
          options={[
            "Acne Scars (Icepick, Boxcar, Rolling)",
            "Enlarged Pores & Rough Texture",
            "Surgical & Traumatic Scars",
            "Deep Facial Lines & Wrinkles",
            "Intensive Skin Resurfacing",
          ]}
        />

        {/* 04 — HydraFacial MD */}
        <CardRight
          img="/images/skin&aethetics/hydroFacial.png"
          tag="Clinical Cleanse &amp; Hydration"
          title="HydraFacial MD"
          description="HydraFacial delivers comprehensive, non-invasive clinical facial rejuvenation utilizing patented Vortex-Fusion technology. Through a simultaneous multi-step procedure, it gently exfoliates dull dead skin cells, suctions out congested pore debris and blackheads painlessly, and infuses the dermis with restorative peptides, hyaluronic acid, and potent antioxidants."
          optionsTitle="Technology Treatment:"
          options={[
            "Dull & Dehydrated Skin",
            "Enlarged & Congested Pores",
            "Blackhead & Impurity Extraction",
            "Skin Texture & Elasticity",
            "Instant Complexion Glow",
          ]}
        />

        {/* 05 — Laser Hair Removal */}
        <CardLeft
          img="/images/skin&aethetics/rejuvenation.png"
          tag="Permanent Hair Reduction"
          title="Laser Hair Removal"
          description="Medical-grade laser hair removal targets follicular melanin with concentrated light energy, disabling active hair follicles and impeding future growth without compromising the surrounding skin barrier. Equipped with integrated contact cooling, treatments are safe, comfortable, and effective across various facial and body zones."
          optionsTitle="Technology Treatment:"
          options={[
            "Unwanted Facial & Body Hair",
            "Ingrown Hairs & Razor Bumps",
            "Folliculitis Prevention",
            "Long-Term Hair Reduction",
            "Precision Hairline & Beard Shaping",
          ]}
        />

        {/* 06 — Injectable Treatments */}
        <CardRight
          img="/images/skin&aethetics/fillers.png"
          tag="Medical Injectables &amp; Bioremodelling"
          title="Injectable Treatments"
          description="Our medically supervised injectable suite combines botulinum toxin for dynamic wrinkle relaxation, biocompatible hyaluronic acid dermal fillers for structural contouring and volume restoration, and advanced bioremodelling with Profhilo, PDRN, and skin boosters. Treatments are customized to your individual facial anatomy for subtle, natural-looking results."
          optionsTitle="Technology Treatment:"
          options={[
            "Fine Lines & Wrinkles (Botulinum Toxin)",
            "Loss of Facial Volume (Dermal Fillers)",
            "Skin Boosters, Profhilo & PDRN",
            "Cheek, Lip & Jawline Contouring",
            "Under-Eye Rejuvenation & Skin Elasticity",
          ]}
        />

        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default AestheticsAndAntiaging;

AestheticsAndAntiaging.Layout = Layout;
