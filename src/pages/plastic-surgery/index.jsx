import Head from "next/head";
import Layout from "../../layout/BaseLayout";
import Services from "../../features/plasticSurgery/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";
import CardLeft from "../../components/cardLeft/CardLeft";
import CardRight from "../../components/cardRight/CardRight";
import Banner from "../../features/plasticSurgery/banner/Banner";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { testimonialContent } from "../../features/plasticSurgery/testimonial/testimonialContent";

function PlasticSurgeryPage() {
  return (
    <>
      <Head>
        <title>Plastic &amp; Reconstructive Surgery in Pokhara | West Valley</title>
        <meta
          name="description"
          content="Specialist plastic and reconstructive surgery at West Valley Medical Clinic in Pokhara. Asian eyelid surgery, blepharoplasty, rhinoplasty, facelift, breast surgery, body contouring and reconstructive procedures."
        />
      </Head>

      <main className="bg-neutral-50">
        <Banner />
        <Services />

        {/* 01 — Asian Eyelid Surgery */}
        <CardLeft
          img="/images/plasticSurgery/asianEyelid.png"
          title="Asian Eyelid Surgery"
          description="Asian eyelid surgery is a specialised approach to upper-eyelid anatomy, with each procedure planned according to individual eyelid structure and facial proportions. Procedures include double eyelid surgery (incisional and non-incisional), epicanthoplasty, ptosis correction and eyelid revision. The goal is a natural-looking eyelid contour that preserves your individual facial characteristics."
        />

        {/* 02 — Blepharoplasty */}
        <CardRight
          img="/images/plasticSurgery/blepharoplasty.png"
          title="Blepharoplasty"
          description="Blepharoplasty addresses excess skin, fat and tissue changes around the upper and lower eyelids. Options include upper blepharoplasty, lower blepharoplasty, combined upper and lower correction, under-eye fat repositioning and revision surgery. Treatment is personalised according to eyelid anatomy, skin quality and the degree of change present."
        />

        {/* 03 — Rhinoplasty */}
        <CardLeft
          img="/images/plasticSurgery/rhinoplasty.png"
          title="Rhinoplasty"
          description="Rhinoplasty can address both aesthetic and structural concerns of the nose. Our approach focuses on creating a nose that is proportionate to the overall face while considering nasal function. Procedures range from primary and structural rhinoplasty to tip refinement, dorsal augmentation, alar reduction, hump reduction, deviated nose correction, functional rhinoplasty and revision rhinoplasty. Surgical planning is based on nasal structure, facial proportions, skin characteristics and your individual goals."
        />

        {/* 04 — Facelift */}
        <CardRight
          img="/images/plasticSurgery/facelift.png"
          title="Facelift Surgery"
          description="Facelift surgery addresses age-related changes such as facial laxity, jowling and loss of jawline definition. Procedures include facelift, mini facelift, lower face lift, neck lift, brow and forehead lift, and facial fat grafting. The aim is to restore facial contours and a refreshed appearance while maintaining natural facial expression and proportion."
        />

        {/* 05 — Breast Surgery */}
        <CardLeft
          img="/images/plasticSurgery/breastSurgery.png"
          title="Breast Surgery"
          description="Breast surgery is planned around individual body proportions, breast anatomy, skin quality and personal goals. Procedures include breast augmentation, breast reduction, breast lift and mastopexy, asymmetry correction, implant revision and gynecomastia surgery. A detailed consultation helps determine the most appropriate surgical approach for each patient."
        />

        {/* 06 — Body Contouring */}
        <CardRight
          img="/images/plasticSurgery/bodyContouring.png"
          title="Body Contouring"
          description="Body contouring surgery addresses localised fat, excess skin and changes in body shape associated with ageing, pregnancy or significant weight loss. Procedures include liposuction, abdominal liposuction, waist and flank contouring, arm and thigh contouring, abdominoplasty, post-weight-loss body contouring and male chest contouring. Treatment is selected according to body anatomy, skin elasticity and your goals."
        />

        {/* 07 — Reconstructive & Corrective Surgery */}
        <CardLeft
          img="/images/plasticSurgery/reconstructive.png"
          title="Reconstructive & Corrective Surgery"
          description="Plastic surgery plays an important role in restoring appearance and function following injury, previous surgery, scarring or selected congenital conditions. Procedures include scar revision, post-trauma reconstruction, soft-tissue reconstruction, post-surgical correction, selected congenital deformity correction and corrective revision procedures. Each case requires individual assessment and a treatment plan specific to the patient's condition."
        />

        <Testimonial testimonialContent={testimonialContent} />
        <AboutUs />
        <BookAppointment />
      </main>
    </>
  );
}

export default PlasticSurgeryPage;

PlasticSurgeryPage.Layout = Layout;
