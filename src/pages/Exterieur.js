import Header from "../components/Header";
import Footer from "../components/Footer";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import { exterieur } from "../data/exterieur";
import "../css/exterieur.css";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="container">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div className="fadeIn">
          {exterieur.map((data, key) => {
            if (data.class === "exterieur1") {
              return (
                <Category1
                  key={key}
                  data={data}
                  onOff={onOff}
                  setOnOff={setOnOff}
                ></Category1>
              );
            } else {
              return (
                <Category2
                  key={key}
                  data={data}
                  onOff={onOff}
                  setOnOff={setOnOff}
                ></Category2>
              );
            }
          })}
        </div>
      </div>
      <div className="footer fadeIn">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Exterieur;
