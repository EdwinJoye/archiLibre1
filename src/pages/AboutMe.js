import aboutMeData from "../data/aboutMe.json";
import Header from "../components/Header";
import HeaderResp from "../components/HeaderResp";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";
import FooterResp from "../components/FooterResp";
import "../css/aboutMe.css";

const AboutMe = ({ onOff, setOnOff, isSelectedMenu, setIsSelectedMenu }) => {
  return (
    <div
      className={
        isSelectedMenu === "principal-menu"
          ? "relative limitedHeight"
          : "relative"
      }
    >
      {/* <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1> */}
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <HeaderResp
        onOff={onOff}
        setOnOff={setOnOff}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HeaderResp>
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
      <FooterResp onOff={onOff} setOnOff={setOnOff}></FooterResp>
    </div>
  );
};

export default AboutMe;
