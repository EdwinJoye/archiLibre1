import Header from "../components/Header";
import Footer from "../components/Footer";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import InterieurImg from "../img/intérieur.jpg";
import { interieur } from "../data/interieur";
import "../css/interieur.css";

const Interieur = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="exterieur__header-img-title">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div className="exterieur__img-title fadeIn">
          <img className="exterieur__img-principal" src={InterieurImg} alt="" />
          <div className="exterieur__title-underline">
            <h1>Intérieurs</h1>
            <div className="exterieur__underline "></div>
          </div>
        </div>
      </div>
      <div className="fadeIn">
        {interieur.map((data) => {
          if (data.class === "interieur1") {
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

      <div className="footer">
        <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      </div>
    </div>
  );
};

export default Interieur;
