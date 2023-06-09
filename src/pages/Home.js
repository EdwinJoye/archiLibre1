import HomeCarousel from "../components/HomeCarousel";
import homePictures from "../data/homePictures.json";
import homePicturesResp from "../data/homePicsturesResp.json";
import "../css/home.css";

const Home = ({ isSelectedMenu, setIsSelectedMenu, isActive }) => {
  return (
    <div className="fadeIn">
      <HomeCarousel
        pics={homePictures}
        picsResp={homePicturesResp}
        isActive={isActive}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HomeCarousel>
    </div>
  );
};
export default Home;
