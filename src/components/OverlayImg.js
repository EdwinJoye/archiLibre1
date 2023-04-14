// import Croix from "../img/croixBlanche.svg";

import "../css/overlayImg.css";

const OverlayImg = ({ url, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`invisible ${isSelected ? "visible" : ""}`}
    >
      <div className="overlayImg__box-img">
        {/* <img
          className="croixCarouselOverlay"
          onClick={() => onClick()}
          src={Croix}
          alt="croix"
        /> */}
        <img className="overlayImg__img" src={url} alt="" />
      </div>
    </div>
  );
};
export default OverlayImg;
