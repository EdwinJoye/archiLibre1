import Header from "../components/Header";
import "../css/plans.css";
import { plans } from "../data/plans";

const Plans = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {plans.map((data, key) => {
          if (data.class === "plan1") {
            return (
              <div key={key}>
                <div className="title-plans1">{data.title}</div>
                <div className="img-texte-plans">
                  <div className="div-img-plans img-border-1">
                    <img src={data.mainUrl} alt="pic" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-plans">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-plans2">{data.title}</div>
                <div className="img-texte-plans">
                  <div className="texte-plans">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-plans img-border-1">
                    <img src={data.mainUrl} alt="pic" />
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

export default Plans;
