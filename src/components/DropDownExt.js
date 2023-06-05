import { Link } from "react-router-dom";
import "../css/header.css";

const DropdownExt = ({ data }) => {
  return (
    <div className="header__dropdown-content">
      {console.log("DATA DROPDOWN", data)}
      {/* {exterieurData.map((data) => {
        return (
          <div key={data.id}>
            <Link to={data.link} state={{ data: data }}>
              <div className="little__button">{data.btnName}</div>
            </Link>
          </div>
        );
      })} */}

      <Link to="/projetexterieursmall" state={{ item: data }}>
        <div className="little__button">CelleSaintCloud</div>
      </Link>
    </div>
  );
};

export default DropdownExt;
