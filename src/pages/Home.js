import HomeCarousel from "../components/HomeCarousel";
import homePictures from "../data/homePictures.json";
import homePicturesResp from "../data/homePicsturesResp.json";
import "../css/home.css";

const Home = ({ isActive }) => {
  return (
    <div className="fadeIn">
      <HomeCarousel
        pics={homePictures}
        picsResp={homePicturesResp}
        isActive={isActive}
      ></HomeCarousel>
    </div>
  );
};
export default Home;
