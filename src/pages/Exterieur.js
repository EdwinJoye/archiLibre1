import Header from "../components/Header";
import "../css/exterieur.css";
import { exterieur } from "../data/exterieur";

const Exterieur = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {exterieur.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div className="imgTexteExterieur">
                <img src={data.mainUrl} alt="exterieur" />
                <div>{data.texte}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exterieur;
