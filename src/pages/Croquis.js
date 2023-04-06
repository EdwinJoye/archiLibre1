import Header from "../components/Header";
import Footer from "../components/Footer";
import Category1 from "../components/Category1";
import Category2 from "../components/Category2";
import { croquis } from "../data/croquis";
import "../css/croquis.css";

const Croquis = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="container">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div>Croquis</div>
        <div>
          {croquis.map((data, key) => {
            if (data.class === "croquis1") {
              return <Category1 data={data} key={key}></Category1>;
            } else {
              return <Category2 data={data} key={key}></Category2>;
            }
          })}
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Croquis;
