import MenuHome from "../components/MenuHome";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="homeDiv1">
      <MenuHome onOff={onOff} setOnOff={setOnOff}></MenuHome>
    </div>
  );
};
export default Home;
