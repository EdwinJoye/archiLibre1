import "../css/decoAmeublement.css";

const DecoAmeublement = ({ item }) => {
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.descriptionPic}</p>
      <img className="decoAmeublement__img" src={item.url} alt="" />
    </div>
  );
};
export default DecoAmeublement;
