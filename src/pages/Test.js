import "../css/test.css";
import HeaderGreenResp from "../components/HeaderGreenResp";
import HeaderGreen2 from "../components/HeaderGreen2";

const Test = ({
  onOff,
  setOnOff,
  selectedPage,
  setSelectedPage,
  setIsSelectedMenu,
  isSelectedMenu,
}) => {
  return (
    <div className={isSelectedMenu === "principal-menu" ? "backgroundRed" : ""}>
      {/* {console.log("TEST SELECTED MENU", isSelectedMenu)} */}
      <HeaderGreen2
        onOff={onOff}
        setOnOff={setOnOff}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></HeaderGreen2>
      <HeaderGreenResp
        onOff={onOff}
        setOnOff={setOnOff}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HeaderGreenResp>
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
