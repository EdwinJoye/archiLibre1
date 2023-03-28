import Header from "../components/Header";
import "../css/interieur.css";
import { interieur } from "../data/interieur";

const Interieur = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {interieur.map((data, key) => {
          if (data.class === "interieur1") {
            return (
              <div key={key}>
                <div className="title-interieur1">{data.title}</div>
                <div className="img-texte-interieur">
                  <div className="div-img-interieur">
                    <img src={data.mainUrl} alt="interieur" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-interieur">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-interieur2">{data.title}</div>
                <div className="img-texte-interieur">
                  <div className="texte-interieur">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-interieur">
                    <img src={data.mainUrl} alt="interieur" />
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

export default Interieur;
