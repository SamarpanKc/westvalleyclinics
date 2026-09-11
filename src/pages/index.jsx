import Head from "next/head";
import Layout from "../layout/BaseLayout";
import AboutUs from "../components/aboutUs/AboutUs";
import Testimonial from "../components/testimonial/Testimonial";
import Banner from "../features/hairTransplant/banner/Banner";
import BookAppointment from "../components/bookAppointment/BookAppointment";
import HairLossCause from "../features/hairTransplant/hairLossCause/HairLossCause";
import Technology from "../features/hairTransplant/technology/Technology";
import Services from "../features/hairTransplant/services/Services";
import { testimonialContent } from "../features/hairTransplant/testimonial/testimonialContent";
import HairTransplantResult from "../features/hairTransplant/hairTransplantResult/hairTransplantResult";
import Team from "../features/hairTransplant/team/Team";

// const inter = Inter({ subsets: ["latin"] });

export default function HairTransplant() {
  return (
    <>
      <Head>
        <title>Hair Transplant in Pokhara | West Valley</title>
      </Head>
      <main className="bg-neutral-50">
        <Banner />
        <HairLossCause />
        <Technology />
        <Services />
        <HairTransplantResult />
        {/* <Team /> */}
        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

HairTransplant.Layout = Layout;
