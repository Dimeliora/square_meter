import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            На базе учебного проекта Webcademy
            <br />
            Курс "JavaScript разработка"
          </div>
          <div className="footer__copy">Dimeliora &copy; 2021</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
