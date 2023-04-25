import "../css/overlayImg.css";

const OverlayImg = ({ url, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`invisible ${isSelected ? "visible" : ""}`}
    >
      <div className="overlayImg__box-img">
        <img className="overlayImg__img" src={url} alt="overlayImg" />
      </div>
    </div>
  );
};
export default OverlayImg;
