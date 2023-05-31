import "../css/test.css";
import HeaderGreen2 from "../components/HeaderGreen2";
// import OverlayCarousel from "../components/OverlayCarousel";
import PictureProjet from "../components/PictureProjets";
import DataTest from "../data/interieur.json";
import Footer from "../components/Footer";

const Test = ({ selectedId, setSelectedId, selectedPic, setSelectedPic }) => {
  return (
    <div className="test__container">
      <HeaderGreen2
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></HeaderGreen2>
      <div className="test__pic-container">
        <div className="test__pic-1">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={DataTest[0].pagePictures[1].pics[0]}
            url={DataTest[0].pagePictures[1].pics[0].url}
            id={DataTest[0].pagePictures[1].pics[0].id}
            index={DataTest[0].pagePictures[1].pics[0].index}
            title={DataTest[0].pagePictures[1].pics[0].title}
            descriptionPic={DataTest[0].pagePictures[1].pics[0].descriptionPic}
            className={DataTest[0].pagePictures[1].pics[0].class}
          ></PictureProjet>
        </div>
        <div className="test__pic-2">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={DataTest[0].pagePictures[1].pics[1]}
            url={DataTest[0].pagePictures[1].pics[1].url}
            id={DataTest[0].pagePictures[1].pics[1].id}
            index={DataTest[0].pagePictures[1].pics[1].index}
            title={DataTest[0].pagePictures[1].pics[1].title}
            descriptionPic={DataTest[0].pagePictures[1].pics[1].descriptionPic}
            className={DataTest[0].pagePictures[1].pics[1].class}
          ></PictureProjet>
        </div>
        <div className="test__pic-3">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={DataTest[0].pagePictures[1].pics[2]}
            url={DataTest[0].pagePictures[1].pics[2].url}
            id={DataTest[0].pagePictures[1].pics[2].id}
            index={DataTest[0].pagePictures[1].pics[2].index}
            title={DataTest[0].pagePictures[1].pics[2].title}
            descriptionPic={DataTest[0].pagePictures[1].pics[2].descriptionPic}
            className={DataTest[0].pagePictures[1].pics[2].class}
          ></PictureProjet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Test;
