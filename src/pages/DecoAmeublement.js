import Header from "../components/Header";
import "../css/decoAmeublement.css";
import { decoAmeublement } from "../data/decoAmeublement";

const DecoAmeublement = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>
        {decoAmeublement.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div className="imgTexteDecoAmeublement">
                <img src={data.mainUrl} alt="interieur" />
                <div>{data.texte}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DecoAmeublement;
