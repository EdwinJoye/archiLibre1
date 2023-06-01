import HeaderGreen1 from "../components/HeaderGreen1";
import Email from "../img/mail.svg";
import Position from "../img/position.svg";
import Telephone from "../img/tel.svg";
import Map from "../components/Map";
import Footer from "../components/Footer";
import "../css/contact.css";

const Contact = ({ onOff, setOnOff }) => {
  return (
    <div className="contact__container relative">
      <HeaderGreen1 onOff={onOff} setOnOff={setOnOff}></HeaderGreen1>
      <div className="fadeIn">
        <div className="contact__all-container container">
          <div className="contact__container-1">
            <img
              src="https://res.cloudinary.com/dt7srgrd1/image/upload/v1683567160/archilibre1/Photos/Aman/my_spa_oim_pensif_gqpaxk.jpg"
              alt="aman"
            />
            <div className="contact__img-background"></div>
          </div>
          <div className="contact__container-2">
            <div className="contact__title__container-all">
              <div className="title__date-container">
                <h2 className="txt-vert-c">Contact</h2>
                <div className="title__underline und-vert-c"></div>
                <span>A.Othenin Girard</span>
              </div>
              <div className={`contact__title-background bg-vert-tc`}></div>
            </div>

            <div className="contact__infos-container">
              <div className="contact__logo-info">
                <div className="contact__logo-container">
                  <img src={Email} alt="email" />
                </div>
                <a
                  className="contact__mail"
                  HREF="mailto:AOtheninGirard@gmail.com"
                >
                  AOtheninGirard@gmail.com
                </a>
              </div>
              <div className="contact__logo-info">
                <div className="contact__logo-container">
                  <img src={Telephone} alt="telephone" />
                </div>
                <span>06.50.02.85.06</span>
              </div>
              <div className="contact__logo-info">
                <div className="contact__logo-container">
                  <img src={Position} alt="position" />
                </div>
                <span>25 avenue de l’Europe</span>
              </div>
              <a
                className="contact__button"
                HREF="mailto:AOtheninGirard@gmail.com"
              >
                Contactez moi
              </a>
            </div>
          </div>
        </div>
        <div className="contact__map">
          <Map></Map>
          <div className="contact__footer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
