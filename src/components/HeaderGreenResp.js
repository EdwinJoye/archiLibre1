import { Link } from "react-router-dom";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import Signature from "../img/signatureBlanche.png";
import Croix from "../img/croixBlanche.svg";
import ArrowDown from "../img/arrow-down.png";
import ArrowUp from "../img/arrow-up.png";
import "../css/headerResp.css";

const HeaderResp = ({
  isOpenExt,
  setIsOpenExt,
  isOpenInt,
  setIsOpenInt,
  isSelectedTest,
  setIsSelectedTest,
}) => {
  const handleClickExt = () => {
    setIsOpenExt(!isOpenExt);
  };
  const handleClickInt = () => {
    setIsOpenInt(!isOpenInt);
  };

  return (
    <div className="headerResp__container">
      <div className="headerResp__first-menu">
        <div
          className="headerResp__sousMenu"
          onClick={() => setIsSelectedTest("principal-menu")}
        >
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
        </div>
        <div className="headerResp__signature-container">
          <img src={Signature} alt="sign" />
        </div>
        <div className="headerResp__sousMenu"></div>
      </div>
      <div
        className={
          isSelectedTest === "principal-menu"
            ? "headerResp__second-menu block"
            : "headerResp__second-menu-none"
        }
      >
        <div
          onClick={() => {
            setIsSelectedTest(null);
            setIsOpenInt(false);
            setIsOpenExt(false);
          }}
          className="headerResp__overlay-container fadeIn"
        ></div>
        <div
          className={
            isSelectedTest === "principal-menu"
              ? "headerResp__menu-container-in"
              : "headerResp__menu-container-out"
          }
        >
          <div className="headerResp__croix-txt-container">
            <div className="headerResp__croix-container">
              <img
                onClick={() => {
                  setIsSelectedTest(null);
                  setIsOpenInt(false);
                  setIsOpenExt(false);
                }}
                className="headerResp__croix"
                src={Croix}
                alt="crx"
              />
            </div>
            <div
              onClick={() => {
                setIsSelectedTest(null);
                setIsOpenInt(false);
                setIsOpenExt(false);
              }}
              className="headerResp__txt"
            >
              MENU
            </div>
          </div>
          <div className="headerResp__btns-container">
            <Link to="/">
              <div className="headerResp__btn-container">
                <span className="headerResp__btn">HOME</span>
              </div>
            </Link>
            <div
              className="headerResp__btn-arw-container"
              onClick={handleClickExt}
            >
              <div>
                <span className="headerResp__btn">EXTÉRIEURS</span>
                <div></div>
              </div>
              <img
                className={
                  isOpenExt === false
                    ? "headerResp__arrow-block"
                    : "headerResp__arrow-none"
                }
                src={ArrowDown}
                alt="arrowDown"
              />
              <img
                c
                className={
                  isOpenExt === true
                    ? "headerResp__arrow-block"
                    : "headerResp__arrow-none"
                }
                src={ArrowUp}
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
                  className={
                    isOpenInt === false
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowDown}
                  alt="arrowDown"
                />
                <img
                  className={
                    isOpenInt === true
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowUp}
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
    </div>
  );
};

export default HeaderResp;
