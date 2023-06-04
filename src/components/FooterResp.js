import { Link } from "react-router-dom";
import Signature from "../img/signatureBlanche.png";
import "../css/footerResp.css";

const FooterResp = ({ setOnOff, onOff }) => {
  return (
    <div className="footerResp__container">
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <img src={Signature} alt="signa" />
      </Link>
    </div>
  );
};

export default FooterResp;
