import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import { useLocation } from "react-router-dom";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import "../css/header.css";

const Header = ({ isActive }) => {
  const location = useLocation();
  const isTransparent = location.pathname === "/";

  return (
    <div className={isTransparent ? "header__transparent" : "header__green"}>
      <div className="header__buttons-container-1">
        {/* /////////////////////// EXTERIEURS /////////////////////// */}
        <div className="header__dropdown">
          <Link className="header__box-link" to="/exterieur">
            <div className="header__button">
              <span>EXTÉRIEURS</span>
              <div
                className={
                  isActive === 2 ? "header__underline" : "header__underline-2"
                }
              ></div>
            </div>
          </Link>
          <div className={isActive === 6 ? "block" : "none"}>
            <div className="header__dropdown-content">
              {exterieurData.map((data) => {
                return (
                  <div key={data.id}>
                    <Link to={data.link} state={{ data: data }}>
                      <div className="little__button">{data.btnName}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* /////////////////////// INTERIEURS /////////////////////// */}
        <div className="header__dropdown">
          <Link className="header__box-link" to="/interieur">
            <div className="header__button">
              <span>INTÉRIEURS</span>
              <div
                className={
                  isActive === 3 ? "header__underline" : "header__underline-2"
                }
              ></div>
            </div>
          </Link>

          <div className={isActive === 6 ? "block" : "none"}>
            <div className="header__dropdown-content">
              {interieurData.map((data) => {
                return (
                  <div key={data.id}>
                    <Link to={data.link} state={{ data: data }}>
                      <div className="little__button">{data.btnName}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <img
          className="header__signature"
          to="/"
          src={SignatureBlanche}
          alt="blanche"
        />
      </Link>
      <div className="header__buttons-container-2">
        {/* /////////////////////// A PROPOS /////////////////////// */}

        <Link className="header__box-link" to="/apropos">
          <div className="header__button">
            <span>À PROPOS</span>
            <div
              className={
                isActive === 4 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
        {/* /////////////////////// CONTACT /////////////////////// */}
        <Link className="header__box-link" to="/contact">
          <div className="header__button">
            <span>CONTACT</span>
            <div
              className={
                isActive === 5 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
