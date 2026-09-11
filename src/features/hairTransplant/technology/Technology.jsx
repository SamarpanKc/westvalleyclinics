import CardRight from "../../../components/cardRight/CardRight";

function Technology() {
  return (
    <div className="mt-20">
      <div className="app-layout">
        <h3 className="text-large text-center text-primary">
          Hair Transplant Technology
        </h3>

        <CardRight
          img="/images/hairTransplant/transplant1.png"
          title="FUE-DHT (Follicular Unit Extraction with Direct Hair Transplant)"
          description="FUE-DHT, or Follicular Unit Extraction with &ldquo;No Root Touch,&rdquo; represents a significant advancement in hair transplantation. This technique focuses on preserving the integrity of hair follicles during the procedure. Grafts are extracted from the donor area and immediately transplanted into the recipient site, reducing graft exposure time and maximizing graft survival rates, often reaching 99-100%."
          descriptionTwo="This meticulous approach minimizes graft damage, ensuring precise, one-at-a-time extraction, leading to a more natural and denser hair restoration outcome. FUE-DHT with &ldquo;No Root Touch&rdquo; offers precision and exceptional results, making it a superior choice for individuals seeking effective hair restoration in the medical field."
        />
      </div>
    </div>
  );
}

export default Technology;
