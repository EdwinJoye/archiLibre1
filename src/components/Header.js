import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import "../css/header.css";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className={onOff === 1 ? "header__transparent" : "header__green"}>
      <div className="header__buttons-container-1">
        <Link
          className="header__box-link"
          to="/exterieur"
          onClick={() => {
            setOnOff((onOff = 2));
          }}
        >
          <div className="headerBox">
            <span>EXTÉRIEURS</span>
            <div
              className={
                onOff === 2 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
        <Link
          className="header__box-link"
          to="/interieur"
          onClick={() => {
            setOnOff((onOff = 3));
          }}
        >
          <div className="headerBox">
            <span>INTÉRIEURS</span>
            <div
              className={
                onOff === 3 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
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
        <Link
          className="header__box-link"
          to="/aboutme"
          onClick={() => {
            setOnOff((onOff = 4));
          }}
        >
          <div className="headerBox">
            <span>À PROPOS</span>
            <div
              className={
                onOff === 4 ? "header__underline" : "header__underline-2"
              }
            ></div>
          </div>
        </Link>
        <Link
          className="header__box-link"
          to="/contact"
          onClick={() => {
            setOnOff((onOff = 5));
          }}
        >
          <div className="headerBox">
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
