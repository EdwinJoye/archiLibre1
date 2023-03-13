import Header from "../components/Header";
import "../css/plans.css";

const Plans = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>Plans</div>
    </div>
  );
};

export default Plans;
