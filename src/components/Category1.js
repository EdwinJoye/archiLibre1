import { Link } from "react-router-dom";
import "../css/categories.css";

const Category1 = ({ data, onOff, setOnOff }) => {
  return (
    <div>
      <div className="catagories__number-title">
        <p className="categories__number">{data.number}</p>
        <h2 className="categories__title">{data.title}</h2>
      </div>
      <div className="categories__img-description">
        <div className="categories__texte-1">
          <p>{data.descriptionUrl}</p>
          <Link
            to={data.link}
            state={{ data: data }}
            onClick={() => {
              setOnOff((onOff = 0));
            }}
          >
            <span className="categories__texte-button">LIRE LA SUITE</span>
          </Link>
        </div>
        <Link
          to={data.link}
          state={{ data: data }}
          className="categories__img-container-1"
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
      </div>
    </div>
  );
};
export default Category1;
