import "../css/overlayImg.css";

const OverlayImg = ({ url, selectedId, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`invisible ${selectedId ? "visible" : ""}`}
    >
      <div className="overlayImg__box-img">
        <img className="overlayImg__img" src={url} alt="overlayImg" />
      </div>
    </div>
  );
};
export default OverlayImg;
