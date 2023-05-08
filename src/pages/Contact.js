import HeaderGreen from "../components/HeaderGreen";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../css/contact.css";

const Contact = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <HeaderGreen onOff={onOff} setOnOff={setOnOff}></HeaderGreen>
      <div className="container"></div>
      <Map></Map>
      <div className="footer">
        <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      </div>
    </div>
  );
};

export default Contact;
