import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import "../css/footer.css";

const Footer = ({ onOff, setOnOff }) => {
  return (
    <div className="footer__container fadeIn">
      <div>
        <Link
          to="/"
          onClick={() => {
            setOnOff((onOff = 1));
          }}
        >
          <img
            to="/"
            className="footer__signature"
            src={SignatureBlanche}
            alt="sBlanche"
          />
        </Link>
      </div>
      <div className="footer__buttons-container">
        <Link
          className="footer__button"
          to="/exterieur"
          onClick={() => {
            setOnOff((onOff = 2));
          }}
        >
          <div>
            <span>EXTERIEURS</span>
          </div>
        </Link>
        <Link
          className="footer__button"
          to="/interieur"
          onClick={() => {
            setOnOff((onOff = 3));
          }}
        >
          <div>
            <span>INTERIEURS</span>
          </div>
        </Link>
        <Link
          className="footer__button"
          to="/aboutme"
          onClick={() => {
            setOnOff((onOff = 4));
          }}
        >
          <div>
            <span>A </span>
            <span>PROPOS</span>
          </div>
        </Link>
        <Link
          className="footer__button"
          to="/contact"
          onClick={() => {
            setOnOff((onOff = 5));
          }}
        >
          <div>
            <span>CONTACT</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
