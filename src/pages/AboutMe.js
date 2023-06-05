import aboutMeData from "../data/aboutMe.json";
import Header from "../components/Header";
import HeaderResp from "../components/HeaderResp";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";
import FooterResp from "../components/FooterResp";
import "../css/aboutMe.css";

const AboutMe = ({ isSelectedMenu, isActive }) => {
  return (
    <div
      className={
        isSelectedMenu === "principal-menu"
          ? "relative limitedHeight"
          : "relative"
      }
    >
      <Header isActive={isActive}></Header>
      <HeaderResp isActive={isActive}></HeaderResp>
      <div className="container">
        <div className="fadeIn">
          {aboutMeData.map((data, key) => {
            if (data.category === "aboutMe1") {
              return <Category1 data={data} key={key}></Category1>;
            } else {
              return <Category2 data={data} key={key}></Category2>;
            }
          })}
        </div>
      </div>
      <Footer></Footer>
      <FooterResp></FooterResp>
    </div>
  );
};

export default AboutMe;
