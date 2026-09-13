import Image from "next/image";
import { Star } from "react-feather";

function TestimonialCard({
  review = "",
  reviewUser = "",
  role = "Hair Transplant Patient",
  rating = 5,
}) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[24px] sm:rounded-[34px] bg-[#E6EAEE]/30 p-6 sm:p-8 md:p-10 select-none text-center transition-transform duration-300">
      {/* Top Row: Quotation Marks (Left) & West Valley Logo (Right) */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        {/* Large Iconic Double Quotes */}
        <div className="text-[#0E1A2B] opacity-95">
          <svg
            className="w-7 h-6 sm:w-9 sm:h-7 md:w-10 md:h-8"
            viewBox="0 0 42 34"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 19.5C0 8.7 6.8 1.9 16.5 0L19 5.5C12.5 7 9.2 10.8 9.2 15.8H18.5V34H0V19.5ZM23.5 19.5C23.5 8.7 30.3 1.9 40 0L42.5 5.5C36 7 32.7 10.8 32.7 15.8H42V34H23.5V19.5Z" />
          </svg>
        </div>

        {/* West Valley Logo */}
        <div className="w-[105px] sm:w-[125px] md:w-[140px] flex-shrink-0">
          <Image
            src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
            alt="West Valley Hair & Skin Clinic"
            width={140}
            height={42}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Middle: Patient Review Quote Text (Centered) */}
      <div className="my-5 sm:my-7 md:my-8 px-0 sm:px-2 md:px-3">
        <p className="text-[13.5px] sm:text-[15px] md:text-[16px] font-medium leading-[1.65] sm:leading-[1.7] text-[#0E1A2B]">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* Bottom: Patient Name, Role & 5 Black Stars */}
      <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
        <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#0E1A2B] leading-snug">
          {reviewUser}
        </h4>
        <p className="mt-0.5 text-[12.5px] sm:text-[13.5px] md:text-[14px] font-medium text-[#4B5563]">
          {role || "Hair Transplant Patient"}
        </p>

        {/* 5 Stars Underneath Name */}
        <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-1 text-black">
          {[...Array(5).keys()].map((i) => (
            <Star
              key={i}
              size={14}
              className="sm:w-[15px] sm:h-[15px]"
              fill={i < rating ? "#000000" : "transparent"}
              color="#000000"
              strokeWidth={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
