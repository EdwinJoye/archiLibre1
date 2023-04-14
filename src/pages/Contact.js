import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/contact.css";

const Contact = ({ onOff, setOnOff }) => {
  return (
    <div className="relative">
      <div className="container">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
        <div className="fadeIn">Contact Aman</div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
