import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Team from "../../features/hairTransplant/team/Team";
import BookAppointment from "../../components/bookAppointment/BookAppointment";

function OurTeam() {
  return (
    <>
      <Head>
        <title>Our Team | West Valley Medical Clinic</title>
        <meta
          name="description"
          content="Meet the dedicated professionals behind West Valley's world-class care — our experienced team of doctors, nurses, and specialists in Pokhara."
        />
      </Head>
      <main className="bg-[#f7f9fc]">
        <Team />
        <BookAppointment />
      </main>
    </>
  );
}

export default OurTeam;

OurTeam.Layout = Layout;
