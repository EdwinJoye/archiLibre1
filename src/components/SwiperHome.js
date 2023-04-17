import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/swiperHome.css";

const SwiperHome = ({ homePictures }) => {
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
        {homePictures.map((data, key) => {
          return (
            <div key={key}>
              <SwiperSlide>
                <img
                  className="swiper__swiperSlide-img"
                  src={data.mainUrl}
                  alt=""
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      {/* <div className="swiper__header">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
      </div> */}
      <div className="home__title">
        <span>Aman Othenin-Girard Architecte DPLG</span>
      </div>
    </div>
  );
};

export default SwiperHome;
