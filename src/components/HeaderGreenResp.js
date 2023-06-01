import { Link } from "react-router-dom";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import Croix from "../img/croixBlanche.svg";
import ArrowDown from "../img/arrow-down.png";
import "../css/headerResp.css";

const HeaderResp = ({
  onOff,
  setOnOff,
  isOpenExt,
  setIsOpenExt,
  isOpenInt,
  setIsOpenInt,
}) => {
  const handleClickExt = () => {
    setIsOpenExt(!isOpenExt);
  };
  const handleClickInt = () => {
    setIsOpenInt(!isOpenInt);
  };

  return (
    <div className="headerResp__container">
      <div className="headerResp__overlay-container">hello</div>
      <div className="headerResp__menu-container">
        <div className="headerResp__croix-txt-container">
          <div className="headerResp__croix-container">
            <img className="headerResp__croix" src={Croix} alt="" />
          </div>
          <div className="headerResp__txt">MENU</div>
        </div>
        <div className="headerResp__btns-container">
          <Link to="/home">
            <div className="headerResp__btn-container">
              <span className="headerResp__btn">HOME</span>
            </div>
          </Link>

          {/* <Link to="/exterieur"> */}
          <div
            className="headerResp__btn-arw-container"
            onClick={handleClickExt}
          >
            <div>
              <span className="headerResp__btn">EXTÉRIEURS</span>
              <div></div>
            </div>
            <img
              className="headerResp__arrow"
              src={ArrowDown}
              alt="arrowDown"
            />
          </div>
          {isOpenExt && (
            <div>
              <div className="headerResp__under-btns-container">
                {exterieurData.map((data) => {
                  return (
                    <div key={data.id}>
                      <Link to={data.link} state={{ data: data }}>
                        <div className="headerResp__under-btn">
                          {data.btnName}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div>
            {/* <Link to="/interieur"> */}
            <div
              className="headerResp__btn-arw-container"
              onClick={handleClickInt}
            >
              <div>
                <span className="headerResp__btn">INTÉRIEURS</span>
                <div></div>
              </div>
              <img
                className="headerResp__arrow"
                src={ArrowDown}
                alt="arrowDown"
              />
            </div>
            {/* </Link> */}
            {isOpenInt && (
              <div className="headerResp__under-btns-container">
                {interieurData.map((data) => {
                  return (
                    <div key={data.id}>
                      <Link to={data.link} state={{ data: data }}>
                        <div className="headerResp__under-btn">
                          {data.btnName}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <Link to="/aboutme">
            <div className="headerResp__btn-container">
              <span className="headerResp__btn">À PROPOS</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="headerResp__btn-container">
              <span className="headerResp__btn">CONTACT</span>
            </div>
          </Link>
        </div>
        <div className="headerResp__btn-contact-container">
          <a
            className="headerResp__btn-contact"
            href="mailto:AOtheninGirard@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderResp;
