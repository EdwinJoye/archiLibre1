import "../css/test.css";
// import PhotoTest from "../img/test.jpg";
const Test2 = ({ data }) => {
  return (
    <div>
      <div className="category__container-1 container">
        <div className="categories__all-container-1">
          <div className="categories__number-container-category2">
            <p>{data.number}</p>
          </div>
          <div className="categories__title-container-category2">
            <h2>{data.title}</h2>
          </div>
        </div>
      </div>
      <div className="category__container-2 container">
        <div className="categories__all-container-2">
          <div className="categories__texte-button-container-category2">
            <p className="categories__texte">{data.texte}</p>
            <span className="categories__button">LIRE LA SUITE</span>
          </div>
          <div
            className={
              data.picFormat === "horizontal-L"
                ? "categories__picture-overlay-background-container-category2-L"
                : "categories__picture-overlay-background-container-category2-M"
            }
          >
            <img
              className="categories__picture"
              src={data.mainUrl}
              alt="mainUrlPic"
            />
            <div className="categories__overlay">
              <p>{data.title}</p>
              <p>{data.date}</p>
            </div>
            <div className="categories__background-category2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test2;
