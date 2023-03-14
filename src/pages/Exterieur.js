import Header from "../components/Header";
import "../css/exterieur.css";
import { exterieur } from "../data/exterieur";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {exterieur.map((data, key) => {
          return (
            <div key={key} className="exterieurTest">
              <div>{data.title}</div>
              <div className="imgExterieur">
                <img src={data.mainUrl} alt="exterieur" />
                <div className="imageOverlay">
                  <div className="imageTitle">{data.title}</div>
                  <div className="descriptionImage">{data.description}</div>
                </div>
                <div>{data.texte}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exterieur;
