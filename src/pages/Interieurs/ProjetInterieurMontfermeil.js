import Header from "../../components/Header";
import HeaderResp from "../../components/HeaderResp";
import { useLocation } from "react-router-dom";
import PictureProjet from "../../components/PictureProjets";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import FooterResp from "../../components/FooterResp";
import "../../css/projetsInterieurs.css";

const ProjetInterieurMontfermeil = ({
  selectedId,
  setSelectedId,
  selectedPic,
  setSelectedPic,
  isSelectedMenu,
  setIsSelectedMenu,
  isActive,
}) => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div
      className={isSelectedMenu === "principal-menu" ? " limitedHeight" : ""}
    >
      <Header isActive={isActive}></Header>
      <HeaderResp
        isActive={isActive}
        isSelectedMenu={isSelectedMenu}
        setIsSelectedMenu={setIsSelectedMenu}
      ></HeaderResp>
      <div className="fadeIn">
        <div className="projetInterieur__container-1 container">
          <h2>{data.title}</h2>
          <span>{data.descriptionUrl}</span>
        </div>
        <div className="projetInterieur__container-2">
          <div className="bg-diago-grey projetInt-bg"></div>
          {console.log("DATA MONT", data)}
          <div className="projetIntMontfermeil__container-1">
            <div className="marginR">
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
            <div>
              <Title
                title={data.pagePictures[0].title}
                cssTexte={data.pagePictures[0].cssTexte}
                cssUnderline={data.pagePictures[0].cssUnderline}
                cssBackground={data.pagePictures[0].cssBackground}
              ></Title>
              <div className="marginT">
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
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <FooterResp></FooterResp>
    </div>
  );
};

export default ProjetInterieurMontfermeil;
