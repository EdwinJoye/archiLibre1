import SwiperHome from "../components/SwiperHome";
import { homePictures } from "../data/homePictures";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="fadeIn">
      <SwiperHome
        homePictures={homePictures}
        onOff={onOff}
        setOnOff={setOnOff}
      ></SwiperHome>
    </div>
  );
};
export default Home;
