function Services() {
  return (
    <div className="py-12 bg-neutral-50">
      <div className="app-layout max-w-4xl mx-auto px-6">
        <h3 className="text-large text-center text-primary font-semibold">
          Plastic &amp; Reconstructive Surgery
        </h3>
        <p className="mt-3 text-center text-neutral-600 leading-relaxed text-[16px]">
          Our surgeon's areas of expertise span the face, breast and body. Every
          patient begins with a detailed consultation and clinical assessment — treatment
          is planned according to individual anatomy, functional needs, aesthetic goals
          and medical suitability.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-700">
          {[
            {
              title: "Asian Eyelid Surgery",
              sub: "Specialised upper-eyelid procedures tailored to individual facial proportions.",
            },
            {
              title: "Blepharoplasty",
              sub: "Upper and lower eyelid correction to restore a refreshed, youthful look.",
            },
            {
              title: "Rhinoplasty",
              sub: "Aesthetic and structural nose surgery for proportion and nasal function.",
            },
            {
              title: "Facelift Surgery",
              sub: "Address facial laxity, jowling and loss of jawline definition.",
            },
            {
              title: "Breast Surgery",
              sub: "Augmentation, reduction, lift and asymmetry correction tailored to your anatomy.",
            },
            {
              title: "Body Contouring",
              sub: "Liposuction, abdominoplasty and post-weight-loss body shaping.",
            },
            {
              title: "Reconstructive & Corrective Surgery",
              sub: "Scar revision, post-trauma reconstruction and corrective procedures.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-neutral-200/70 shadow-xs"
            >
              <span className="text-primary font-bold text-lg">•</span>
              <div>
                <h4 className="font-semibold text-[#0E1A2B]">{item.title}</h4>
                <p className="text-sm text-neutral-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
