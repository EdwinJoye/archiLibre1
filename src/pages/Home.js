import SwiperHome from "../components/SwiperHome";
import Header from "../components/Header";
import { homePictures } from "../data/homePictures";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="fadeIn">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <SwiperHome homePictures={homePictures}></SwiperHome>
    </div>
  );
};
export default Home;
