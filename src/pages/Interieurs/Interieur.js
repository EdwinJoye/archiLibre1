import Header from "../../components/Header";
import HeaderResp from "../../components/HeaderResp";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import Category1 from "../../components/Category1";
import Category2 from "../../components/Category2";
import InterieurImg from "../../img/interieur.jpg";
import interieurData from "../../data/interieur.json";

const Interieur = ({ onOff, setOnOff, isSelectedMenu, setIsSelectedMenu }) => {
  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <div className="exterieur__header-img-title">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <HeaderResp
          onOff={onOff}
          setOnOff={setOnOff}
          isSelectedMenu={isSelectedMenu}
          setIsSelectedMenu={setIsSelectedMenu}
        ></HeaderResp>
        <div className="exterieur__img-title fadeIn">
          <img
            className="exterieur__img-principal"
            src={InterieurImg}
            alt="interieurImg"
          />
          <div className="exterieur__title-underline">
            <h1>Intérieurs</h1>
            <div className="exterieur__underline "></div>
          </div>
        </div>
      </div>
      <div className="fadeIn">
        {interieurData.map((data) => {
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
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      <FooterResp onOff={onOff} setOnOff={setOnOff}></FooterResp>
    </div>
  );
};

export default Interieur;
