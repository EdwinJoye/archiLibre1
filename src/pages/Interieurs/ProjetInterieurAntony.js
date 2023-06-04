import HeaderGreen2 from "../../components/HeaderGreen2";
import HeaderGreenResp from "../../components/HeaderGreenResp";
import { useLocation } from "react-router-dom";
import PictureProjet from "../../components/PictureProjets";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import "../../css/projetsInterieurs.css";

const ProjetInterieurAntony = ({
  onOff,
  setOnOff,
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
  isSelectedMenu,
  setIsSelectedMenu,
}) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <HeaderGreen2 onOff={onOff} setOnOff={setOnOff}></HeaderGreen2>
      <HeaderGreenResp
        onOff={onOff}
        setOnOff={setOnOff}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HeaderGreenResp>
      <div className="fadeIn">
        <div className="projetInterieur__container-1 container">
          <h2>{data.title}</h2>
          <span>{data.descriptionUrl}</span>
        </div>
        <div className="projetInterieur__container-2">
          <div className="bg-diago-green projetInt-bg"></div>
          <div className="projetInterieur__2-img-container">
            <div className="projetIntAntony__img-container-1">
              <div className="marginB">
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[0].pics}
                  url={data.pagePictures[0].pics[0].url}
                  id={data.pagePictures[0].pics[0].id}
                  index={data.pagePictures[0].pics[0].index}
                  title={data.pagePictures[0].pics[0].title}
                  descriptionPic={data.pagePictures[0].pics[0].descriptionPic}
                  className={data.pagePictures[0].pics[0].class}
                ></PictureProjet>
              </div>
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.pagePictures[0].pics}
                url={data.pagePictures[0].pics[1].url}
                id={data.pagePictures[0].pics[1].id}
                index={data.pagePictures[0].pics[1].index}
                title={data.pagePictures[0].pics[1].title}
                descriptionPic={data.pagePictures[0].pics[1].descriptionPic}
                className={data.pagePictures[0].pics[1].class}
              ></PictureProjet>
            </div>
            <div className="projetIntAntony__img-container-2">
              <Title
                title={data.pagePictures[0].title}
                cssTexte={data.pagePictures[0].cssTexte}
                cssUnderline={data.pagePictures[0].cssUnderline}
                cssBackground={data.pagePictures[0].cssBackground}
              ></Title>
              <div className="marginB">
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[0].pics}
                  url={data.pagePictures[0].pics[2].url}
                  id={data.pagePictures[0].pics[2].id}
                  index={data.pagePictures[0].pics[2].index}
                  title={data.pagePictures[0].pics[2].title}
                  descriptionPic={data.pagePictures[0].pics[2].descriptionPic}
                  className={data.pagePictures[0].pics[2].class}
                ></PictureProjet>
              </div>
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.pagePictures[0].pics}
                url={data.pagePictures[0].pics[3].url}
                id={data.pagePictures[0].pics[3].id}
                index={data.pagePictures[0].pics[3].index}
                title={data.pagePictures[0].pics[3].title}
                descriptionPic={data.pagePictures[0].pics[3].descriptionPic}
                className={data.pagePictures[0].pics[3].class}
              ></PictureProjet>
            </div>
          </div>
          <div className="projetInterieur__3-img-container container">
            <Title
              title={data.pagePictures[1].title}
              cssTexte={data.pagePictures[1].cssTexte}
              cssUnderline={data.pagePictures[1].cssUnderline}
              cssBackground={data.pagePictures[1].cssBackground}
            ></Title>
            <div className="projetIntAntony__img-container-3">
              <div className="container-3-img1">
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[1].pics}
                  url={data.pagePictures[1].pics[0].url}
                  id={data.pagePictures[1].pics[0].id}
                  index={data.pagePictures[1].pics[0].index}
                  title={data.pagePictures[1].pics[0].title}
                  descriptionPic={data.pagePictures[1].pics[0].descriptionPic}
                  className={data.pagePictures[1].pics[0].class}
                ></PictureProjet>
              </div>

              <div className="container-3-img2">
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[1].pics}
                  url={data.pagePictures[1].pics[1].url}
                  id={data.pagePictures[1].pics[1].id}
                  index={data.pagePictures[1].pics[1].index}
                  title={data.pagePictures[1].pics[1].title}
                  descriptionPic={data.pagePictures[1].pics[1].descriptionPic}
                  className={data.pagePictures[1].pics[1].class}
                ></PictureProjet>
              </div>

              <div className="container-3-img3">
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[1].pics}
                  url={data.pagePictures[1].pics[2].url}
                  id={data.pagePictures[1].pics[2].id}
                  index={data.pagePictures[1].pics[2].index}
                  title={data.pagePictures[1].pics[2].title}
                  descriptionPic={data.pagePictures[1].pics[2].descriptionPic}
                  className={data.pagePictures[1].pics[2].class}
                ></PictureProjet>
              </div>
            </div>
          </div>
          <div className="projetIntAntony__img-container-4">
            <div className="bg-diago-grey"></div>
            <div className="projetIntAntony__img-container-4-part2">
              <PictureProjet
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                selectedPic={selectedPic}
                setSelectedPic={setSelectedPic}
                pics={data.pagePictures[2].pics}
                url={data.pagePictures[2].pics[0].url}
                id={data.pagePictures[2].pics[0].id}
                index={data.pagePictures[2].pics[0].index}
                title={data.pagePictures[2].pics[0].title}
                descriptionPic={data.pagePictures[2].pics[0].descriptionPic}
                className={data.pagePictures[2].pics[0].class}
              ></PictureProjet>
              <div className="projetIntAntony__container4-right">
                <Title
                  title={data.pagePictures[2].title}
                  cssTexte={data.pagePictures[2].cssTexte}
                  cssUnderline={data.pagePictures[2].cssUnderline}
                  cssBackground={data.pagePictures[2].cssBackground}
                ></Title>
                <PictureProjet
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedPic={selectedPic}
                  setSelectedPic={setSelectedPic}
                  pics={data.pagePictures[2].pics}
                  url={data.pagePictures[2].pics[1].url}
                  id={data.pagePictures[2].pics[1].id}
                  index={data.pagePictures[2].pics[1].index}
                  title={data.pagePictures[2].pics[1].title}
                  descriptionPic={data.pagePictures[2].pics[1].descriptionPic}
                  className={data.pagePictures[2].pics[1].class}
                ></PictureProjet>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      <FooterResp onOff={onOff} setOnOff={setOnOff}></FooterResp>
    </div>
  );
};

export default ProjetInterieurAntony;
