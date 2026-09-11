import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

function Team() {
  return (
    <div className="mt-20">
      <div className="app-layout">
        <h3 className="text-large text-center text-primary">Our Team</h3>
        <div className="mt-10 flex gap-2 md:gap-5 items-center md:mx-10">
          <img
            src="/images/team/team-dental.png"
            alt="team"
            className="rounded-xl"
          />

          {/* <div>
            <ChevronLeft
              id="prevElTeam"
              className="text-[32px] md:text-[48px] cursor-pointer text-neutral-600"
            />
          </div> */}
          {/* <Swiper
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: "#prevElTeam", nextEl: "#nextElTeam" }}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            loop
          >
            <SwiperSlide>
              <img
                src="/images/team/team-dental.png"
                alt="team"
                className="rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/team/team-1.png"
                alt="team"
                className="rounded-xl"
              />
            </SwiperSlide>
          </Swiper> */}

          {/* <div>
            <ChevronRight
              id="nextElTeam"
              className="text-[32px] md:text-[48px] cursor-pointer text-neutral-600"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Team;
