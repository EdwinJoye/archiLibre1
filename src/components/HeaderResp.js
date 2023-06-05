import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import Signature from "../img/signatureBlanche.png";
import Croix from "../img/croixBlanche.svg";
import ArrowDownGreen from "../img/arrow-down-green.svg";
import ArrowUpGreen from "../img/arrow-up-green.svg";
import ArrowDownWhite from "../img/arrow-down-white.svg";
import ArrowUpWhite from "../img/arrow-up-white.svg";
import "../css/headerResp.css";

const HeaderResp = ({ setIsSelectedMenu, isSelectedMenu, isActive }) => {
  const [isOpenExt, setIsOpenExt] = useState(false);
  const [isOpenInt, setIsOpenInt] = useState(false);
  const location = useLocation();
  const isTransparent = location.pathname === "/";

  const handleClickExt = () => {
    setIsOpenExt(!isOpenExt);
  };
  const handleClickInt = () => {
    setIsOpenInt(!isOpenInt);
  };

  return (
    <div className="headerResp__container">
      <div
        className={
          isTransparent
            ? "headerResp__first-menu-transparent"
            : "headerResp__first-menu-green"
        }
      >
        <div
          className="headerResp__sousMenu"
          onClick={() => setIsSelectedMenu("principal-menu")}
        >
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
        </div>
        {/* {console.log("HEADER SELECTED MENU", isSelectedMenu)} */}

        <div className="headerResp__signature-container">
          <Link to="/">
            <img src={Signature} alt="sign" />
          </Link>
        </div>
        <div className="headerResp__sousMenu"></div>
      </div>
      <div
        className={
          isSelectedMenu === "principal-menu"
            ? "headerResp__second-menu-block"
            : "headerResp__second-menu-none"
        }
      >
        <div
          onClick={() => {
            setIsSelectedMenu(null);
            setIsOpenInt(false);
            setIsOpenExt(false);
          }}
          className="headerResp__overlay-container fadeIn"
        ></div>
        <div
          className={
            isSelectedMenu === "principal-menu"
              ? "headerResp__menu-container-in"
              : "headerResp__menu-container-out"
          }
        >
          <div className="headerResp__croix-txt-container">
            <div className="headerResp__croix-container">
              <img
                onClick={() => {
                  setIsSelectedMenu(null);
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
                setIsSelectedMenu(null);
                setIsOpenInt(false);
                setIsOpenExt(false);
              }}
              className="headerResp__txt"
            >
              MENU
            </div>
          </div>
          <div className="headerResp__btns-container">
            <Link
              className="headerResp__btn-container-first"
              to="/"
              onClick={() => {
                setIsSelectedMenu(null);
              }}
            >
              <span
                className={
                  isActive === 1
                    ? "headerResp__btn-white"
                    : "headerResp__btn-green"
                }
              >
                HOME
              </span>
            </Link>
            <div
              className="headerResp__btn-arw-container"
              onClick={handleClickExt}
            >
              <Link
                to="/exterieur"
                onClick={() => {
                  setIsSelectedMenu(null);
                }}
              >
                <span
                  className={
                    isActive === 2
                      ? "headerResp__btn-white"
                      : "headerResp__btn-green"
                  }
                >
                  EXTÉRIEURS
                </span>
              </Link>
              <div className={isActive === 2 ? "none" : "block"}>
                <img
                  className={
                    isOpenExt === false
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowDownGreen}
                  alt="arrowDown"
                />
                <img
                  c
                  className={
                    isOpenExt === true
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowUpGreen}
                  alt="arrowDown"
                />
              </div>
              <div className={isActive === 2 ? "block" : "none"}>
                <img
                  className={
                    isOpenExt === false
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowDownWhite}
                  alt="arrowDown"
                />
                <img
                  c
                  className={
                    isOpenExt === true
                      ? "headerResp__arrow-block"
                      : "headerResp__arrow-none"
                  }
                  src={ArrowUpWhite}
                  alt="arrowDown"
                />
              </div>
            </div>

            {isOpenExt && (
              <div>
                <div className="headerResp__under-btns-container">
                  {exterieurData.map((data) => {
                    return (
                      <div key={data.id}>
                        <Link
                          to={data.link}
                          state={{ data: data }}
                          onClick={() => {
                            setIsSelectedMenu(null);
                          }}
                        >
                          {/* {console.log("SELECTED PAGE EXTERIEUR", selectedPage)} */}
                          <div
                            className="headerResp__under-btn-green"
                            // className={
                            //   selectedPage === data.id
                            //     ? "headerResp__under-btn-white"
                            //     : "headerResp__under-btn-green"
                            // }
                          >
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
              <div
                className="headerResp__btn-arw-container"
                onClick={handleClickInt}
              >
                <Link
                  to="/interieur"
                  onClick={() => {
                    setIsSelectedMenu(null);
                  }}
                >
                  <span
                    className={
                      isActive === 3
                        ? "headerResp__btn-white"
                        : "headerResp__btn-green"
                    }
                  >
                    INTÉRIEURS
                  </span>
                </Link>
                <div className={isActive === 3 ? "none" : "block"}>
                  <img
                    className={
                      isOpenInt === false
                        ? "headerResp__arrow-block"
                        : "headerResp__arrow-none"
                    }
                    src={ArrowDownGreen}
                    alt="arrowDown"
                  />
                  <img
                    c
                    className={
                      isOpenInt === true
                        ? "headerResp__arrow-block"
                        : "headerResp__arrow-none"
                    }
                    src={ArrowUpGreen}
                    alt="arrowDown"
                  />
                </div>
                <div className={isActive === 3 ? "block" : "none"}>
                  <img
                    className={
                      isOpenInt === false
                        ? "headerResp__arrow-block"
                        : "headerResp__arrow-none"
                    }
                    src={ArrowDownWhite}
                    alt="arrowDown"
                  />
                  <img
                    c
                    className={
                      isOpenInt === true
                        ? "headerResp__arrow-block"
                        : "headerResp__arrow-none"
                    }
                    src={ArrowUpWhite}
                    alt="arrowDown"
                  />
                </div>
              </div>
              {isOpenInt && (
                <div>
                  <div className="headerResp__under-btns-container">
                    {interieurData.map((data) => {
                      return (
                        <div key={data.id}>
                          <Link
                            to={data.link}
                            state={{ data: data }}
                            onClick={() => {
                              // setSelectedPage(data.id);
                              setIsSelectedMenu(null);
                            }}
                          >
                            <div
                              className="headerResp__under-btn-green"
                              // className={
                              //   selectedPage === data.id
                              //     ? "headerResp__under-btn-white"
                              //     : "headerResp__under-btn-green"
                              // }
                            >
                              {data.btnName}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/aboutme"
              className="headerResp__btn-container"
              onClick={() => {
                setIsSelectedMenu(null);
              }}
            >
              <span
                className={
                  isActive === 4
                    ? "headerResp__btn-white"
                    : "headerResp__btn-green"
                }
              >
                À PROPOS
              </span>
            </Link>
            <Link
              to="/contact"
              className="headerResp__btn-container"
              onClick={() => {
                setIsSelectedMenu(null);
              }}
            >
              <span
                className={
                  isActive === 5
                    ? "headerResp__btn-white"
                    : "headerResp__btn-green"
                }
              >
                CONTACT
              </span>
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
