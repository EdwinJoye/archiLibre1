import HeaderGreen2 from "../../components/HeaderGreen2";
import { useLocation } from "react-router-dom";
import PictureProjet from "../../components/PictureProjets";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import "../../css/projetsInterieurs.css";

const ProjetInterieurMali = ({
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
      <HeaderGreen2 onOff={onOff} setOnOff={setOnOff}></HeaderGreen2>
      <div className="projetInterieur__container-1 container">
        <h2>{data.title}</h2>
        <span>{data.descriptionUrl}</span>
      </div>
      <div className="projetInterieur__container-2">
        <div className="bg-diago-grey projetInt-bg"></div>
        <div className="projetIntMali__container-1">
          <div className="marginR">
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
          <div>
            <div className="marginB">
              <Title
                title={data.pagePictures[0].title}
                cssTexte={data.pagePictures[0].cssTexte}
                cssUnderline={data.pagePictures[0].cssUnderline}
                cssBackground={data.pagePictures[0].cssBackground}
              ></Title>
            </div>
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
        </div>
      </div>
      <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
    </div>
  );
};

export default ProjetInterieurMali;