import MenuHome from "../components/MenuHome";
import "../css/home.css";
import { home } from "../data/home";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <div className="homeDiv">
        <MenuHome></MenuHome>
        <div>
          {home.map((data, key) => {
            return (
              <div>
                <img className="homeImg" src={data.mainUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
