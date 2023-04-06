import Header from "../components/Header";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="homeDiv1 fadeIn">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="home___title">
        <span>Aman Othenin-Girard Architecte DPLG</span>
      </div>
    </div>
  );
};
export default Home;
