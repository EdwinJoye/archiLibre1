import "../css/title.css";

const Title = ({ title }) => {
  return (
    <div className="title__container-all">
      <div className="title__date-container">
        <h2>{title}</h2>
        <div className="title__underline"></div>
      </div>
      <div className="title__background"></div>
    </div>
  );
};

export default Title;
