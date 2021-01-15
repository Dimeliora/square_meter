import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Учебный проект школы <a href="/">ВебКадеми.рф</a>с
          курса{' '}
          <a href="/">JavaScript разработка</a>.
          Проект выполнил <a href="/">Di Meliora</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
