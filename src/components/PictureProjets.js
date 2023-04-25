import "../css/projetClamart.css";
import OverlayImg from "./OverlayImg";

const PictureProjet = ({
  selectedId,
  setSelectedId,
  url,
  id,
  title,
  descriptionPic,
  className,
}) => {
  return (
    <div>
      <OverlayImg
        url={url}
        isSelected={id === selectedId}
        onClick={() => {
          setSelectedId(null);
        }}
      ></OverlayImg>
      <div
        className={
          className === "padding-bottom"
            ? "projetClamart__pics-overlay-container2"
            : "projetClamart__pics-overlay-container1"
        }
      >
        <img
          src={url}
          onClick={() => {
            setSelectedId(id);
          }}
          alt="img2"
        />

        <div className="projetClamart__overlay">
          <div className="projetClamart__overlay-title-underline">
            <h5>{title}</h5>
            <div className="projetClamart__underline"></div>
          </div>
          <p>{descriptionPic}</p>
        </div>
      </div>
    </div>
  );
};
export default PictureProjet;
