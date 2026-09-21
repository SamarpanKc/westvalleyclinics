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

        {/* 01 — Fine Lines & Wrinkles */}
        <CardLeft
          img="/images/skin&aethetics/botox.png"
          tag="Wrinkle Relaxation &amp; Prevention"
          title="Fine Lines &amp; Wrinkles"
          description="Fine lines and wrinkles develop naturally with ageing, repeated facial movement, sun exposure and changes in skin quality. Depending on the type and depth of wrinkles, treatments are customised to soften lines while preserving natural facial expression."
          options={["Botulinum Toxin", "Ultraformer III", "Skin Boosters", "Profhilo", "CO₂ Laser"]}
        />

        {/* 02 — Skin Laxity & Sagging */}
        <CardRight
          img="/images/skin&aethetics/threadLift.png"
          tag="Non-Surgical Tightening"
          title="Skin Laxity &amp; Sagging"
          description="Loss of collagen and elastin can gradually lead to loose skin and reduced facial definition. Ultraformer III uses focused ultrasound technology for selected skin-tightening and facial-contouring indications, stimulating deep dermal collagen production."
          options={["Ultraformer III (HIFU)", "Profhilo Bioremodelling", "Skin Boosters"]}
        />

        {/* 03 — Loss of Facial Volume */}
        <CardLeft
          img="/images/skin&aethetics/fillers.png"
          tag="Volume Restoration &amp; Contouring"
          title="Loss of Facial Volume"
          description="Ageing is often accompanied by the resorption of deep fat pads and structural support, leading to volume loss in the cheeks, temples, under-eyes, lips and jawline. Biocompatible hyaluronic acid dermal fillers provide targeted structural restoration and natural contouring."
          options={["Dermal Fillers", "Cheek & Lip Contouring", "Jawline Definition"]}
        />

        {/* 04 — Skin Boosters & Bioremodelling */}
        <CardRight
          img="/images/skin&aethetics/prp.png"
          tag="Bioremodelling &amp; Cellular Hydration"
          title="Skin Boosters, Profhilo &amp; PDRN"
          description="When skin loses its natural hydration and resilience, topical moisturizers alone may not suffice. Injectable skin boosters, high-concentration Profhilo hyaluronic acid, and PDRN polynucleotides deliver intense hydration directly into the dermis to enhance elasticity, firmness, and natural radiance."
          options={["Profhilo", "PDRN Polynucleotides", "Skin Boosters", "Exosome Therapy"]}
        />

        {/* 05 — Pigmentation & Uneven Tone */}
        <CardLeft
          img="/images/skin&aethetics/carbonPeel.png"
          tag="Targeted Pigment Correction"
          title="Pigmentation &amp; Uneven Tone"
          description="Pigmentation concerns such as melasma, sun spots, freckles and post-inflammatory hyperpigmentation (PIH) require careful diagnostic assessment. Advanced Pico Laser technology breaks down pigment clusters into microscopic particles with minimal thermal impact to surrounding tissue."
          options={["Pico Laser", "Medical Skincare Protocols", "Combination Laser Therapy"]}
        />

        {/* 06 — Acne Scars & Texture */}
        <CardRight
          img="/images/skin&aethetics/scars.png"
          tag="Resurfacing &amp; Texture Refinement"
          title="Acne Scars &amp; Texture"
          description="Acne can leave behind atrophic scars (icepick, boxcar, rolling), enlarged pores and uneven skin texture. Fractional CO₂ Laser creates controlled micro-thermal treatment zones to prompt rapid re-epithelialization and vigorous deep collagen remodeling."
          options={["Fractional CO₂ Laser", "Pico Laser", "HydraFacial Exfoliation"]}
        />

        {/* 07 — HydraFacial MD */}
        <CardLeft
          img="/images/skin&aethetics/hydroFacial.png"
          tag="Clinical Cleanse &amp; Infusion"
          title="HydraFacial MD"
          description="HydraFacial delivers comprehensive skin rejuvenation through a non-invasive multi-step treatment: deep cleansing, painless vortex extraction of congested pores, and concentrated infusion of nourishing antioxidants, peptides, and hyaluronic acid."
          options={["HydraFacial", "Deep Vortex Extraction", "Antioxidant Infusion"]}
        />

        {/* 08 — Overall Facial Rejuvenation */}
        <CardRight
          img="/images/skin&aethetics/rejuvenation.png"
          tag="Multi-Modality Treatment Plans"
          title="Overall Facial Rejuvenation"
          description="For individuals presenting with multiple concurrent concerns — fine lines, laxity, volume loss and uneven texture — our aesthetic doctors craft a cohesive, staged treatment plan combining energy devices and medically supervised injectables aligned with your facial anatomy."
          options={["Comprehensive Assessment", "Staged Combination Plans", "Natural Aesthetic Balance"]}
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
