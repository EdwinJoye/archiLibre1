import aboutMeData from "../data/aboutMe.json";
import HeaderGreen1 from "../components/HeaderGreen1";
import HeaderGreenResp from "../components/HeaderGreenResp";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";
import "../css/aboutMe.css";

const AboutMe = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1>
      <HeaderGreenResp onOff={onOff} setOnOff={setOnOff}></HeaderGreenResp>
      <div className="container">
        <div className="fadeIn">
          {aboutMeData.map((data, key) => {
            if (data.category === "aboutMe1") {
              return (
                <Category1
                  onOff={onOff}
                  setOnOff={setOnOff}
                  data={data}
                  key={key}
                ></Category1>
              );
            } else {
              return (
                <Category2
                  onOff={onOff}
                  setOnOff={setOnOff}
                  data={data}
                  key={key}
                ></Category2>
              );
            }
          })}
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default AboutMe;
