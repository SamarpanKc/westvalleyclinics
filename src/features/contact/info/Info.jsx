import { Phone, Mail, MapPin } from "react-feather";

function Info() {
  return (
    <div className="pt-20">
      <div className="app-layout">
        <h3 className="text-large text-center text-primary">Contact Us</h3>
        <div className="mt-8 md:flex md:justify-between md:items-center">
          <div className="flex gap-2 items-center">
            <div className="border p-2 rounded-full bg-neutral-200">
              <Phone className="text-primary" />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-neutral-800">
                Call Us
              </p>
              <p className="text-small mt-2">061-590095</p>
              <p className="text-small mt-1">9856080095</p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex gap-2 items-center">
            <div className="border p-2 rounded-full bg-neutral-200">
              <Mail className="text-primary" />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-neutral-800">
                Email
              </p>
              <p className="text-small">wvmedico@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex gap-2 items-center">
            <div className="border p-2 rounded-full bg-neutral-200">
              <MapPin className="text-primary" />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-neutral-800">
                Visit Here
              </p>
              <p className="text-small">Zero KM, Pokhara-Baglung Highway</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7859459923075!2d83.97360701413321!3d28.213815309660657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951ea3b2ef2b%3A0x8d06c118e03ed10b!2sWest%20Valley%20Medical%20Clinic%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1674728494954!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Info;
