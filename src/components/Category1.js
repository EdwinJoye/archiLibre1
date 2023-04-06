import "../css/categories.css";

const Category1 = ({ data, key }) => {
  return (
    <div key={key}>
      <div className="title-category1">{data.title}</div>
      <div className="img-texte-category">
        <div className="div-img-category">
          <img src={data.mainUrl} alt="pic" />
          <div className="imageOverlay">
            <div className="imageTitle">{data.title}</div>
            <div className="descriptionImage">{data.description}</div>
          </div>
        </div>
        <div className="texte-category">
          <p>{data.texte}</p>
        </div>
      </div>
    </div>
  );
};
export default Category1;
