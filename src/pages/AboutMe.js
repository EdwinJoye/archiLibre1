import Header from "../components/Header";
import "../css/aboutMe.css";
import { aboutMe } from "../data/aboutMe";

const AboutMe = ({ onOff, setOnOff }) => {
  console.log(onOff);
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>About Me</div>
      <div>
        {aboutMe.map((data, key) => {
          return (
            <div>
              <div>{data.title}</div>
              <div className="imgTexteAboutMe">
                <img src={data.mainUrl} alt="" />
                <div>{data.texte}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
