import { Link } from "react-router-dom";
import "../css/menuHome.css";

const MenuHome = () => {
  return (
    <div className="menu1">
      <Link to="/aboutme">
        <div>About Me</div>
      </Link>
      <Link to="/exterieur">
        <div>Extérieur</div>
      </Link>
      <Link to="/interieur">
        <div>Intérieur</div>
      </Link>
      <Link to="/decoameublement">
        <div>Décoration/Ameublement</div>
      </Link>
      <Link to="/plans">
        <div>Plans</div>
      </Link>
      <Link to="/croquis">
        <div>Croquis</div>
      </Link>
    </div>
  );
};

export default MenuHome;
