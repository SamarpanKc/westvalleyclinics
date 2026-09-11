import ReactCompareImage from "react-compare-image";

function HairTransplantResult() {
  return (
    <div className="app-layout mt-20 bg-neutral-50">
      <div className="p-8 lg:grid lg:grid-cols-2  lg:gap-5">
        <div className="my-auto ">
          <h3 className="text-[24px] font-semibold text-primary">
            Hair Transplant Result
          </h3>
          <p className="mt-2 text-justify text-neutral-600">Grade 3</p>
          <p className="mt-2 text-justify text-neutral-600">
            Number of Graft :3300
          </p>
          <p className="mt-2 text-justify text-neutral-600">6 Month Result</p>
        </div>

        <div className="mt-8 flex justify-center lg:block lg:mt-0">
          <ReactCompareImage
            leftImage="/images/hairTransplant/before.png"
            rightImage="/images/hairTransplant/after.jpg"
            aspectRatio="taller"
          />
        </div>
      </div>
    </div>
  );
}

export default HairTransplantResult;
