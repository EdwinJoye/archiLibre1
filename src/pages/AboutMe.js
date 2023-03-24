import Header from "../components/Header";
import "../css/aboutMe.css";
import { aboutMe } from "../data/aboutMe";

const AboutMe = ({ onOff, setOnOff }) => {
  console.log(onOff);
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>About Me</div>
      <div>
        {aboutMe.map((data, key) => {
          return (
            <div>
              <div>{data.title}</div>
              <div className="imgAboutMe">
                <img src={data.mainUrl} alt="" />
                <div className="imageOverlay">
                  <div className="imageTitle">{data.title}</div>
                  <div className="descriptionImage">{data.description}</div>
                </div>
              </div>
              <div className="texte__aboutMe">{data.texte}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
