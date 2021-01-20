import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="top-panel">
      <div className="top-panel__container">
        <div className="top-panel__title">Интернет-магазин недвижимости</div>
        <div className="top-panel__menu">
          <NavLink
            exact
            to="/objects"
            className="top-panel__link mr-5"
            activeClassName="link--active"
          >
            <i className="fas fa-laptop-house"></i> Выбор квартир
          </NavLink>
          <NavLink
            to="/favoirites"
            className="top-panel__link mr-5"
            activeClassName="link--active"
          >
            <i className="fas fa-heart"></i> Избранное
          </NavLink>
          <NavLink
            to="/bids"
            className="top-panel__link"
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
