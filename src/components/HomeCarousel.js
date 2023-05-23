import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import HeaderTransparent from "../components/HeaderTransparent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/homeCarousel.css";

const HomeCarousel = ({ pics, onOff, setOnOff }) => {
  return (
    <div className="swiper container">
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
        {pics.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <img
                className="swiper__swiperSlide-img"
                src={data.mainUrl}
                alt="swipImg"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper__header">
        <HeaderTransparent
          onOff={onOff}
          setOnOff={setOnOff}
        ></HeaderTransparent>
      </div>
      <div className="home__title">
        <span>Aman Othenin-Girard Architecte DPLG</span>
      </div>
    </div>
  );
};

export default HomeCarousel;
