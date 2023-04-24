import Header from "../components/Header";
import Footer from "../components/Footer";
import ExterieurImg from "../img/exterieur.jpg";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import exterieurData from "../data/exterieur.json";
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
        {exterieurData.map((data) => {
          if (data.class === "exterieur1") {
            return (
              // <div>hello</div>
              <Category1
                key={data.id}
                data={data}
                onOff={onOff}
                setOnOff={setOnOff}
              ></Category1>
            );
          } else {
            return (
              // <div>hello</div>
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

export default Exterieur;
