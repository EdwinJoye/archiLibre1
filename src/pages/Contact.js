import HeaderGreen1 from "../components/HeaderGreen1";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../css/contact.css";

const Contact = ({ onOff, setOnOff }) => {
  return (
    <div className="contact__all-test relative">
      <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1>
      <div className="contact__all-container container">
        <div className="contact__container-1">
          <img
            src="https://res.cloudinary.com/dt7srgrd1/image/upload/v1683567160/archilibre1/Photos/Aman/my_spa_oim_pensif_gqpaxk.jpg"
            alt="aman"
          />
        </div>
        <div className="contact__container-2">
          <Map></Map>
          <div className="contact__infos-container">
            <span>25 avenue de l’Europe</span>
            <span>AOtheninGirard@gmail.com</span>
            <span>06.50.02.85.06</span>
            <a HREF="AOtheninGirard@gmail.com">Contactez moi</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer onOff={onOff} setOnOff={setOnOff}></Footer>
      </div>
    </div>
  );
};

export default Contact;
