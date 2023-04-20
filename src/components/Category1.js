import { Link } from "react-router-dom";
import "../css/categories.css";

const Category1 = ({ data, onOff, setOnOff }) => {
  return (
    <div className="categories__container">
      <div className="catagories__bg-empty">
        <div className="container catagories__number-title-1-2">
          <div className="categories__number">
            <p>{data.number}</p>
          </div>
          <h2 className="categories__title">{data.title}</h2>
        </div>
      </div>
      <div className="container categories__img-description">
        <div className="categories__texte-1-green">
          <p>{data.descriptionUrl}</p>
          <Link
            to={data.link}
            state={{ data: data }}
            onClick={() => {
              setOnOff((onOff = 0));
            }}
          >
            <span className="categories__texte-button-grey">LIRE LA SUITE</span>
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
          <div className="categories__img-mainUrl">
            <img src={data.mainUrl} alt="pic" />
            <div className="categories__background-C5"></div>
          </div>
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
