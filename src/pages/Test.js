import "../css/test.css";
// import HeaderGreen2 from "../components/HeaderGreen2";
// import Footer from "../components/Footer";
import { useState } from "react";
import HeaderGreenResp from "../components/HeaderGreenResp";

const Test = ({
  onOff,
  setOnOff,
  isOpenExt,
  setIsOpenExt,
  isOpenInt,
  setIsOpenInt,
}) => {
  const [isSelectedTest, setIsSelectedTest] = useState(null);

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
        isSelectedTest={isSelectedTest}
        setIsSelectedTest={setIsSelectedTest}
      ></HeaderGreenResp>
    </div>
  );
};
export default Test;
