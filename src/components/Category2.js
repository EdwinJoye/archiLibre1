import { Link } from "react-router-dom";
import "../css/categories.css";

const Category2 = ({ data, onOff, setOnOff }) => {
  const myClassSize =
    data.picFormat === "horizontal-L"
      ? "categories__texte-button-container-category2-M"
      : "categories__texte-button-container-category2-L";
  let myClassColorTextBG =
    data.cssAllBG === "grey"
      ? "categories__text-background-green"
      : "categories__text-background-grey";

  return (
    <div
      className={
        data.position === "last"
          ? "categories__container-last"
          : "categories__container"
      }
    >
      <div
        className={
          data.cssAllBG === "grey"
            ? "categories__bg-diago-grey"
            : "categories__bg-diago-green"
        }
      >
        <div className="category__container">
          <div className="categories__all-container-1 container">
            <div className="categories__number-container-category2">
              <p>{data.number}</p>
            </div>
            <div className="categories__title-container-category2">
              <h2
                className={
                  data.cssAllBG === "darkGreen"
                    ? "categories__title-beige"
                    : "categories__title-green"
                }
              >
                {data.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          data.cssAllBG === "grey"
            ? "categories__all-background-grey"
            : "categories__all-background-green"
        }
      >
        <div className="category__container-2 container">
          <div className="categories__all-container-2">
            <div className={`${myClassSize} ${myClassColorTextBG}`}>
              <p className="categories__texte">{data.descriptionUrl}</p>
              <Link
                to={data.link}
                state={{ data: data }}
                onClick={() => {
                  setOnOff((onOff = 0));
                }}
              >
                <span className="categories__button">LIRE LA SUITE</span>
              </Link>
            </div>
            <Link
              to={data.link}
              state={{ data: data }}
              onClick={() => {
                setOnOff((onOff = 0));
              }}
            >
              <div
                className={
                  data.picFormat === "horizontal-L"
                    ? "categories__picture-overlay-background-container-category2-L"
                    : "categories__picture-overlay-background-container-category2-M"
                }
              >
                <div className="categories__picture">
                  <img src={data.mainUrl} alt="mainUrlPic" />
                </div>
                <div className="categories__overlay">
                  <h5>{data.title}</h5>
                  <div className="categories__underline"></div>
                  <p>{data.date}</p>
                </div>
                <div className="categories__background-category2"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category2;
