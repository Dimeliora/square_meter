import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">Интернет-магазин недвижимости</div>
        <div className="header__menu">
          <NavLink
            exact
            to="/objects"
            className="header__link mr-5"
            activeClassName="link--active"
          >
            <i className="fas fa-laptop-house"></i> Выбор квартир
          </NavLink>
          <NavLink
            to="/favoirites"
            className="header__link mr-5"
            activeClassName="link--active"
          >
            <i className="fas fa-heart"></i> Избранное
          </NavLink>
          <NavLink
            to="/bids"
            className="header__link"
            activeClassName="link--active"
          >
            <i className="fas fa-file-alt"></i> Заявки
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
