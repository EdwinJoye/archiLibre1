import Header from "../components/Header";
import Footer from "../components/Footer";
import { aboutMe } from "../data/aboutMe";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import "../css/aboutMe.css";

const AboutMe = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="container">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div className="fadeIn">
          {aboutMe.map((data, key) => {
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutMe;
