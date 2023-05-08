import "../css/test.css";
import HeaderGreen1 from "../components/HeaderGreen1";

// console.log("TEST", exterieur[4].zooms);

const Test = ({ selectedId, setSelectedId }) => {
  return (
    <div>
      <HeaderGreen1
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></HeaderGreen1>
      <div>test</div>
    </div>
  );
};
export default Test;
