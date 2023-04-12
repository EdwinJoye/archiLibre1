import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import "../css/projet.css";

const Projet = () => {
  const location = useLocation();
  const title = location.state.data.title;
  const img = location.state.data.mainUrl;
  const description = location.state.data.texte;

  // console.log(location);
  return (
    <div className="container">
      <Header></Header>
      <div>
        <p>{title}</p>
        <img className="projet__img" src={img} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Projet;
