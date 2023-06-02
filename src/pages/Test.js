import "../css/test.css";
import HeaderGreenResp from "../components/HeaderGreenResp";

const Test = ({ onOff, setOnOff }) => {
  return (
    <div className="test__container">
      <HeaderGreenResp onOff={onOff} setOnOff={setOnOff}></HeaderGreenResp>
      <div className="testOui">HELLOO</div>
      <div className="testNon">HELLOO</div>
      <div className="testOui">HELLOO</div>
      <div className="testNon">HELLOO</div>
      <div className="testOui">HELLOO</div>
      <div className="testNon">HELLOO</div>
      <div className="testOui">HELLOO</div>
      <div className="testNon">HELLOO</div>
      <div className="testOui">HELLOO</div>
      <div className="testNon">HELLOO</div>
    </div>
  );
};
export default Test;
