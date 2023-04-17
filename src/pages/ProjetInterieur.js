import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Amenagement from "../components/Amenagement";
import DecoAmeublement from "../components/DecoAmeublement";

const ProjetInterieur = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  let location = useLocation();
  const category = location.state.data.category;

  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      {location.state.data.diapos.map((item, key) => {
        if (category === "Amenagement") {
          return (
            <div key={key}>
              <Amenagement
                onOff={onOff}
                setOnOff={setOnOff}
                item={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              ></Amenagement>
            </div>
          );
        } else {
          return (
            <div key={key}>
              <DecoAmeublement
                onOff={onOff}
                setOnOff={setOnOff}
                item={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              ></DecoAmeublement>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProjetInterieur;
