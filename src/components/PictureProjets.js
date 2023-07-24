import OverlayCarousel from "../components/OverlayCarousel";
import "../css/pictureProjet.css";

const PictureProjet = ({
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
  pics,
  url,
  id,
  index,
  title,
  descriptionPic,
  className,
}) => {
  return (
    <div className="pictureProjet">
      {selectedPic !== null && (
        <OverlayCarousel
          pics={pics}
          isSelected={id === selectedId}
          selectedPic={selectedPic}
          onClick={() => {
            setSelectedId(null);
            setSelectedPic(null);
          }}
        ></OverlayCarousel>
      )}
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
            setSelectedPic(index);
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
