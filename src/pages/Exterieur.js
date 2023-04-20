import Header from "../components/Header";
import Footer from "../components/Footer";
import { exterieur } from "../data/exterieur";
import ExterieurImg from "../img/exterieur.jpg";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";
import "../css/exterieur.css";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="exterieur__header-img-title">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div className="exterieur__img-title fadeIn">
          <img className="exterieur__img-principal" src={ExterieurImg} alt="" />
          <div className="exterieur__title-underline">
            <h1>Extérieurs</h1>
            <div className="exterieur__underline "></div>
          </div>
        </div>
      </div>
      <div className="fadeIn">
        {exterieur.map((data) => {
          if (data.class === "exterieur1") {
            return (
              // <div>hello</div>
              <Test1
                key={data.id}
                data={data}
                onOff={onOff}
                setOnOff={setOnOff}
              ></Test1>
            );
          } else {
            return (
              // <div>hello</div>
              <Test2
                key={data.id}
                data={data}
                onOff={onOff}
                setOnOff={setOnOff}
              ></Test2>
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

export default Exterieur;
