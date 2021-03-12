import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";

import priceNormalize from "../../../../helpers/priceNormalize";

import { ReactComponent as HeartLogo } from "./assets/heart-solid.svg";

import "./ObjectCard.scss";

const ObjectCard = (props) => {
	const { itemData, isFavourite, onToggleFavObject } = props;

	const {
		id = "",
		scu = "",
		complex_name: complexName = "",
		square = "",
		price_sq_m: priceSqMin = "",
		price_total: priceTotal = "",
		floors_total: floorsTotal = "",
		floor = "",
		rooms = "",
		image = "",
	} = itemData;

	const onFavouriteClick = (e) => {
		e.preventDefault();
		onToggleFavObject(itemData);
	};

	return (
		<div className="object-card">
			<Link to={`/objects/${id}`} className="object-card__link">
				<div className="object-card__header">
					<div className="object-card__title">ЖК {complexName}</div>
					<div
						className={cn("object-card__favourite", {
							"object-card__favourite--active": isFavourite,
						})}
						onClick={onFavouriteClick}
					>
						<HeartLogo className="object-card__favourite-icon" />
					</div>
				</div>
				<div className="object-card__image">
					<img src={image} alt="План квартиры" />
				</div>
				<div className="object-card__description">
					<div className="object-card__price">
						<div className="object-card__price-total">
							{priceNormalize.format(priceTotal)} ₽
						</div>
						<div className="object-card__price-per-meter">
							{priceNormalize.format(priceSqMin)} ₽/м<sup>2</sup>
						</div>
					</div>
					<div className="object-card__params">
						<div className="object-card__params-item">
							<div className="object-card__params-definition">Комнат</div>
							<div className="object-card__params-value">{rooms}</div>
						</div>
						<div className="object-card__params-item">
							<div className="object-card__params-definition">Площадь</div>
							<div className="object-card__params-value">
								{square} м<sup>2</sup>
							</div>
						</div>
					</div>
				</div>
				<div className="object-card__footer">
					<div className="object-card__art">{scu}</div>
					<div className="object-card__floor">
						Этаж {floor} из {floorsTotal}
					</div>
				</div>
			</Link>
		</div>
	);
};

ObjectCard.propTypes = {
	itemData: PropTypes.object,
	isFavourite: PropTypes.bool,
	onToggleFavObject: PropTypes.func,
};

ObjectCard.defaultProps = {
	itemData: {},
	isFavourite: false,
	onToggleFavObject: () => {},
};

export default ObjectCard;
