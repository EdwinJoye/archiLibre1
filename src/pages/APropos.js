import Header from "../components/Header";
import HeaderResp from "../components/HeaderResp";
import Footer from "../components/Footer";
import FooterResp from "../components/FooterResp";
import APropos from "../img/aPropos.jpg";
import "../css/aPropos.css";

const AboutMe = ({ isSelectedMenu, isActive }) => {
  return (
    <div
      className={
        isSelectedMenu === true ? "relative limitedHeight" : "relative"
      }
    >
      <Header isActive={isActive}></Header>
      <HeaderResp isActive={isActive}></HeaderResp>
      <div className="aPropos__txt-img-bg-container container">
        <div>
          <img className="aPropos__img" src={APropos} alt="" />
          <div className="aPropos__bg"></div>
        </div>
        <span>
          Architecte D.P.L.G. depuis 2007 Aman OTHENIN GIRARD a été formé a
          l’école d’architecture de Versailles, puis de La Villette. Il commence
          a travailler dans le cabinet EXTRA-MUROS ou il participe à des projets
          de TOYO ITO et de SANAA puis il rejoint l’agence MWARCHITECTURE ou il
          travail sur des projets de Bâtiments industriel. Installé à son compte
          depuis 2016 il fait de nombreux projet pour les particuliers de
          réaménagement, d’extension et de construction de maison et de petit
          immeuble de logement.
        </span>
      </div>
      <div className="footer">
        <Footer></Footer>
        <FooterResp></FooterResp>
      </div>
    </div>
  );
};

export default AboutMe;
