function Services() {
  return (
    <div className="py-12 bg-neutral-50">
      <div className="app-layout max-w-4xl mx-auto px-6">
        <h3 className="text-large text-center text-primary font-semibold">
          Aesthetics &amp; Anti-Aging Services
        </h3>
        <p className="mt-3 text-center text-neutral-600 leading-relaxed text-[16px]">
          At West Valley Medical Clinic, we offer advanced non-surgical aesthetic
          and anti-aging treatments designed to rejuvenate your skin, restore
          lost facial volume, and reduce visible signs of aging. Our board-certified
          specialists tailor each procedure with artistic precision to achieve subtle,
          harmonious, and radiant results that celebrate your unique beauty.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-700">
          <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-neutral-200/70 shadow-xs">
            <span className="text-primary font-bold text-lg">•</span>
            <div>
              <h4 className="font-semibold text-[#0E1A2B]">Botox &amp; Neurotoxins</h4>
              <p className="text-sm text-neutral-500">Smooth frown lines, forehead creases, and crow&apos;s feet naturally.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-neutral-200/70 shadow-xs">
            <span className="text-primary font-bold text-lg">•</span>
            <div>
              <h4 className="font-semibold text-[#0E1A2B]">Dermal Fillers</h4>
              <p className="text-sm text-neutral-500">Restore cheek volume, define jawlines, and enhance lip shape.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-neutral-200/70 shadow-xs">
            <span className="text-primary font-bold text-lg">•</span>
            <div>
              <h4 className="font-semibold text-[#0E1A2B]">Non-Surgical Thread Lift</h4>
              <p className="text-sm text-neutral-500">Lift sagging skin and stimulate natural collagen production.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-neutral-200/70 shadow-xs">
            <span className="text-primary font-bold text-lg">•</span>
            <div>
              <h4 className="font-semibold text-[#0E1A2B]">PRP Facial Rejuvenation</h4>
              <p className="text-sm text-neutral-500">Autologous growth factors to restore cellular firmness and glow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
