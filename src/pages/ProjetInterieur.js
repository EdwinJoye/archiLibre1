import HeaderGreen from "../components/HeaderGreen2";
import { useLocation } from "react-router-dom";
import Amenagement from "../components/Amenagement";
import DecoAmeublement from "../components/DecoAmeublement";
import Footer from "../components/Footer";

const ProjetInterieur = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  let location = useLocation();
  const category = location.state.data.category;

  return (
    <div>
      <HeaderGreen onOff={onOff} setOnOff={setOnOff}></HeaderGreen>
      <div className="container fadeIn">
        {location.state.data.diapos.map((item, key) => {
          if (category === "Amenagement") {
            return (
              <div key={key}>
                <Amenagement
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
                  item={item}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                ></DecoAmeublement>
              </div>
            );
          }
        })}
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetInterieur;
