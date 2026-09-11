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

function SkinAndAesthetics() {
  return (
    <>
      <Head>
        <title>Skin and Aesthetics in Pokhara | West Valley</title>
      </Head>

      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* acne scars */}
        <CardLeft
          img="/images/skin&aethetics/scars.png"
          title="Acne Scars"
          description="Acne scars can be an emotionally difficult reminder of a difficult time in our lives. Thankfully, there are treatments available to help reduce the appearance of those scars. At our Skin & Aesthetics clinic, we offer a variety of treatments to help reduce the appearance of acne scars, including chemical peels and fillers.
"
        />

        {/* skins rejuvenation */}
        <CardRight
          img="/images/skin&aethetics/rejuvenation.png"
          title="Skins Rejuvenation"
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

        {/* prp therapy */}
        <CardLeft
          img="/images/skin&aethetics/prp.png"
          title="PRP Therapy"
          description="PRP Therapy is a cutting-edge skin and aesthetics treatment that can help you achieve a more youthful and radiant complexion. This treatment utilizes platelet-rich plasma (PRP), which is derived from your own blood and is packed with naturally occurring growth factors and proteins that can help stimulate skin cell renewal and collagen production. PRP Therapy provides a safe and effective way to reduce the appearance of fine lines and wrinkles, improve skin texture and tone, and reduce the visibility of scars. With PRP Therapy, you can enjoy a smoother, more youthful complexion without the use of invasive surgery."
        />

        {/* threadlift */}
        <CardRight
          img="/images/skin&aethetics/threadLift.png"
          title="Threadlift"
          description="A threadlift is a minimally invasive procedure that can restore the youthful contours of your face without the need for surgery. Using specialized threads of absorbable sutures, we can lift and tighten the underlying skin and muscles of the face, creating a more youthful, refreshed look. The procedure is performed with local anesthesia so that you can expect minimal discomfort. The results are visible immediately and can last up to 18 months. Threadlifts can be used to treat sagging in the brows, cheeks, and jawline, as well as wrinkles and folds around the mouth."
        />

        {/* fillers */}
        <CardLeft
          img="/images/skin&aethetics/fillers.png"
          title="Fillers"
          description="We offer a variety of fillers that can help you reduce wrinkles, fill in scars and plump up thin lips. Our fillers are made from premium ingredients that provide long-lasting results without the need for surgery. Our skilled technicians are well trained in administering safe and effective treatments that will help you achieve the look you desire. We take great pride in providing our clients with the best quality products and services at an affordable price. Contact us today to learn more about our filler products and schedule an appointment with one of our experienced professionals."
        />

        {/* botox */}
        <CardRight
          img="/images/skin&aethetics/botox.png"
          title="Botox"
          description="Botox is one of the most popular and effective cosmetic treatments available today. It is a safe, non-surgical procedure that can reduce or eliminate wrinkles, fine lines, and deep facial creases. Our experienced team of specialists provide Botox treatments with the utmost care and precision. Botox helps to relax facial muscles to temporarily reduce the appearance of wrinkles and can also be used to treat medical conditions such as chronic migraines, excessive sweating, and muscle spasms. Our clinic provides Botox treatments in a comfortable, professional setting to ensure the best possible outcome for our clients."
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
          description="Hydra Facial is a revolutionary new facial treatment that offers a deep cleanse, exfoliation, and hydration for your skin. This non-invasive treatment utilizes a unique combination of cleansing, exfoliation, and hydration to help you achieve beautiful, glowing skin. With Hydra Facial, you can enjoy a deep cleanse, exfoliation, and hydration all in one treatment. This treatment is perfect for all skin types and can help you achieve deep hydration and revitalized, glowing skin. Hydra Facial is a safe and effective way to improve the texture and look of your skin while also reducing the signs of aging."
        />

        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default SkinAndAesthetics;

SkinAndAesthetics.Layout = Layout;
