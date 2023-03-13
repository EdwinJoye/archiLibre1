import { Link } from "react-router-dom";
import "../css/header.css";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className="headerDiv">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link
        to="/aboutme"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <div className={onOff === 1 ? "header1Border1" : ""}>About Me</div>
      </Link>
      <Link
        to="/exterieur"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className={onOff === 2 ? "header1Border2" : ""}>Extérieur</div>
      </Link>
      <Link
        to="/interieur"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className={onOff === 3 ? "header1Border3" : ""}>Intérieur</div>
      </Link>
      <Link
        to="/croquis"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className={onOff === 4 ? "header1Border4" : ""}>croquis</div>
      </Link>
      <Link
        to="/decoameublement"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className={onOff === 5 ? "header1Border5" : ""}>
          Déco/ameublement
        </div>
      </Link>
      <Link
        to="/plans"
        onClick={() => {
          setOnOff((onOff = 6));
        }}
      >
        <div className={onOff === 6 ? "header1Border6" : ""}>Plans</div>
      </Link>
    </div>
  );
};

export default Header;
