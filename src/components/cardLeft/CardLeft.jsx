// img is on the left side of the card

function CardLeft({ img = "", title = "", description = "" }) {
  return (
    <div className="app-layout pt-10 bg-neutral-50">
      <div className="p-8 lg:grid lg:grid-cols-2 border rounded-3xl">
        <div className="flex justify-center lg:block">
          <img src={img} alt={title} />
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
