// img is on the left side of the card

function CardLeft({ img = "", title = "", description = "" }) {
  return (
    <div className="app-layout pt-10 bg-neutral-50">
      <div className="p-8 lg:grid lg:grid-cols-2 gap-8 bg-white rounded-3xl">
        <div className="flex justify-center lg:block">
          <div
            style={{
              borderRadius: "16px 22px 22px 108px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(82,126,159,0.08)",
            }}
          >
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h3 className="text-[24px] font-semibold">{title}</h3>
          <p className="mt-2 text-justify text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardLeft;
