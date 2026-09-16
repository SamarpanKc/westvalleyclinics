function AboutUs() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24" id="aboutUs">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            About <span className="text-[#527E9F]">Us.</span>
          </h2>
        </div>

        {/* Content Card with Signature Curve */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-[960px]">
          <div
            style={{
              padding: "36px 32px 40px 36px",
              position: "relative",
              overflow: "hidden",
            }}
          >

            {/* Lead sentence from existing content */}
            <p
              className="text-[#0E2236] font-medium leading-relaxed tracking-[-0.015em] text-justify"
              style={{ fontSize: "clamp(17px, 2vw, 21px)" }}
            >
              West Valley Medical Clinic endeavours to help you look and feel your best. Located in Pokhara, we offer unrivalled expertise in a variety of hair restoration, skin, aesthetic, and wellness services.
            </p>

            {/* Subtle Divider */}
            <div className="my-5 h-[1px] w-full bg-[#D8E7F1]" />

            {/* Body paragraphs from existing content */}
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-[1.8] text-[#536273] text-justify">
              <p>
                We offer a wide range of treatments and services, including hair transplants, advanced skin care, aesthetics and anti-aging treatments, hair recovery therapies, pharmacy services, and more. Our team is composed of highly skilled professionals with years of experience in their respective specialties. They are equipped with state-of-the-art technology to provide you with unparalleled services. Along with cutting-edge technology and professional guidance, we provide exquisite service to patients in order to ensure their safety, comfort, and the best results.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
