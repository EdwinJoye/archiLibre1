import Header from "../components/Header";
import HeaderResp from "../components/HeaderResp";
import Footer from "../components/Footer";
import FooterResp from "../components/FooterResp";
import APropos from "../img/aPropos.jpg";
import "../css/aPropos.css";

const AboutMe = ({ isSelectedMenu, setIsSelectedMenu, isActive }) => {
  return (
    <div
      className={
        isSelectedMenu === true
          ? "aPropos-all-container limitedHeight fadeIn"
          : "aPropos-all-container fadeIn"
      }
    >
      <Header isActive={isActive}></Header>
      <HeaderResp
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
        isActive={isActive}
      ></HeaderResp>
      <div className="aPropos__txt-img-bg-container container">
        <div className="aPropos__texts-container">
          <h2>A.Othenin Girard</h2>
          <span>
            Architecte D.P.L.G. depuis 2007 Aman OTHENIN GIRARD a été formé a
            l’école d’architecture de Versailles, puis de La Villette. Il
            commence a travailler dans le cabinet EXTRA-MUROS ou il participe à
            des projets de TOYO ITO et de SANAA puis il rejoint l’agence
            MWARCHITECTURE ou il travail sur des projets de Bâtiments
            industriel. Installé à son compte depuis 2016 il fait de nombreux
            projet pour les particuliers de réaménagement, d’extension et de
            construction de maison et de petit immeuble de logement.
          </span>
        </div>
        <div className="aPropos__img-container">
          <img className="aPropos__img" src={APropos} alt="" />
          <div className="aPropos__bg"></div>
        </div>
      </div>
      <Footer></Footer>
      <FooterResp></FooterResp>
    </div>
  );
};

export default AboutMe;
