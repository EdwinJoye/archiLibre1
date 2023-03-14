import Header from "../components/Header";
import "../css/interieur.css";
import { interieur } from "../data/interieur";

const Interieur = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {interieur.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div className="imgIntérieur">
                <img src={data.mainUrl} alt="" />
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

export default Interieur;
