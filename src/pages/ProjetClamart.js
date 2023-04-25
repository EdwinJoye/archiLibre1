import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import OverlayImg from "../components/OverlayImg";
import Footer from "../components/Footer";
import "../css/projetClamart.css";

const ProjetClamart = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container">
        {/* PARTIE UNE */}
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
        {/* PARTIE DEUX */}
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
        {/* PARTIE TROIS */}
        <div className="projetClamart__PartThree container">
          <div className="projetClamart__pics-container1">
            {/* ////// PREMIERE PHOTO ////// */}
            <OverlayImg
              url={data.categories[0].pics[0].url}
              isSelected={data.categories[0].pics[0].id === selectedId}
              onClick={() => {
                setSelectedId(null);
              }}
            ></OverlayImg>
            <div className="projetClamart__pics-overlay-container1">
              <div className="projetClamart__pic-container">
                <img
                  src={data.categories[0].pics[0].url}
                  onClick={() => {
                    setSelectedId(data.categories[0].pics[0].id);
                  }}
                  alt="img2"
                />
              </div>
              <div className="projetClamart__overlay">
                <div className="projetClamart__overlay-title-underline">
                  <h5>{data.categories[0].pics[0].title}</h5>
                  <div className="projetClamart__underline"></div>
                </div>
                <p>{data.categories[0].pics[0].descriptionPic}</p>
              </div>
            </div>
          </div>
          <div>
            {/* ////// DEUXIEME PHOTO ////// */}
            <div>
              <OverlayImg
                url={data.categories[0].pics[1].url}
                isSelected={data.categories[0].pics[1].id === selectedId}
                onClick={() => {
                  setSelectedId(null);
                }}
              ></OverlayImg>
              <div className="projetClamart__pics-overlay-container2">
                <div className="projetClamart__pic-container">
                  <img
                    src={data.categories[0].pics[1].url}
                    onClick={() => {
                      setSelectedId(data.categories[0].pics[1].id);
                    }}
                    alt="img2"
                  />
                </div>
                <div className="projetClamart__overlay">
                  <div className="projetClamart__overlay-title-underline">
                    <h5>{data.categories[0].pics[1].title}</h5>
                    <div className="projetClamart__underline"></div>
                  </div>
                  <p>{data.categories[0].pics[1].descriptionPic}</p>
                </div>
              </div>
            </div>

            {/* ////// TROISIEME PHOTO ////// */}
            <div>
              <OverlayImg
                url={data.categories[0].pics[2].url}
                isSelected={data.categories[0].pics[2].id === selectedId}
                onClick={() => {
                  setSelectedId(null);
                }}
              ></OverlayImg>
              <div className="projetClamart__pics-overlay-container3">
                <div className="projetClamart__pic-container">
                  <img
                    src={data.categories[0].pics[2].url}
                    onClick={() => {
                      setSelectedId(data.categories[0].pics[2].id);
                    }}
                    alt="img2"
                  />
                </div>
                <div className="projetClamart__overlay">
                  <div className="projetClamart__overlay-title-underline">
                    <h5>{data.categories[0].pics[2].title}</h5>
                    <div className="projetClamart__underline"></div>
                  </div>
                  <p>{data.categories[0].pics[2].descriptionPic}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PARTIE QUATRE */}
        <div className="projetClamart__PartFour-container container">
          <div>
            <OverlayImg
              url={data.categories[1].pics[0].url}
              isSelected={data.categories[1].pics[0].id === selectedId}
              onClick={() => {
                setSelectedId(null);
              }}
            ></OverlayImg>
            <div className="projetClamart__pics-overlay-container3">
              <div className="projetClamart__pic-container">
                <img
                  src={data.categories[1].pics[0].url}
                  onClick={() => {
                    setSelectedId(data.categories[1].pics[0].id);
                  }}
                  alt="img2"
                />
              </div>
              <div className="projetClamart__overlay">
                <div className="projetClamart__overlay-title-underline">
                  <h5>{data.categories[1].pics[0].title}</h5>
                  <div className="projetClamart__underline"></div>
                </div>
                <p>{data.categories[1].pics[0].descriptionPic}</p>
              </div>
            </div>
          </div>
          {/* <img src={data.categories[1].pics[0].url} alt="" /> */}
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetClamart;
