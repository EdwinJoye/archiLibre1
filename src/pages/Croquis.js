import Header from "../components/Header";
import "../css/croquis.css";
import { croquis } from "../data/croquis";

const Croquis = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div>Croquis</div>
      <div>
        {croquis.map((data, key) => {
          return (
            <div>
              <div>{data.title}</div>
              <img src={data.mainUrl} alt="croquis" />
              <div>{data.texte}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Croquis;
