import { Link } from "react-router-dom";
import "../css/categories.css";

const Category1 = ({ data, onOff, setOnOff }) => {
  return (
    <div>
      <div className="title-category1">{data.title}</div>
      <div className="img-texte-category">
        <Link
          to={data.link}
          state={{ data: data }}
          className="div-img-category"
          onClick={() => {
            setOnOff((onOff = 0));
          }}
        >
          <img src={data.mainUrl} alt="pic" />
          <div className="imageOverlay">
            <div className="imageTitle">{data.title}</div>
            <div className="descriptionImage">{data.date}</div>
          </div>
        </Link>
        <div className="texte-category">
          <p>{data.descriptionUrl}</p>
        </div>
      </div>
    </div>
  );
};
export default Category1;
