import SwiperHome from "../components/SwiperHome";
import { homePictures } from "../data/homePictures";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="fadeIn">
      <SwiperHome
        onOff={onOff}
        setOnOff={setOnOff}
        homePictures={homePictures}
      ></SwiperHome>
    </div>
  );
};
export default Home;
