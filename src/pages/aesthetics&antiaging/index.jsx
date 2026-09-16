import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Services from "../../features/aesthetics&antiaging/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";
import CardLeft from "../../components/cardLeft/CardLeft";
import CardRight from "../../components/cardRight/CardRight";
import Banner from "../../features/aesthetics&antiaging/banner/Banner";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { testimonialContent } from "../../features/aesthetics&antiaging/testimonial/testimonialContent";

function AestheticsAndAntiaging() {
  return (
    <>
      <Head>
        <title>Aesthetics &amp; Antiaging in Pokhara | West Valley</title>
        <meta
          name="description"
          content="Premium aesthetic and anti-aging treatments at West Valley Medical Clinic in Pokhara. Specializing in Botox, dermal fillers, thread lifts, and PRP skin rejuvenation."
        />
      </Head>

      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* botox */}
        <CardLeft
          img="/images/skin&aethetics/botox.png"
          title="Botox &amp; Neurotoxins"
          description="Botox is one of the most effective non-surgical cosmetic procedures to reduce forehead wrinkles, frown lines, and crow's feet. Our certified physicians administer precise micro-injections that relax the targeted facial muscles while maintaining your natural expressions. The procedure takes under 20 minutes with zero downtime, delivering smooth, refreshed skin that lasts 4 to 6 months."
        />

        {/* fillers */}
        <CardRight
          img="/images/skin&aethetics/fillers.png"
          title="Dermal Fillers"
          description="Restore youthful facial volume, sculpt your jawline, and achieve beautifully defined lips with our premium hyaluronic acid fillers. As skin ages, it naturally loses collagen and moisture. Our specialized injectors precisely place biocompatible fillers to soften deep smile lines, plump hollow cheeks, and define facial contours for an immediate, natural-looking lift."
        />

        {/* threadlift */}
        <CardLeft
          img="/images/skin&aethetics/threadLift.png"
          title="Non-Surgical Thread Lift"
          description="A thread lift is a minimally invasive technique that restores the crisp contours of your face without surgery. Using absorbable PDO sutures, our specialists gently elevate sagging tissue around the cheeks, jowls, and neck while stimulating prolonged natural neocollagenesis. Enjoy visible tightening immediately that continues improving over 12 to 18 months."
        />

        {/* prp therapy */}
        <CardRight
          img="/images/skin&aethetics/prp.png"
          title="PRP Anti-Aging Therapy"
          description="Harness your body's intrinsic regenerative biology with Platelet-Rich Plasma (PRP) anti-aging therapy. By isolating concentrated platelets rich in active growth factors from a small sample of your own blood, PRP stimulates fibroblasts, thickens the epidermal layer, and restores firm skin elasticity for comprehensive facial rejuvenation."
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
