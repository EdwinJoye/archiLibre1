import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import "../css/projetExterieur.css";

const ProjetExterieur = ({ onOff, setOnOff }) => {
  let location = useLocation();
  const data = location.state.data;

  return (
    <div className="container">
      {console.log(data.categories)}
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {data.categories.map((item, key) => {
          return (
            <div key={key}>
              {item.pics.map((pics, key) => {
                return (
                  <div key={key}>
                    <h1>{pics.title}</h1>
                    <p>{pics.descriptionPic}</p>
                    <img
                      className="projetExterieur__img"
                      src={pics.url}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjetExterieur;
