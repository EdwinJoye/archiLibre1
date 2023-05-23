import "../css/title.css";

const Title = ({ title, cssBackground, cssTexte, cssUnderline }) => {
  return (
    <div className="title__container-all">
      <div className="title__date-container">
        <h2 className={cssTexte}>{title}</h2>
        <div className={`title__underline ${cssUnderline}`}></div>
      </div>
      <div className={`title__background ${cssBackground}`}></div>
    </div>
  );
};

export default Title;
