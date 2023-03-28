import Header from "../components/Header";
import "../css/aboutMe.css";
import { aboutMe } from "../data/aboutMe";

const AboutMe = ({ onOff, setOnOff }) => {
  console.log(onOff);
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {aboutMe.map((data, key) => {
          if (data.class === "aboutMe1") {
            return (
              <div key={key}>
                <div className="title-aboutMe1">{data.title}</div>
                <div className="img-texte-aboutMe">
                  <div className="div-img-aboutMe img-border-1">
                    <img src={data.mainUrl} alt="pic" />
                    <div className="imageOverlay">
                      <div className="imageTitle">{data.title}</div>
                      <div className="descriptionImage">{data.description}</div>
                    </div>
                  </div>
                  <div className="texte-aboutMe">
                    <p>{data.texte}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <div className="title-aboutMe2">{data.title}</div>
                <div className="img-texte-aboutMe">
                  <div className="texte-aboutMe">
                    <p>{data.texte}</p>
                  </div>
                  <div className="div-img-aboutMe">
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

export default AboutMe;
