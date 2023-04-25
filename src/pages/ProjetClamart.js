import { useLocation } from "react-router-dom";
import Header from "../components/Header";
// import OverlayImg from "../components/OverlayImg";
import Footer from "../components/Footer";
import PictureProjet from "../components/PictureProjets";
import "../css/projetClamart.css";

const ProjetClamart = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  const location = useLocation();
  const data = location.state.data;

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
            src={data.categories[2].pics[0].url}
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
              url={data.categories[0].pics[0].url}
              id={data.categories[0].pics[0].id}
              title={data.categories[0].pics[0].title}
              descriptionPic={data.categories[0].pics[0].descriptionPic}
              className={data.categories[0].pics[0].class}
            ></PictureProjet>
          </div>
          <div>
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              url={data.categories[0].pics[1].url}
              id={data.categories[0].pics[1].id}
              title={data.categories[0].pics[1].title}
              descriptionPic={data.categories[0].pics[1].descriptionPic}
              className={data.categories[0].pics[1].class}
            ></PictureProjet>

            {/* ////// TROISIEME PHOTO ////// */}
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              url={data.categories[0].pics[2].url}
              id={data.categories[0].pics[2].id}
              title={data.categories[0].pics[2].title}
              descriptionPic={data.categories[0].pics[2].descriptionPic}
              className={data.categories[0].pics[2].class}
            ></PictureProjet>
          </div>
        </div>
        <div className="projetClamart__PartFour-container container">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            url={data.categories[1].pics[0].url}
            id={data.categories[1].pics[0].id}
            title={data.categories[1].pics[0].title}
            descriptionPic={data.categories[1].pics[0].descriptionPic}
            className={data.categories[1].pics[0].class}
          ></PictureProjet>
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetClamart;
