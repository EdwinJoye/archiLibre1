import Header from "../components/Header";
import "../css/exterieur.css";
import { exterieur } from "../data/exterieur";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {exterieur.map((data, key) => {
          if (data.class === "exterieur1") {
            return (
              <div key={key}>
                <div className="title-exterieur1">{data.title}</div>
                <div className="img-texte-exterieur">
                  <div className="div-img-exterieur">
                    <img src={data.mainUrl} alt="exterieur" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-exterieur">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-exterieur2">{data.title}</div>
                <div className="img-texte-exterieur">
                  <div className="texte-exterieur">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-exterieur">
                    <img src={data.mainUrl} alt="exterieur" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Exterieur;
