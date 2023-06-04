import "../css/test.css";
import HeaderResp from "../components/HeaderResp";
import Header from "../components/Header";

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
      <Header
        onOff={onOff}
        setOnOff={setOnOff}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Header>
      <HeaderResp
        onOff={onOff}
        setOnOff={setOnOff}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HeaderResp>
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
