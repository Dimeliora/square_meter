import { NavLink } from 'react-router-dom';

import { ReactComponent as LaptopLogo } from '../../assets/icons/laptop-house-solid.svg';
import { ReactComponent as HeartLogo } from '../../assets/icons/heart-solid.svg';
import { ReactComponent as FileLogo } from '../../assets/icons/file-alt-regular.svg';

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
            <LaptopLogo className="header__link-icon" />
            <span>Выбор квартир</span>
          </NavLink>
          <NavLink
            to="/favoirites"
            className="header__link mr-5"
            activeClassName="link--active"
          >
            <HeartLogo className="header__link-icon" />
            <span>Избранное</span>
          </NavLink>
          <NavLink
            to="/bids"
            className="header__link"
            activeClassName="link--active"
          >
            <FileLogo className="header__link-icon" />
            <span>Заявки</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
