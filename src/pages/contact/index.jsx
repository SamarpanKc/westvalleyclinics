import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Info from "../../features/contact/info/Info";
import BookAppointment from "../../components/bookAppointment/BookAppointment";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | West Valley</title>
      </Head>
      <main className="bg-neutral-50">
        <Info />
        <BookAppointment />
      </main>
    </>
  );
}

export default Contact;

Contact.Layout = Layout;
