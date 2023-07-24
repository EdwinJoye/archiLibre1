import { Link } from "react-router-dom";
import "../css/header.css";

const DropdownExt = ({ data }) => {
  return (
    <div className="header__dropdown-content">
      <Link to="/projetexterieursmall" state={{ item: data }}>
        <div className="little__button">CelleSaintCloud</div>
      </Link>
    </div>
  );
};

export default DropdownExt;
