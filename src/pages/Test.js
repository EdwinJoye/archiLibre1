import "../css/test.css";
import HeaderGreen from "../components/HeaderGreen";

// console.log("TEST", exterieur[4].zooms);

const Test = ({ selectedId, setSelectedId }) => {
  return (
    <div>
      <HeaderGreen
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></HeaderGreen>
      <div>test</div>
    </div>
  );
};
export default Test;
