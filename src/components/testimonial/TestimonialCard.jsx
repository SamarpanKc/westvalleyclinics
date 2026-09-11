import cn from "classnames";
import Image from "next/image";
import { Star } from "react-feather";

function TestimonialCard({
  className = "",
  review = "",
  reviewUser = "",
  rating = 0,
  date = "",
}) {
  return (
    <div
      className={cn(
        className,
        "rounded-2xl border border-neutral-200 bg-neutral-200"
      )}
    >
      <div className="p-6 md:p-12 mx-auto">
        <p className="text-small text-neutral-700">{review}</p>

        <div className="mt-2 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="west valley logo"
            width={80}
            height={80}
          />
        </div>
        <p className="mt-4 font-semibold text-[18px] text-neutral-800">
          {reviewUser}
        </p>

        <div className="mt-2 flex gap-2 justify-center">
          {[...Array(5).keys()].map((item, id) => (
            <Star
              key={id}
              size={16}
              color="#FFAB00"
              fill={item < rating ? "#FFAB00" : "transparent"}
            />
          ))}
        </div>
        <p className="text-small mt-2">{date}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
