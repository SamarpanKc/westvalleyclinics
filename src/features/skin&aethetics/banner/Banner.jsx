import { scrollToContact } from "../../../utils/scrollToContact";

function Banner() {
  return (
    <div className="bg-primary-light">
      <div className="app-layout banner-container">
        <div className="md:flex-1">
          <h2 className="text-large leading-[43px]">
            Enhance the <span className="text-primary">Natural Beauty </span>{" "}
            within you and Unveil the Best Version of Yourself
          </h2>

          <button onClick={scrollToContact} className="secondary-btn mt-8">
            Book Your Appointment
          </button>
        </div>
        <div className="mt-12 md:mt-0 md:flex-1 h-full">
          <img
            src="/images/skin&aethetics/banner.png"
            alt="west valley banner"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
