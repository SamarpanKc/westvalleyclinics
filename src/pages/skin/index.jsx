import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Services from "../../features/skin&aethetics/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";
import CardLeft from "../../components/cardLeft/CardLeft";
import CardRight from "../../components/cardRight/CardRight";
import Banner from "../../features/skin&aethetics/banner/Banner";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { testimonialContent } from "../../features/skin&aethetics/testimonial/testimonialContent";

function SkinPage() {
  return (
    <>
      <Head>
        <title>Skin Care & Dermatology Clinic in Pokhara | West Valley</title>
        <meta
          name="description"
          content="Advanced skin care treatments in Pokhara at West Valley Clinic. Specialized treatments for acne scars, skin rejuvenation, chemical peels, hydra facials, and carbon peels."
        />
      </Head>

      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* acne scars */}
        <CardLeft
          img="/images/skin&aethetics/scars.png"
          title="Acne Scars"
          description="Acne scars can be an emotionally difficult reminder of a difficult time in our lives. Thankfully, there are treatments available to help reduce the appearance of those scars. At our Skin clinic, we offer a variety of treatments to help reduce the appearance of acne scars, including chemical peels and advanced skin restoration."
        />

        {/* skins rejuvenation */}
        <CardRight
          img="/images/skin&aethetics/rejuvenation.png"
          title="Skin Rejuvenation"
          description="Skin rejuvenation is the ultimate way to achieve a beautiful, youthful-looking complexion. Our clinic specializes in providing the latest, cutting-edge treatments that help you to achieve a refreshed, glowing complexion. Our treatments use advanced technologies and non-invasive procedures to target the root causes of ageing and skin damage, such as wrinkles, lines, sun spots, and other visible signs of ageing."
        />

        {/* carbon peel */}
        <CardLeft
          img="/images/skin&aethetics/carbonPeel.png"
          title="Carbon Peel"
          description="This treatment involves the application of a carbon-rich mask that is enriched with active ingredients to penetrate deep into the skin. The carbon mask helps to exfoliate the surface of the skin, removing dead skin cells and impurities, while stimulating the production of collagen and elastin to boost the skin's natural renewal process. The result is a smoother, brighter complexion that looks and feels younger and healthier."
        />

        {/* microdermabrasion */}
        <CardRight
          img="/images/skin&aethetics/microdermabrasion.png"
          title="Microdermabrasion"
          description="Microdermabrasion is a revolutionary skin care treatment that can help you achieve the smooth and beautiful complexion you desire. This non-invasive procedure gently exfoliates the top layer of your skin, removing impurities, discoloured patches, and acne scars. This treatment also encourages collagen production, which helps to reduce the appearance of wrinkles and fine lines. Plus, it requires no downtime and can be used on almost any skin type or colour."
        />

        {/* chemical Peels */}
        <CardLeft
          img="/images/skin&aethetics/chemicalPeel.png"
          title="Chemical Peels"
          description="Chemical peels are an excellent way to improve the overall look and feel of your skin. They can reduce the appearance of wrinkles, sun damage, acne scars, and other skin imperfections. Our chemical peels are tailored to meet the specific needs of each individual patient and can be used to target a variety of skin concerns. We use only the highest quality, FDA-approved products to ensure a safe, effective treatment."
        />

        {/* hydro facial */}
        <CardRight
          img="/images/skin&aethetics/hydroFacial.png"
          title="Hydra Facial"
          description="Hydra Facial is a revolutionary facial treatment that offers a deep cleanse, exfoliation, and hydration for your skin. This non-invasive treatment utilizes a unique combination of cleansing, exfoliation, and hydration to help you achieve beautiful, glowing skin. With Hydra Facial, you can enjoy a deep cleanse, exfoliation, and hydration all in one treatment. This treatment is perfect for all skin types and can help you achieve deep hydration and revitalized, glowing skin."
        />

        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default SkinPage;

SkinPage.Layout = Layout;
