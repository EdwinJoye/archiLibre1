import { Link } from "react-router-dom";
import "../css/menuHome.css";

const MenuHome = ({ onOff, setOnOff }) => {
  return (
    <div className="menu1">
      <Link to="/aboutme">
        <div
          className="btnMenuHome"
          onClick={() => {
            setOnOff((onOff = 1));
          }}
        >
          About Me
        </div>
      </Link>
      <Link
        to="/exterieur"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className="btnMenuHome">Extérieur</div>
      </Link>
      <Link
        to="/interieur"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className="btnMenuHome">Intérieur</div>
      </Link>
      <Link
        to="/croquis"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className="btnMenuHome">Croquis</div>
      </Link>
      <Link
        to="/decoameublement"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className="btnMenuHome">
          Décoration & <br />
          Aumeublement
        </div>
      </Link>
      <Link
        to="/plans"
        onClick={() => {
          setOnOff((onOff = 6));
        }}
      >
        <div className="btnMenuHome">Plans</div>
      </Link>
    </div>
  );
};

export default MenuHome;
