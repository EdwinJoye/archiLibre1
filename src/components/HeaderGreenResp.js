import { Link } from "react-router-dom";
import { useState } from "react";
import exterieurData from "../data/exterieur.json";
import interieurData from "../data/interieur.json";
import Signature from "../img/signatureBlanche.png";
import Croix from "../img/croixBlanche.svg";
import ArrowDown from "../img/arrow-down.png";
import ArrowUp from "../img/arrow-up.png";
import "../css/headerResp.css";

const HeaderResp = ({ onOff, setOnOff, setIsSelectedMenu, isSelectedMenu }) => {
  const [isOpenExt, setIsOpenExt] = useState(false);
  const [isOpenInt, setIsOpenInt] = useState(false);

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
          onClick={() => setIsSelectedMenu("principal-menu")}
        >
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
          <div className="headerResp__lines"></div>
        </div>
        {console.log("HEADER SELECTED MENU", isSelectedMenu)}
        <div className="headerResp__signature-container">
          <img src={Signature} alt="sign" />
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
                setOnOff((onOff = 1));
              }}
            >
              <span
                className={
                  onOff === 1
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
              <div>
                <span
                  className={
                    onOff === 2
                      ? "headerResp__btn-white"
                      : "headerResp__btn-green"
                  }
                >
                  EXTÉRIEURS
                </span>
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
                  <Link
                    to="/exterieur"
                    onClick={() => {
                      setIsSelectedMenu(null);
                      setOnOff((onOff = 2));
                    }}
                  >
                    <div
                      className={
                        onOff === 2
                          ? "headerResp__under-btn-white"
                          : "headerResp__under-btn-green"
                      }
                    >
                      MENU PRINCIPAL
                    </div>
                  </Link>
                </div>
                <div className="headerResp__under-btns-container">
                  {exterieurData.map((data) => {
                    return (
                      <div key={data.id}>
                        <Link
                          to={data.link}
                          state={{ data: data }}
                          onClick={() => {
                            setIsSelectedMenu(null);
                            setOnOff(0);
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
                <div>
                  <span
                    className={
                      onOff === 3
                        ? "headerResp__btn-white"
                        : "headerResp__btn-green"
                    }
                  >
                    INTÉRIEURS
                  </span>
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
              {isOpenInt && (
                <div>
                  <div className="headerResp__under-btns-container">
                    <Link
                      to="/interieur"
                      onClick={() => {
                        setIsSelectedMenu(null);
                        setOnOff((onOff = 3));
                      }}
                    >
                      <div
                        className={
                          onOff === 3
                            ? "headerResp__under-btn-white"
                            : "headerResp__under-btn-green"
                        }
                      >
                        MENU PRINCIPAL
                      </div>
                    </Link>
                  </div>
                  <div className="headerResp__under-btns-container">
                    {interieurData.map((data) => {
                      return (
                        <div key={data.id}>
                          <Link
                            to={data.link}
                            state={{ data: data }}
                            onClick={() => {
                              // setSelectedPage((selectedPage = 1));
                              setIsSelectedMenu(null);
                              setOnOff(0);
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
                setOnOff((onOff = 4));
              }}
            >
              <span
                className={
                  onOff === 4
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
                setOnOff((onOff = 5));
              }}
            >
              <span
                className={
                  onOff === 5
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
