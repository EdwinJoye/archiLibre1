import HeaderGreen1 from "../../components/HeaderGreen1";
import HeaderGreenResp from "../../components/HeaderGreenResp";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import ExterieurImg from "../../img/exterieur.jpg";
import Category1 from "../../components/Category1";
import Category2 from "../../components/Category2";
import exterieurData from "../../data/exterieur.json";
import "../../css/exterieur.css";

const Exterieur = ({ onOff, setOnOff, isSelectedMenu, setIsSelectedMenu }) => {
  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <div className="exterieur__header-img-title">
        <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1>
        <HeaderGreenResp
          onOff={onOff}
          setOnOff={setOnOff}
          isSelectedMenu={isSelectedMenu}
          setIsSelectedMenu={setIsSelectedMenu}
        ></HeaderGreenResp>
        <div className="exterieur__img-title fadeIn">
          <img
            className="exterieur__img-principal"
            src={ExterieurImg}
            alt="exterieurImg"
          />
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
                key={data.mainUrl}
                data={data}
                onOff={onOff}
                setOnOff={setOnOff}
              ></Category2>
            );
          }
        })}
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      <FooterResp onOff={onOff} setOnOff={setOnOff}></FooterResp>
    </div>
  );
};

export default Exterieur;
