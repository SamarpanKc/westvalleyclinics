import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

// Nepali / South Asian patient portrait photos for the review badge
const nepaliAvatars = [
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
    alt: "Patient review",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    alt: "Patient review",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    alt: "Patient review",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    alt: "Patient review",
  },
];

// Star rating with 4.8 fractional star (80% cut on 5th star)
function FractionalRatingStars({ rating = 4.8, size = 18, color = "#2D6A94" }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((starNum) => {
        const fillPercent = Math.min(Math.max(rating - (starNum - 1), 0), 1) * 100;

        return (
          <div
            key={starNum}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            {/* Background outline/empty star */}
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 opacity-30"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>

            {/* Filled portion of star (100% for stars 1-4, 80% for star 5) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Testimonial({ testimonialContent = [] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-[#f7f9fc] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2
            className="font-bold leading-[1.12] tracking-[-0.035em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(26px, 4vw, 48px)" }}
          >
            See why people choose <br className="hidden sm:block" />
            <span className="text-[#527E9F]">West Valley</span>
          </h2>

          {/* Nepali People Avatars Stack + Fractional 4.8 Rating Stars */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Overlapping Nepali People Avatar Images */}
            <div className="flex -space-x-2.5 sm:-space-x-3 overflow-hidden">
              {nepaliAvatars.map((person, idx) => (
                <img
                  key={idx}
                  src={person.src}
                  alt={person.alt}
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-black/5"
                />
              ))}
            </div>

            {/* Fractional Stars (4.8 rating with 5th star cut off at 80%) + Text */}
            <div className="flex items-center gap-2 text-left">
              <FractionalRatingStars rating={4.8} size={16} color="#2D6A94" />
              <span className="text-[14px] sm:text-[15px] font-bold text-[#0E1A2B]">4.8</span>
              <span className="text-[12px] sm:text-[13px] text-[#536273]">
                from patient&apos;s google reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-[1240px]">
          <div className="px-0 sm:px-12 md:px-14">
            {isMounted ? (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".testimonial-prev-btn",
                  nextEl: ".testimonial-next-btn",
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={testimonialContent.length > 3}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                  },
                }}
                className="!pb-2 !pt-1"
              >
                {testimonialContent.map((item, idx) => (
                  <SwiperSlide key={idx} className="!h-auto flex">
                    <TestimonialCard
                      review={item.review}
                      reviewUser={item.reviewUser}
                      role={item.role}
                      rating={item.rating}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonialContent.slice(0, 3).map((item, idx) => (
                  <TestimonialCard
                    key={idx}
                    review={item.review}
                    reviewUser={item.reviewUser}
                    role={item.role}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Arrows (hidden on small screens, positioned with comfortable margins) */}
          <button
            aria-label="Previous review"
            className="testimonial-prev-btn hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white border border-[#D0E2F0] text-[#2D6A94] shadow-sm transition-all duration-200 hover:bg-[#EEF5FC] hover:border-[#2D6A94] hover:opacity-100 opacity-40 focus:outline-none"
          >
            <ChevronLeft size={20} className="md:w-5 md:h-5" />
          </button>

          <button
            aria-label="Next review"
            className="testimonial-next-btn hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white border border-[#D0E2F0] text-[#2D6A94] shadow-sm transition-all duration-200 hover:bg-[#EEF5FC] hover:border-[#2D6A94] hover:opacity-100 opacity-60 focus:outline-none"
          >
            <ChevronRight size={20} className="md:w-5 md:h-5" />
          </button>

          {/* Mobile Navigation Arrows (cleanly placed underneath the cards on small screens) */}
          <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
            <button
              aria-label="Previous review"
              className="testimonial-prev-btn flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#D0E2F0] text-[#2D6A94] shadow-sm active:bg-[#EEF5FC] opacity-70"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next review"
              className="testimonial-next-btn flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#D0E2F0] text-[#2D6A94] shadow-sm active:bg-[#EEF5FC] opacity-70"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;
