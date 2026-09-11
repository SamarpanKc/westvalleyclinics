import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import Testimonial from "../../components/testimonial/Testimonial";
import Banner from "../../features/dentalClinic/banner/Banner";
import Services from "../../features/dentalClinic/services/Services";
import CardLeft from "../../components/cardLeft/CardLeft";
import CardRight from "../../components/cardRight/CardRight";
import { testimonialContent } from "../../features/dentalClinic/testimonial/testimonialContent";
import Team from "../../features/dentalClinic/team/Team";

function DentalClinic() {
  return (
    <>
      <Head>
        <title>Dental Clinic in Pokhara | West Valley</title>
      </Head>
      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* dental Implants */}
        <CardLeft
          img="images/dentalClinic/implants.png"
          title="Dental Implants"
          description="This long-term solution is a secure and strong way to replace missing teeth and improve your confidence. Our dental implants are a permanent solution and look and feel just like your natural teeth. They are made of titanium, a strong and lightweight material that blends in with the rest of your teeth."
        />

        {/* root canal */}
        <CardRight
          img="images/dentalClinic/rootCanal.png"
          title="Pain Free Root Canal"
          description="We believe that no one should experience pain during a root canal. That's why we offer pain-free root canal treatments that are designed to keep you comfortable and relaxed throughout the entire process. We will also provide you with pre- and post-operative instructions to ensure that the healing process is as easy as possible. Our root canal treatment will not only relieve your pain, but also protect your teeth and gums from further damage. So don't hesitate - come to our office and experience a pain-free root canal today."
        />

        {/* braces */}
        <CardLeft
          img="images/dentalClinic/braces.png"
          title="Orthodontics/Braces"
          description="Welcome to our Orthodontics/Braces section! Our team of experienced orthodontists can provide you with personalized care to correct your bite and give you a beautiful, healthy smile. Whether you're looking for traditional braces or newer, less-visible options such as Invisalign, we have the right treatment plan for you. We understand that orthodontic treatment can be a big commitment, so our team will provide you with the support and guidance you need to get the most out of your treatment. We look forward to helping you achieve a beautiful, healthy smile!"
        />

        {/* cosmetics */}
        <CardRight
          img="images/dentalClinic/cosmetic.png"
          title="Cosmetics/Smile Makeover"
          description="Our experienced team of dentists specializes in providing a personalized, comprehensive approach to smile makeovers, using the latest techniques and technologies to provide you with the best care possible. Whether you’re looking to correct minor imperfections or make dramatic improvements to your smile, our team can help you achieve the results you desire. Contact us today to learn more about how we can help you achieve your perfect smile!"
        />

        {/* dental crown */}
        <CardLeft
          img="images/dentalClinic/crown.png"
          title="Dental Crowns"
          description="Dental Crowns are a versatile and effective way to restore teeth to their natural shape, size, and strength. Whether you need a crown to protect a weakened tooth, improve the appearance of a discolored or misshapen tooth, or to hold a dental bridge in place, our dentists can help. At West Valley, we offer both porcelain and metal crowns to meet the needs of our patients. We understand that the thought of getting a crown can be intimidating. That’s why our team is here to provide you with support and reassurance during your entire treatment. With our help, you can rest assured knowing that you’re receiving the best possible care."
        />

        {/* dental surgeries */}
        <CardRight
          img="images/dentalClinic/surgery.png"
          title="Dental Surgeries"
          description="We specialize in a range of surgeries, including root canal therapy, wisdom tooth extraction, crowns and bridges, and fillings. We also offer cosmetic dentistry services for those wanting to enhance their smile. All of our surgeries are carried out with the utmost care and attention and we ensure that you are comfortable throughout the process. With our state-of-the-art equipment and knowledgeable staff, you can be sure that your dental surgery is in safe hands."
        />

        <Team />

        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default DentalClinic;

DentalClinic.Layout = Layout;
