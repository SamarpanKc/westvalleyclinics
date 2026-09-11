import Head from "next/head";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import Testimonial from "../../components/testimonial/Testimonial";
import Banner from "../../features/endocrine&nutrition/banner/Banner";
import Services from "../../features/endocrine&nutrition/services/Services";
import Layout from "../../layout/BaseLayout";
import { testimonialContent } from "../../features/endocrine&nutrition/testimonial/testimonialContent";

function EndocrineAndNutrition() {
  return (
    <>
      <Head>
        <title>Endocrine and Nutrition in Pokhara | West Valley</title>
      </Head>
      <main className="bg-neutral-50">
        <Banner />
        <Services />
        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default EndocrineAndNutrition;

EndocrineAndNutrition.Layout = Layout;
