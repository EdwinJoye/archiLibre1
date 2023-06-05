import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import HeaderResp from "../../components/HeaderResp";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import PictureProjet from "../../components/PictureProjets";
import "../../css/projetsExterieurs.css";

const ProjetExterieurMedium = ({
  isActive,
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
  isSelectedMenu,
}) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <Header isActive={isActive}></Header>
      <HeaderResp isActive={isActive}></HeaderResp>
      <div className="margin-bottom container fadeIn">
        <div className="projets__PartOne">
          <div className="projets__title-date">
            <h2>{data.title}</h2>
            <div className="projets__titleUnderline"></div>
            <div className="projets__date-dateLine">
              <div className="projets__dateLine"></div>
              <h3>{data.date}</h3>
            </div>
          </div>
          <div className="projets__titleBackground"></div>
          <img
            className="projets__img-croquis"
            src={data.backgroundPicture[0].url}
            alt="croquis"
          />
        </div>
        <div className="projetMedium__PartTwo">
          <div className="projets__imgPrincipal-background-text-container">
            <img
              className="projets__imgPrincipal large"
              src={data.prinPicture}
              alt="imgPrincipal"
            />
            <div className="projets__backgroundImgPrincipal medium large"></div>
            <div className="projetMedium__texte-container">
              <h4>{data.title}</h4>
              <p>{data.descriptionUrl}</p>
            </div>
          </div>
        </div>
        <div className="projets__PartThree">
          <div className="projets__pics-container1">
            <div className="marginB">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.pagePictures}
                url={data.pagePictures[0].url}
                id={data.pagePictures[0].id}
                index={data.pagePictures[0].index}
                title={data.pagePictures[0].title}
                descriptionPic={data.pagePictures[0].descriptionPic}
                className={data.pagePictures[0].class}
              ></PictureProjet>
            </div>

            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.pagePictures}
              url={data.pagePictures[1].url}
              id={data.pagePictures[1].id}
              index={data.pagePictures[1].index}
              title={data.pagePictures[1].title}
              descriptionPic={data.pagePictures[1].descriptionPic}
              className={data.pagePictures[1].class}
            ></PictureProjet>
          </div>
          <div className="projets__pics-container2">
            <div className="marginB">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.pagePictures}
                url={data.pagePictures[2].url}
                id={data.pagePictures[2].id}
                index={data.pagePictures[2].index}
                title={data.pagePictures[2].title}
                descriptionPic={data.pagePictures[2].descriptionPic}
                className={data.pagePictures[2].class}
              ></PictureProjet>
            </div>

            <PictureProjet
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedPic={selectedPic}
              setSelectedPic={setSelectedPic}
              pics={data.pagePictures}
              url={data.pagePictures[3].url}
              id={data.pagePictures[3].id}
              index={data.pagePictures[3].index}
              title={data.pagePictures[3].title}
              descriptionPic={data.pagePictures[3].descriptionPic}
              className={data.pagePictures[3].class}
            ></PictureProjet>
          </div>
        </div>
        <div className="projets__PartFive column">
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={data.pagePictures}
            url={data.pagePictures[4].url}
            id={data.pagePictures[4].id}
            index={data.pagePictures[4].index}
            title={data.pagePictures[4].title}
            descriptionPic={data.pagePictures[4].descriptionPic}
            className={data.pagePictures[4].class}
          ></PictureProjet>
          <PictureProjet
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectedPic={selectedPic}
            setSelectedPic={setSelectedPic}
            pics={data.pagePictures}
            url={data.pagePictures[5].url}
            id={data.pagePictures[5].id}
            index={data.pagePictures[5].index}
            title={data.pagePictures[5].title}
            descriptionPic={data.pagePictures[5].descriptionPic}
            className={data.pagePictures[5].class}
          ></PictureProjet>
        </div>
      </div>
      <Footer></Footer>
      <FooterResp></FooterResp>
    </div>
  );
};

export default ProjetExterieurMedium;
