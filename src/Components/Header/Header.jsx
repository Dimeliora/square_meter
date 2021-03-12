import { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import ROUTES from "../../configs/routes";

import Logo from "./Components/Logo";

import "./Header.scss";

const Header = () => {
	const [isMenuActive, setMenuActive] = useState(false);

	const handleMenuBtnClick = () => {
		setMenuActive((prevState) => !prevState);
	};

	const handleMenuItemClick = () => {
		setMenuActive(false);
	};

	return (
		<header className="header">
			<div className="header__navbar">
				<div className="container header__wrapper">
					<div className="header__title">Интернет-магазин недвижимости</div>
					<nav
						className={cn("header__menu", {
							"header__menu--active": isMenuActive,
						})}
					>
						<div className="header__menu-wrapper">
							{ROUTES.filter(({ isDynamic }) => !isDynamic).map(
								({ name, href, isExact }) => (
									<NavLink
										key={name}
										exact={isExact}
										to={href}
										className="header__link"
										activeClassName="header__link--active"
										onClick={handleMenuItemClick}
									>
										{name}
									</NavLink>
								)
							)}
						</div>
					</nav>
					<div
						className={cn("header__menu-button", {
							"header__menu-button--active": isMenuActive,
						})}
						onClick={handleMenuBtnClick}
					>
						<span />
						<span />
						<span />
					</div>
				</div>
				<Logo />
			</div>
		</header>
	);
};

export default Header;
