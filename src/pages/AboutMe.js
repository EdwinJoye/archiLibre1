import aboutMeData from "../data/aboutMe.json";
import HeaderGreen1 from "../components/HeaderGreen1";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";
import "../css/aboutMe.css";

const AboutMe = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1>
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
      <div className="footer">
        <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      </div>
    </div>
  );
};

export default AboutMe;
