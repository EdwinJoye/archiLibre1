import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PictureProjet from "../components/PictureProjets";
import "../css/projetClamart.css";

const ProjetClamart = ({
  onOff,
  setOnOff,
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
}) => {
  const location = useLocation();
  const data = location.state.data;

  console.log("DATA", data);
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container">
        <div className="projetClamart__PartOne">
          <div className="projetClamart__title-date">
            <h2>{data.title}</h2>
            <div className="projetClamart__titleUnderline"></div>
            <div className="projetClamart__date-dateLine">
              <div className="projetClamart__dateLine"></div>
              <h3>{data.date}</h3>
            </div>
          </div>
          <div className="projetClamart__titleBackground"></div>
          <img
            className="projetClamart__img-croquis"
            src={data.backgroundPicture[0].url}
            alt="croquis"
          />
        </div>
        <div className="projetClamart__PartTwo">
          <div className="projetClamart__imgPrincipal-background-text-container">
            <img
              className="projetClamart__imgPrincipal"
              src={data.prinPicture}
              alt="imgPrincipal"
            />
            <div className="projetClamart__backgroundImgPrinciapl"></div>
            <div className="projetClamart__texte-container">
              <h4>{data.title}</h4>
              <p>{data.descriptionUrl}</p>
            </div>
          </div>
        </div>
        <div className="projetClamart__PartThree container">
          <div className="projetClamart__pics-container1">
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.pagePictures}
              url={data.pagePictures[0].url}
              id={data.pagePictures[0].id}
              index={data.pagePictures[0].index}
              title={data.pagePictures[0].title}
              descriptionPic={data.pagePictures[0].descriptionPic}
              className={data.pagePictures[0].class}
            ></PictureProjet>
          </div>
          <div>
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.pagePictures}
              url={data.pagePictures[1].url}
              id={data.pagePictures[1].id}
              index={data.pagePictures[1].index}
              title={data.pagePictures[1].title}
              descriptionPic={data.pagePictures[1].descriptionPic}
              className={data.pagePictures[1].class}
            ></PictureProjet>

            {/* ////// TROISIEME PHOTO ////// */}
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.pagePictures}
              url={data.pagePictures[2].url}
              id={data.pagePictures[2].id}
              index={data.pagePictures[2].index}
              title={data.pagePictures[2].title}
              descriptionPic={data.pagePictures[2].descriptionPic}
              className={data.pagePictures[2].class}
            ></PictureProjet>
          </div>
        </div>
        <div className="projetClamart__PartFour-container container">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={data.pagePictures}
            url={data.pagePictures[3].url}
            id={data.pagePictures[3].id}
            index={data.pagePictures[3].index}
            title={data.pagePictures[3].title}
            descriptionPic={data.pagePictures[3].descriptionPic}
            className={data.pagePictures[3].class}
          ></PictureProjet>
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetClamart;
