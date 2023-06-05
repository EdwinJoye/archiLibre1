import { Link } from "react-router-dom";
import Signature from "../img/signatureBlanche.png";
import "../css/footerResp.css";

const FooterResp = () => {
  return (
    <div className="footerResp__container">
      <Link to="/">
        <img src={Signature} alt="signa" />
      </Link>
    </div>
  );
};

export default FooterResp;
