import { Link } from "react-router-dom";
import "../css/categories.css";

const Category2 = ({ data, onOff, setOnOff }) => {
  return (
    <div>
      <div
        className={
          data.css === "grey"
            ? "catagories__bg-diago-grey"
            : "catagories__bg-diago-green"
        }
      >
        <div className="container catagories__number-title-2-2">
          <div className="categories__number">
            <p>{data.number}</p>
          </div>
          <h2 className="categories__title">{data.title}</h2>
        </div>
      </div>
      <div
        className={
          data.css === "grey"
            ? "catagories__background-grey"
            : "catagories__background-green"
        }
      >
        <div className="container categories__img-description">
          <div
            className={
              data.css === "grey"
                ? "categories__texte-2-green"
                : "categories__texte-2-grey"
            }
          >
            <p>{data.descriptionUrl}</p>
            <Link
              to={data.link}
              state={{ data: data }}
              onClick={() => {
                setOnOff((onOff = 0));
              }}
            >
              <span
                className={
                  data.css === "grey"
                    ? "categories__texte-button-grey"
                    : "categories__texte-button-green"
                }
              >
                LIRE LA SUITE
              </span>
            </Link>
          </div>
          <Link
            to={data.link}
            state={{ data: data }}
            className="categories__img-container-2"
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
    </div>
  );
};

export default Category2;
