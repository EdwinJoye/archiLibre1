import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import "../css/header.css";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className="header">
      <div className="header__buttons-container-1">
        <Link
          to="/exterieur"
          onClick={() => {
            setOnOff((onOff = 2));
          }}
        >
          <div className="headerBox">
            <span>EXTERIEURS</span>
            <div
              className={onOff === 2 ? "headerUnderline" : "headerUnderline2"}
            ></div>
          </div>
        </Link>
        <Link
          to="/interieur"
          onClick={() => {
            setOnOff((onOff = 3));
          }}
        >
          <div className="headerBox">
            <span>INTERIEURS</span>
            <div
              className={onOff === 3 ? "headerUnderline" : "headerUnderline2"}
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
          to="/aboutme"
          onClick={() => {
            setOnOff((onOff = 4));
          }}
        >
          <div className="headerBox">
            <span>A PROPOS</span>
            <div
              className={onOff === 4 ? "headerUnderline" : "headerUnderline2"}
            ></div>
          </div>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            setOnOff((onOff = 5));
          }}
        >
          <div className="headerBox">
            <span>CONTACT</span>
            <div
              className={onOff === 5 ? "headerUnderline" : "headerUnderline2"}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
