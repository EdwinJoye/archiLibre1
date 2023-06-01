import "../css/test.css";
// import HeaderGreen2 from "../components/HeaderGreen2";
// import Footer from "../components/Footer";
import HeaderGreenResp from "../components/HeaderGreenResp";

const Test = ({
  onOff,
  setOnOff,
  isOpenExt,
  setIsOpenExt,
  isOpenInt,
  setIsOpenInt,
}) => {
  return (
    <div className="test__container">
      {/* <HeaderGreen2></HeaderGreen2> */}
      <HeaderGreenResp
        onOff={onOff}
        setOnOff={setOnOff}
        isOpenExt={isOpenExt}
        setIsOpenExt={setIsOpenExt}
        isOpenInt={isOpenInt}
        setIsOpenInt={setIsOpenInt}
      ></HeaderGreenResp>
    </div>
  );
};
export default Test;
