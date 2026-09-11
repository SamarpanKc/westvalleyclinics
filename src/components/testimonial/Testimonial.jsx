import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

function Testimonial({ testimonialContent = [] }) {
  return (
    <div className="mt-20 py-12 bg-[#FFFAF0]">
      <div className="app-layout text-center">
        <h3 className="text-large text-primary">Testimonials</h3>
        <p className="mt-2 text-neutral-600">
          Hear from our satisfied Customer
        </p>

        {/* testimonial card section */}
        <div className="flex gap-2 md:gap-5 items-center md:mx-10">
          <div>
            <ChevronLeft
              id="prevEl"
              className="text-[32px] md:text-[48px] cursor-pointer text-neutral-600"
            />
          </div>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: "#prevEl", nextEl: "#nextEl" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
          >
            {testimonialContent.length > 0
              ? testimonialContent.map((item, id) => (
                  <SwiperSlide key={id}>
                    <TestimonialCard
                      className="mt-8"
                      review={item.review}
                      reviewUser={item.reviewUser}
                      rating={item.rating}
                      date={item.date}
                    />
                  </SwiperSlide>
                ))
              : null}
          </Swiper>

          <div>
            <ChevronRight
              id="nextEl"
              className="text-[32px] md:text-[48px] cursor-pointer text-neutral-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
