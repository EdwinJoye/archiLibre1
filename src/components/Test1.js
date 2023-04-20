import "../css/test.css";

const Test1 = ({ data }) => {
  return (
    <div className="categories__container">
      <div className="category__container container">
        <div className="categories__all-container-1">
          <div className="categories__number-container-category1">
            <p>{data.number}</p>
          </div>
          <div className="categories__title-container-category1">
            <h2>{data.title}</h2>
          </div>
        </div>
      </div>
      <div className="category__container-2 container">
        <div className="categories__all-container-2">
          <div
            className={
              data.picFormat === "horizontal-L"
                ? "categories__texte-button-container-category1-M"
                : "categories__texte-button-container-category1-L"
            }
          >
            <p className="categories__texte">{data.texte}</p>
            <span className="categories__button">LIRE LA SUITE</span>
          </div>
          <div
            className={
              data.picFormat === "horizontal-L"
                ? "categories__picture-overlay-background-container-category1-L"
                : "categories__picture-overlay-background-container-category1-M"
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
            <div className="categories__background-category1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test1;