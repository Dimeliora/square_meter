import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
	return (
		<div className="logo">
			<Link to="/" className="logo__link">
				<div className="logo__title">Квадартный метр</div>
				<div className="logo__subtitle">Купить квартиру в один клик</div>
			</Link>
		</div>
	);
};

export default Logo;
