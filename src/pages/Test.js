import "../css/test.css";
import OverlayCarousel from "../components/OverlayCarousel";
import exterieur from "../data/exterieur.json";

// console.log("TEST", exterieur[4].zooms);

const Test = ({ selectedId, selectedPic, setSelectedId, setSelectedPic }) => {
  console.log("=======selectedPic", selectedPic);
  return (
    <div className="test">
      <div>
        {console.log("PAGEPICTURE", exterieur[4].pagePictures)}
        {exterieur[4].pagePictures.map((item) => {
          // console.log("ITEM-INDEX", item.index);
          return (
            <div>
              {selectedPic !== null && (
                <OverlayCarousel
                  isSelected={item.id === selectedId}
                  selectedPic={selectedPic}
                  pics={exterieur[4].pagePictures}
                  onClick={() => {
                    setSelectedId(null);
                    setSelectedPic(null);
                  }}
                ></OverlayCarousel>
              )}
              {/* {console.log("ZOOMS", exterieur[4].zooms[0].urls)} */}
              {console.log("ITEM.URL", item.url)}
              <div className="imgContainer">
                <div>hello</div>
                <img
                  src={item.url}
                  alt="imgOverlay"
                  onClick={() => {
                    setSelectedId(item.id);
                    setSelectedPic(item.index);
                  }}
                />
                {/* {console.log(setSelectedId)} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Test;
