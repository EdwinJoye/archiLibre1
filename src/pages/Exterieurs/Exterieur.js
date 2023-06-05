import Header from "../../components/Header";
import HeaderResp from "../../components/HeaderResp";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import ExterieurImg from "../../img/exterieur.jpg";
import Category1 from "../../components/Category1";
import Category2 from "../../components/Category2";
import exterieurData from "../../data/exterieur.json";
import "../../css/exterieur.css";

const Exterieur = ({ isSelectedMenu, setIsSelectedMenu, isActive }) => {
  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <div className="exterieur__header-img-title">
        <Header isActive={isActive}></Header>
        <HeaderResp
          isActive={isActive}
          isSelectedMenu={isSelectedMenu}
          setIsSelectedMenu={setIsSelectedMenu}
        ></HeaderResp>
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
            return <Category1 key={data.id} data={data}></Category1>;
          } else {
            return <Category2 key={data.mainUrl} data={data}></Category2>;
          }
        })}
      </div>
      <Footer></Footer>
      <FooterResp></FooterResp>
    </div>
  );
};

export default Exterieur;
