import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import OverlayImg from "../components/OverlayImg";
import "../css/projetExterieur.css";

const ProjetExterieur = ({ onOff, setOnOff }) => {
  const [selectedId, setSelectedId] = useState(null);
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <div className="container">
        {console.log(data.categories)}
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
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
                        <img
                          onClick={() => {
                            setSelectedId(pics.id);
                          }}
                          className="projetExterieur__img"
                          src={pics.url}
                          alt=""
                        />
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
      <Footer></Footer>
    </div>
  );
};

export default ProjetExterieur;
