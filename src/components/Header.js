import { Link } from "react-router-dom";
import "../css/header.css";
import SignatureBlanche from "../img/signatureBlanche.png";
import SignatureNoire from "../img/signatureNoire.png";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className={onOff === 1 ? "headerDivBlanc container" : "headerDivNoir"}>
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <img
          to="/"
          className="headerSignatureBlanche"
          src={SignatureBlanche}
          alt="blanche"
        />
        <img
          to="/"
          className="headerSignatureNoire"
          src={SignatureNoire}
          alt="noire"
        />
      </Link>
      <Link
        to="/exterieur"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className={onOff === 2 ? "header1Border" : "headerBox"}>
          <span>E</span>
          <span className="transLetters">XTERIEURS</span>
        </div>
      </Link>
      <Link
        to="/interieur"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className={onOff === 3 ? "header1Border" : "headerBox"}>
          <span>I</span>
          <span className="transLetters">NTERIEURS</span>
        </div>
      </Link>
      <Link
        to="/aboutme"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className={onOff === 4 ? "header1Border" : "headerBox"}>
          <span>A </span>
          <span>P</span>
          <span className="transLetters">ROPOS</span>
        </div>
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className={onOff === 5 ? "header1Border" : "headerBox"}>
          <span>C</span>
          <span className="transLetters">ONTACT</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
