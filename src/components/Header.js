import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import "../css/header.css";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className={onOff === 1 ? "header__transparent" : "header__green"}>
      <div className="header__buttons-container-1">
        {/* /////////////////////// EXTERIEURS /////////////////////// */}
        <div className="header__dropdown">
          <Link
            className="header__box-link"
            to="/exterieur"
            onClick={() => {
              setOnOff((onOff = 2));
            }}
          >
            <div className="header__button">
              <span>EXTÉRIEURS</span>
              <div
                className={
                  onOff === 2 ? "header__underline" : "header__underline-2"
                }
              ></div>
            </div>
          </Link>
          <div class="header__dropdown-content">
            {exterieurData.map((data) => {
              return (
                <div>
                  <Link to={data.link} state={{ data: data }}>
                    <div className="little__button">{data.btnName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* /////////////////////// INTERIEURS /////////////////////// */}
        <div className="header__dropdown">
          <Link
            className="header__box-link"
            to="/interieur"
            onClick={() => {
              setOnOff((onOff = 3));
            }}
          >
            <div className="header__button">
              <span>INTÉRIEURS</span>
              <div
                className={
                  onOff === 3 ? "header__underline" : "header__underline-2"
                }
              ></div>
            </div>
          </Link>
          <div class="header__dropdown-content">
            {interieurData.map((data) => {
              return (
                <div>
                  <Link to={data.link} state={{ data: data }}>
                    <div className="little__button">{data.btnName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <img
          className="header__signature"
          to="/"
          src={SignatureBlanche}
          alt="blanche"
        />
      </Link>
      <div className="header__buttons-container-2">
        {/* /////////////////////// A PROPOS /////////////////////// */}

        <Link
          className="header__box-link"
          to="/aboutme"
          onClick={() => {
            setOnOff((onOff = 4));
          }}
        >
          <div className="header__button">
            <span>À PROPOS</span>
            <div
              className={
                onOff === 4 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
        {/* /////////////////////// CONTACT /////////////////////// */}
        <Link
          className="header__box-link"
          to="/contact"
          onClick={() => {
            setOnOff((onOff = 5));
          }}
        >
          <div className="header__button">
            <span>CONTACT</span>
            <div
              className={
                onOff === 5 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
