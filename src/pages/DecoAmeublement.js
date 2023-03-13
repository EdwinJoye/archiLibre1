import Header from "../components/Header";
import "../css/decoAmeublement.css";

const DecoAmeublement = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>Déco/Ameublement</div>
    </div>
  );
};
export default DecoAmeublement;
