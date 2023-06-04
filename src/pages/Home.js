import HomeCarousel from "../components/HomeCarousel";
import homePictures from "../data/homePictures.json";
import "../css/home.css";

const Home = ({ onOff, setOnOff, isSelectedMenu, setIsSelectedMenu }) => {
  return (
    <div className="fadeIn">
      <HomeCarousel
        pics={homePictures}
        onOff={onOff}
        setOnOff={setOnOff}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HomeCarousel>
    </div>
  );
};
export default Home;
