import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Croix from "../img/croixBlanche.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/home.css";
import "../css/overlayCarousel.css";

const OverlayCarousel = ({ pics, onClick, isSelected, selectedPic }) => {
  return (
    <div className={`testVisibleOuNon ${isSelected ? "visible" : ""}`}>
      <img
        onClick={() => onClick()}
        className="imgCroix"
        src={Croix}
        alt="croix"
      />
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        initialSlide={selectedPic}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {pics.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <img
                className="overlayCarousel__img"
                src={data.url}
                alt="swipImg"
                onClick={() => onClick()}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OverlayCarousel;
