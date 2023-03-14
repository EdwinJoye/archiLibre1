import Header from "../components/Header";
import "../css/interieur.css";
import { interieur } from "../data/interieur";

const Interieur = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {interieur.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div className="imgTexteIntérieur">
                <img src={data.mainUrl} alt="" />
                <div>{data.texte}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interieur;
