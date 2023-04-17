import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/contact.css";

const Contact = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container">
        <div className="fadeIn">Contact Aman</div>
      </div>
      <div className="footer">
        <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      </div>
    </div>
  );
};

export default Contact;
