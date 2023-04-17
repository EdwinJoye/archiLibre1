import Header from "../components/Header";
import Footer from "../components/Footer";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import { exterieur } from "../data/exterieur";
import "../css/exterieur.css";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container">
        <div className="fadeIn">
          {exterieur.map((data) => {
            if (data.class === "exterieur1") {
              return (
                <Category1
                  key={data.id}
                  data={data}
                  onOff={onOff}
                  setOnOff={setOnOff}
                ></Category1>
              );
            } else {
              return (
                <Category2
                  key={data.id}
                  data={data}
                  onOff={onOff}
                  setOnOff={setOnOff}
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

export default Exterieur;
