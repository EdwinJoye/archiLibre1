import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import "../css/projetExterieur.css";

const ProjetExterieur = ({ onOff, setOnOff }) => {
  let location = useLocation();
  const title = location.state.data.title;
  const img = location.state.data.mainUrl;
  const description = location.state.data.texte;
  // const onOff = location.state.onOff;
  // const setOnOff = location.state.onOff;

  console.log(location.state.setOnOff);
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        <p>{title}</p>
        <img className="projet__img" src={img} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjetExterieur;
