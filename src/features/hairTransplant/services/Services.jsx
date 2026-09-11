import { useState } from "react";
import cn from "classnames";

const Services = () => {
  const [serviceImage, setServiceImage] = useState(
    "/images/hairTransplant/prp.png"
  );

  const [serviceDetail, setServiceDetail] = useState("Platelet Rich Plasma");

  const handlePrp = () => {
    setServiceImage("/images/hairTransplant/prp.png");
    setServiceDetail("Platelet Rich Plasma");
  };

  const handleSmp = () => {
    setServiceImage("/images/hairTransplant/smp.png");
    setServiceDetail("Scalp Micropigmentation");
  };

  const handleLllt = () => {
    setServiceImage("/images/hairTransplant/gfc.png");
    setServiceDetail("Growth Factor Concentration");
  };

  return (
    <div className="mt-20">
      <div className="app-layout">
        <h3 className="text-large text-center text-primary">
          Hair Treatment Services
        </h3>

        <div className="mt-10 md:grid md:grid-cols-2 md:grid-flow-col md:auto-cols-min gap-5">
          <div>
            {/* prp */}
            <div
              className={cn(
                "p-8 border rounded-2xl cursor-pointer text-neutral-600",
                {
                  "bg-white border-primary":
                    serviceDetail === "Platelet Rich Plasma",
                }
              )}
              onClick={handlePrp}
            >
              <p
                className={cn("text-[18px] font-semibold", {
                  "text-primary": serviceDetail === "Platelet Rich Plasma",
                })}
              >
                PRP
              </p>
              <p className="text-small">Platelet Rich Plasma</p>
              {serviceDetail === "Platelet Rich Plasma" ? (
                <>
                  {/* <p className="text-small mt-2">{serviceDetail}</p> */}
                  <p className="text-small mt-1">
                    {" "}
                    Plasma extracted from the patient’s blood is injected into
                    their scalp to accelerate hair growth
                  </p>
                </>
              ) : null}
            </div>
            {/* gfc  */}
            <div
              className={cn(
                "mt-4 p-8 border rounded-2xl cursor-pointer text-neutral-600",
                {
                  "bg-white border-primary":
                    serviceDetail === "Growth Factor Concentration",
                }
              )}
              onClick={handleLllt}
            >
              <p
                className={cn("text-[18px] font-semibold", {
                  "border-primary text-primary":
                    serviceDetail === "Growth Factor Concentration",
                })}
              >
                GFC
              </p>
              <p className="text-small">Growth Factor Concentration</p>
              {serviceDetail === "Growth Factor Concentration" ? (
                <>
                  {/* <p className="text-small mt-2">{serviceDetail}</p> */}
                  <p className="text-small mt-1">
                    in hair fall treatment involves extracting growth factors
                    from a patient&apos;s blood and injecting them into the
                    scalp to stimulate natural hair regrowth.
                  </p>
                </>
              ) : null}
            </div>
            {/*smp  */}
            <div
              className={cn(
                "mt-4 p-8 border rounded-2xl cursor-pointer  text-neutral-600",
                {
                  "bg-white border-primary":
                    serviceDetail === "Scalp Micropigmentation",
                }
              )}
              onClick={handleSmp}
            >
              <p
                className={cn("text-[18px] font-semibold", {
                  "text-primary": serviceDetail === "Scalp Micropigmentation",
                })}
              >
                SMP
              </p>
              <p className="text-small">Scalp Micropigmentation</p>
              {serviceDetail === "Scalp Micropigmentation" ? (
                <>
                  {/* <p className="text-small mt-2">{serviceDetail}</p> */}
                  <p className="text-small mt-1">
                    Small needles deposit tiny pigments on the scalp to make
                    hair appear thicker
                  </p>
                </>
              ) : null}
            </div>{" "}
          </div>
          <div className="md:col-span-12 mt-8 md:mt-0">
            <img
              src={serviceImage}
              alt="hair treatment services"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
