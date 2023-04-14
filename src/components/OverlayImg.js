import "../css/overlayImg.css";
import Croix from "../img/croixBlanche.svg";

const OverlayImg = ({ url, isSelected, onClick }) => {
  return (
    <div className={`invisible ${isSelected ? "visible" : ""}`}>
      <div className="overlayImg__box-img">
        <img
          className="croixCarouselOverlay"
          onClick={() => onClick()}
          src={Croix}
          alt="croix"
        />
        <img className="overlayImg__img" src={url} alt="" />
      </div>
    </div>
  );
};
export default OverlayImg;
