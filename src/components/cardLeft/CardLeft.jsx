// img is on the left side of the card

function CardLeft({
  img = "",
  title = "",
  tag = "",
  description = "",
  options = [],
}) {
  return (
    <div className="app-layout pt-10 bg-neutral-50">
      <div className="p-8 lg:p-10 lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl ">
        <div className="flex justify-center lg:block">
          <div
            className="w-full max-w-[500px] h-[280px] sm:h-[340px] lg:h-[360px]"
            style={{
              borderRadius: "16px 22px 22px 108px",
              overflow: "hidden",
            }}
          >
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          {tag && (
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-[#EBF3F8] text-[#2D4F6F] text-[12px] font-semibold">
              {tag}
            </div>
          )}
          <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#0E1A2B] tracking-[-0.02em]">
            {title}
          </h3>
          <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.78] text-[#536273]">
            {description}
          </p>

          {options && options.length > 0 && (
            <div className="mt-5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-[#8A9BA8] mb-2.5">
                Treatment Options:
              </p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <span
                    key={opt}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#EAECEF] text-[12.5px] font-medium text-[#0E2236]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#527E9F] shrink-0" />
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardLeft;
