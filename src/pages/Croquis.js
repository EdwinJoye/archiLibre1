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
          return (
            <div>
              <div>{data.title}</div>
              <div className="imgCroquis">
                <img src={data.mainUrl} alt="croquis" />
                <div>{data.texte}</div>
                <div className="imageOverlay">
                  <div className="imageTitle">{data.title}</div>
                  <div className="descriptionImage">{data.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Croquis;
