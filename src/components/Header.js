import { Link } from "react-router-dom";
import "../css/header.css";
import SignatureBlanche from "../img/signatureBlanche.png";
import SignatureNoire from "../img/signatureNoire.png";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className={onOff === 0 ? "headerDivBlanc container" : "headerDivNoir"}>
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 0));
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
        to="/aboutme"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <div className={onOff === 1 ? "header1Border1" : "headerBox"}>
          <span>A</span>
          <span className="transLetters">BOUT </span>
          <span>M</span>
          <span className="transLetters">E</span>
        </div>
      </Link>
      <Link
        to="/exterieur"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className={onOff === 2 ? "header1Border2" : "headerBox"}>
          <span>E</span>
          <span className="transLetters">XTERIEUR</span>
        </div>
      </Link>
      <Link
        to="/interieur"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className={onOff === 3 ? "header1Border3" : "headerBox"}>
          <span>I</span>
          <span className="transLetters">NTERIEUR</span>
        </div>
      </Link>
      <Link
        to="/croquis"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className={onOff === 4 ? "header1Border4" : "headerBox"}>
          <span>C</span>
          <span className="transLetters">ROQUIS</span>
        </div>
      </Link>
      <Link
        to="/decoameublement"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className={onOff === 5 ? "header1Border5" : "headerBox"}>
          <span>D</span>
          <span className="transLetters">ECO </span>
          <span>& </span>
          <span>A</span>
          <span className="transLetters">MEUBLEMENT</span>
        </div>
      </Link>
      <Link
        to="/plans"
        onClick={() => {
          setOnOff((onOff = 6));
        }}
      >
        <div className={onOff === 6 ? "header1Border6" : "headerBox"}>
          <span>P</span>
          <span className="transLetters">LANS</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
