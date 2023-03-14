import { Link } from "react-router-dom";
import "../css/menuHome.css";

const MenuHome = () => {
  return (
    <div className="menu1">
      <Link to="/aboutme">
        <div className="btnMenuHome">About Me</div>
      </Link>
      <Link to="/exterieur">
        <div className="btnMenuHome">Extérieur</div>
      </Link>
      <Link to="/interieur">
        <div className="btnMenuHome">Intérieur</div>
      </Link>
      <Link to="/decoameublement">
        <div className="btnMenuHome">
          Décoration & <br />
          Aumeublement
        </div>
      </Link>
      <Link to="/plans">
        <div className="btnMenuHome">Plans</div>
      </Link>
      <Link to="/croquis">
        <div className="btnMenuHome">Croquis</div>
      </Link>
    </div>
  );
};

export default MenuHome;
