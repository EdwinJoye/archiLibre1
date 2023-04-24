import { useLocation } from "react-router-dom";
import Header from "../components/Header";
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
              <p>{data.texte}</p>
            </div>
          </div>
        </div>
        {/* PARTIE TROIS */}
        <div className="projetClamart__PartThree container">
          <div className="projetClamart__pic-container1">
            <img src={data.categories[0].pics[2].url} alt="" />
          </div>
          <div className="projetClamart__pic-container2">
            <img src={data.categories[0].pics[0].url} alt="" />
            <img src={data.categories[0].pics[1].url} alt="" />
          </div>
        </div>
        {/* PARTIE QUATRE */}
        <div className="projetClamart__PartFour-container container">
          <img src={data.categories[1].pics[0].url} alt="" />
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProjetClamart;
