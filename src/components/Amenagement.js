import OverlayImg from "./OverlayImg";

import "../css/amenagement.css";

const Amenagement = ({ item, onOff, setOnOff, selectedId, setSelectedId }) => {
  return (
    <div>
      {item.sousCategories.map((data) => {
        return (
          <div>
            <h1>{data.title}</h1>
            <div>
              {data.pics.map((pic) => {
                return (
                  <div key={pic.id}>
                    <OverlayImg
                      url={pic.url}
                      isSelected={pic.id === selectedId}
                      onClick={() => {
                        setSelectedId(null);
                      }}
                    ></OverlayImg>
                    <h2>{pic.title}</h2>
                    <img
                      onClick={() => {
                        setSelectedId(pic.id);
                      }}
                      className="amenagement__img"
                      src={pic.url}
                      alt=""
                    />
                    <p>{pic.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Amenagement;
