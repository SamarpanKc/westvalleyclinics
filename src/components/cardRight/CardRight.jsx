// img is on the right side of the card

function CardRight({
  img = "",
  title = "",
  description = "",
  descriptionTwo = "",
  descriptionThree = "",
  descriptionFour = "",
}) {
  return (
    <div className="app-layout pt-10 bg-neutral-50">
      <div className="p-8 lg:grid lg:grid-cols-2 lg:gap-5 bg-white rounded-3xl">
        <div>
          <h3 className="text-[24px] font-semibold">{title}</h3>
          <p className="mt-2 text-justify text-neutral-600">{description}</p>
          {descriptionTwo && (
            <p className="mt-2 text-justify text-neutral-600">
              {descriptionTwo}
            </p>
          )}

          {descriptionThree && (
            <p className="mt-2 text-justify text-neutral-600">
              {descriptionThree}
            </p>
          )}

          {descriptionFour && (
            <p className="mt-2 text-justify text-neutral-600">
              {descriptionFour}
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center lg:mt-0 lg:ml-auto items-center">
          <div
            style={{
              borderRadius: "108px 16px 22px 22px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(82,126,159,0.08)",
            }}
          >
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRight;
