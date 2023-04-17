import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import OverlayImg from "../components/OverlayImg";
import "../css/projetExterieur.css";

const ProjetExterieur = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container">
        <div>
          {data.categories.map((item, key) => {
            return (
              <div key={key}>
                {item.pics.map((pics, key) => {
                  return (
                    <div key={key}>
                      <OverlayImg
                        url={pics.url}
                        isSelected={pics.id === selectedId}
                        onClick={() => {
                          setSelectedId(null);
                        }}
                      ></OverlayImg>
                      <h1>{pics.title}</h1>
                      <div className="projetExterieur__img-p">
                        <div className="projetExterieur__img-container">
                          <img
                            className="projetExterieur__img"
                            onClick={() => {
                              setSelectedId(pics.id);
                            }}
                            src={pics.url}
                            alt="projetExterieur-img"
                          />
                        </div>

                        <p>{pics.descriptionPic}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetExterieur;
