import OverlayImg from "./OverlayImg";
import "../css/decoAmeublement.css";

const DecoAmeublement = ({ item, selectedId, setSelectedId }) => {
  return (
    <div>
      <OverlayImg
        url={item.url}
        isSelected={item.id === selectedId}
        onClick={() => {
          setSelectedId(null);
        }}
      ></OverlayImg>
      <p>{item.title}</p>
      <p>{item.descriptionPic}</p>
      <img
        onClick={() => {
          setSelectedId(item.id);
        }}
        className="decoAmeublement__img"
        src={item.url}
        alt=""
      />
    </div>
  );
};
export default DecoAmeublement;
