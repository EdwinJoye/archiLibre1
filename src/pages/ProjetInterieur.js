import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import "../css/projetInterieur.css";

const ProjetInterieur = ({ onOff, setOnOff }) => {
  let location = useLocation();

  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      {location.state.data.diapos.map((item, key) => {
        return (
          <div>
            <p>{item.title}</p>
            <p>{item.descriptionPic}</p>
            <img className="projetInterieur__img" src={item.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ProjetInterieur;
