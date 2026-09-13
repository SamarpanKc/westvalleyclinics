import ReactCompareImage from "react-compare-image";

function HairTransplantResult() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Main Grid Container */}
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Content */}
          <div className="min-w-0">

            <h2
              className="mt-2 font-semibold leading-[1.1] tracking-[-0.03em] text-[#0E1A2B]"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Hair Transplant <span className="text-[#527E9F]">Result.</span>
            </h2>

            <div className="mt-5 h-[1px] w-full bg-[#D8E7F1]" />

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                {/* <span className="inline-block h-2 w-2 rounded-full bg-[#527E9F]" /> */}
                <p className="text-[16px] font-medium text-[#0E2236]">
                  Case Severity: <span className="font-semibold text-[#2D6A94]">Grade 3</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* <span className="inline-block h-2 w-2 rounded-full bg-[#527E9F]" /> */}
                <p className="text-[16px] font-medium text-[#0E2236]">
                  Grafts Transplanted: <span className="font-semibold text-[#2D6A94]">3,300 Grafts</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* <span className="inline-block h-2 w-2 rounded-full bg-[#527E9F]" /> */}
                <p className="text-[16px] font-medium text-[#0E2236]">
                  Timeline: <span className="font-semibold text-[#2D6A94]">6 Month Result</span>
                </p>
              </div>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-[#536273] text-justify">
              Drag the slider on the image to compare the patient&apos;s natural hair restoration before
              and after 6 months of precision FUE-DHT transplantation.
            </p>
          </div>

          {/* Right Image Compare Slider inside Asymmetric Curved Shape */}
          <div
            style={{
              borderRadius: "16px 22px 22px 108px",
              overflow: "hidden",
              position: "relative",
              width: "100%",
              boxShadow: "0 4px 20px rgba(82,126,159,0.08)",
            }}
            className="w-full"
          >
            <ReactCompareImage
              leftImage="/images/hairTransplant/before.png"
              rightImage="/images/hairTransplant/after.jpg"
              aspectRatio="taller"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HairTransplantResult;
