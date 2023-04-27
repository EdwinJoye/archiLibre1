import HomeCarousel from "../components/HomeCarousel";
import { homePictures } from "../data/homePictures";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="fadeIn">
      <HomeCarousel
        pics={homePictures}
        onOff={onOff}
        setOnOff={setOnOff}
      ></HomeCarousel>
    </div>
  );
};
export default Home;
