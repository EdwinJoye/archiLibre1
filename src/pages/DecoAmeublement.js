import Header from "../components/Header";
import "../css/decoAmeublement.css";
import { decoAmeublement } from "../data/decoAmeublement";

const DecoAmeublement = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {decoAmeublement.map((data, key) => {
          if (data.class === "decoAmeublement1") {
            return (
              <div key={key}>
                <div className="title-decoAmeublement1">{data.title}</div>
                <div className="img-texte-decoAmeublement">
                  <div className="div-img-decoAmeublement">
                    <img src={data.mainUrl} alt="decoAmeublement" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-decoAmeublement">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-decoAmeublement2">{data.title}</div>
                <div className="img-texte-decoAmeublement">
                  <div className="texte-decoAmeublement">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-decoAmeublement">
                    <img src={data.mainUrl} alt="decoAmeublement" />
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
export default DecoAmeublement;
