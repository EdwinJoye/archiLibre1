import { Link } from "react-router-dom";
import SignatureBlanche from "../img/signatureBlanche.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer__container fadeIn">
      <div className="footer__buttons-container1">
        <Link className="footer__button" to="/exterieur">
          <div>
            <span>EXTÉRIEURS</span>
          </div>
        </Link>
        <Link className="footer__button" to="/interieur">
          <div>
            <span>INTÉRIEURS</span>
          </div>
        </Link>
      </div>
      <Link to="/">
        <img
          to="/"
          className="footer__signature"
          src={SignatureBlanche}
          alt="sBlanche"
        />
      </Link>
      <div className="footer__buttons-container2">
        <Link className="footer__button" to="/aboutme">
          <div>
            <span>À PROPOS</span>
          </div>
        </Link>
        <Link className="footer__button" to="/contact">
          <div>
            <span>CONTACT</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
