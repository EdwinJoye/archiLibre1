import OverlayImg from "./OverlayImg";
import "../css/pictureProjet.css";

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
            ? "pictureProjet__pics-overlay-container2"
            : "pictureProjet__pics-overlay-container1"
        }
      >
        <img
          src={url}
          onClick={() => {
            setSelectedId(id);
          }}
          alt="img2"
        />
        <div className="pictureProjet__overlay">
          <div className="pictureProjet__outline">
            <div className="pictureProjet__overlay-title-underline">
              <h5>{title}</h5>
              <div className="pictureProjet__underline"></div>
            </div>
            <p>{descriptionPic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PictureProjet;
