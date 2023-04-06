import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/swiper.css";

const SwiperP = ({ zooms }) => {
  console.log(zooms);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 10000,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        {zooms.map((data, key) => {
          return (
            <div key={key}>
              <SwiperSlide>
                <img className="swiper__img" src={data} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperP;
