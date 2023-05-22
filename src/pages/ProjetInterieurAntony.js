import HeaderGreen from "../components/HeaderGreen2";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import PictureProjet from "../components/PictureProjets";
import "../css/projetsInterieurs.css";

const ProjetInterieurAntony = ({
  onOff,
  setOnOff,
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
}) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <HeaderGreen onOff={onOff} setOnOff={setOnOff}></HeaderGreen>
      <div className="projetInterieur__container-1 container">
        <h2>{data.title}</h2>
        <span>{data.descriptionUrl}</span>
      </div>
      <div className="projetInterieur__container-2">
        <div className="projetInterieur__backgroundImg"></div>
        <div className="projetInterieur__2-img-container">
          <div className="projetIntAntony__img-container-1">
            <div className="marginB">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.sousCategories[0].pics}
                url={data.sousCategories[0].pics[0].url}
                id={data.sousCategories[0].pics[0].id}
                index={data.sousCategories[0].pics[0].index}
                title={data.sousCategories[0].pics[0].title}
                descriptionPic={data.sousCategories[0].pics[0].descriptionPic}
                className={data.sousCategories[0].pics[0].class}
              ></PictureProjet>
            </div>
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.sousCategories[0].pics}
              url={data.sousCategories[0].pics[1].url}
              id={data.sousCategories[0].pics[1].id}
              index={data.sousCategories[0].pics[1].index}
              title={data.sousCategories[0].pics[1].title}
              descriptionPic={data.sousCategories[0].pics[1].descriptionPic}
              className={data.sousCategories[0].pics[1].class}
            ></PictureProjet>
          </div>
          <div className="projetIntAntony__img-container-2">
            <div className="projetIntAntony__title-container">
              <div className="projetIntAntony__title-date">
                <h2>{data.sousCategories[0].title}</h2>
                <div className="projetIntAntony__titleUnderline"></div>
              </div>
              <div className="projetIntAntony__titleBackground"></div>
            </div>
            <div className="marginB">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.sousCategories[0].pics}
                url={data.sousCategories[0].pics[2].url}
                id={data.sousCategories[0].pics[2].id}
                index={data.sousCategories[0].pics[2].index}
                title={data.sousCategories[0].pics[2].title}
                descriptionPic={data.sousCategories[0].pics[2].descriptionPic}
                className={data.sousCategories[0].pics[2].class}
              ></PictureProjet>
            </div>
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.sousCategories[0].pics}
              url={data.sousCategories[0].pics[3].url}
              id={data.sousCategories[0].pics[3].id}
              index={data.sousCategories[0].pics[3].index}
              title={data.sousCategories[0].pics[3].title}
              descriptionPic={data.sousCategories[0].pics[3].descriptionPic}
              className={data.sousCategories[0].pics[3].class}
            ></PictureProjet>
          </div>
        </div>
        <div className="projetInterieur__3-img-container container">
          <div className="projetIntAntony__title-container">
            <div className="projetIntAntony__title-date">
              <h2>{data.sousCategories[1].title}</h2>
              <div className="projetIntAntony__titleUnderline"></div>
            </div>
            <div className="projetIntAntony__titleBackground"></div>
          </div>
          <div className="projetIntAntony__img-container-3">
            <div className="container-3-img1">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.sousCategories[1].pics}
                url={data.sousCategories[1].pics[0].url}
                id={data.sousCategories[1].pics[0].id}
                index={data.sousCategories[1].pics[0].index}
                title={data.sousCategories[1].pics[0].title}
                descriptionPic={data.sousCategories[1].pics[0].descriptionPic}
                className={data.sousCategories[1].pics[0].class}
              ></PictureProjet>
            </div>
            <div className="container-3-img2">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.sousCategories[1].pics}
                url={data.sousCategories[1].pics[1].url}
                id={data.sousCategories[1].pics[1].id}
                index={data.sousCategories[1].pics[1].index}
                title={data.sousCategories[1].pics[1].title}
                descriptionPic={data.sousCategories[1].pics[1].descriptionPic}
                className={data.sousCategories[1].pics[1].class}
              ></PictureProjet>
            </div>
            <div className="container-3-img3">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.sousCategories[1].pics}
                url={data.sousCategories[1].pics[2].url}
                id={data.sousCategories[1].pics[2].id}
                index={data.sousCategories[1].pics[2].index}
                title={data.sousCategories[1].pics[2].title}
                descriptionPic={data.sousCategories[1].pics[2].descriptionPic}
                className={data.sousCategories[1].pics[2].class}
              ></PictureProjet>
            </div>
          </div>
        </div>
        <div className="projetIntAntony__img-container-4 container">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={data.sousCategories[2].pics}
            url={data.sousCategories[2].pics[0].url}
            id={data.sousCategories[2].pics[0].id}
            index={data.sousCategories[2].pics[0].index}
            title={data.sousCategories[2].pics[0].title}
            descriptionPic={data.sousCategories[2].pics[0].descriptionPic}
            className={data.sousCategories[2].pics[0].class}
          ></PictureProjet>
          <div className="projetIntAntony__container4-right">
            <div className="projetIntAntony__title-container">
              <div className="projetIntAntony__title-date">
                <h2>{data.sousCategories[1].title}</h2>
                <div className="projetIntAntony__titleUnderline"></div>
              </div>
              <div className="projetIntAntony__titleBackground"></div>
            </div>
            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.sousCategories[2].pics}
              url={data.sousCategories[2].pics[1].url}
              id={data.sousCategories[2].pics[1].id}
              index={data.sousCategories[2].pics[1].index}
              title={data.sousCategories[2].pics[1].title}
              descriptionPic={data.sousCategories[2].pics[1].descriptionPic}
              className={data.sousCategories[2].pics[1].class}
            ></PictureProjet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjetInterieurAntony;
