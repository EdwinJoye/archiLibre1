import { Link } from "react-router-dom";
import "../css/categories.css";

const Category1 = ({ data, onOff, setOnOff }) => {
  return (
    <div className="categories__container">
      <div className="category__container">
        <div className="categories__all-container-1 container">
          <div className="categories__number-container-category1">
            <div className="categories__number-container">
              <p>{data.number}</p>
            </div>
            <div className="categories__title-container-category1">
              <h2>{data.title}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          data.picFormat === "horizontal-L"
            ? "category__container-2-L container"
            : "category__container-2-M container"
        }
      >
        <div className="categories__all-container-2">
          <div
            className={
              data.picFormat === "horizontal-L"
                ? "categories__texte-button-container-category1-M"
                : "categories__texte-button-container-category1-L"
            }
          >
            <p className="categories__texte">{data.descriptionUrl}</p>
            <Link
              to={data.link}
              state={{ data: data }}
              onClick={() => {
                setOnOff((onOff = 99));
              }}
            >
              <span className="categories__button">VOIR LA SUITE</span>
            </Link>
          </div>
          <Link
            to={data.link}
            state={{ data: data }}
            onClick={() => {
              setOnOff((onOff = 99));
            }}
          >
            <div
              className={
                data.picFormat === "horizontal-L"
                  ? "categories__picture-overlay-background-container-category1-L"
                  : "categories__picture-overlay-background-container-category1-M"
              }
            >
              <div className="categories__picture">
                <img src={data.mainUrl} alt="mainUrlPic" />
              </div>
              <div className="categories__overlay">
                <p className="categories__overlay-title">{data.title}</p>
                <div className="categories__underline"></div>
                <p>{data.date}</p>
              </div>
              <div className="categories__background-category1"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category1;
