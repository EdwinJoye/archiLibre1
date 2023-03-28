import Header from "../components/Header";
import "../css/croquis.css";
import { croquis } from "../data/croquis";

const Croquis = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>Croquis</div>
      <div>
        {croquis.map((data, key) => {
          if (data.class === "croquis1") {
            return (
              <div key={key}>
                <div className="title-croquis1">{data.title}</div>
                <div className="img-texte-croquis">
                  <div className="div-img-croquis">
                    <img src={data.mainUrl} alt="croquis" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-croquis">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-croquis1">{data.title}</div>
                <div className="img-texte-croquis">
                  <div className="texte-croquis">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-croquis">
                    <img src={data.mainUrl} alt="croquis" />
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

export default Croquis;
