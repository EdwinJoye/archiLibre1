// import MenuHome from "../components/MenuHome";
import Header from "../components/Header";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="homeDiv1">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      {/* <MenuHome onOff={onOff} setOnOff={setOnOff}></MenuHome> */}
    </div>
  );
};
export default Home;
