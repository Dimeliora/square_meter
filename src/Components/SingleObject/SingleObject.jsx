import cn from "classnames";
import PropTypes from "prop-types";

import priceNormalize from "../../helpers/priceNormalize";

import { ReactComponent as HeartLogo } from "./assets/heart-solid.svg";

import "./SingleObject.scss";

const SingleObject = (props) => {
	const { objectData, isFavourite, toggleObjectAsFavourite, onReserve } = props;

	const {
		scu = "",
		title = "",
		complex_name: complexName = "",
		building = "",
		flat_number: flatNumber = "",
		floor = "",
		floors_total: floorsTotal = "",
		rooms = "",
		square = "",
		price_sq_m: priceSqM = "",
		price_total: priceTotal = "",
		image = "",
	} = objectData;

	const onToggleFavourite = () => {
		toggleObjectAsFavourite(objectData);
	};

	return (
		<div className="object">
			<div className="object__photo">
				<img src={image} alt="Схема планировки квартиры" />
			</div>
			<div className="object__description">
				<div className="object__description-sector">ЖК {complexName}</div>
				<div className="object__description-name">
					<div className="object__description-info">
						<div className="object__description-title">{title}</div>
						<div className="object__description-art">{scu}</div>
					</div>
					<button
						className={cn("object__favourite-button", {
							"object__favourite-button--active": isFavourite,
						})}
						onClick={onToggleFavourite}
					>
						<HeartLogo className="object__favourite-button-icon" />
						<span>{isFavourite ? "В избранном" : "В избранное"}</span>
					</button>
				</div>
				<div className="object__description-details">
					<div className="object__description-details-item">
						<div className="object__description-details-definition">Корпус</div>
						<div className="object__description-details-value">{building}</div>
					</div>
					<div className="object__description-details-item">
						<div className="object__description-details-definition">Этаж</div>
						<div className="object__description-details-value">
							{floor} из {floorsTotal}
						</div>
					</div>
					<div className="object__description-details-item">
						<div className="object__description-details-definition">Номер</div>
						<div className="object__description-details-value">
							{flatNumber}
						</div>
					</div>
					<div className="object__description-details-item">
						<div className="object__description-details-definition">Комнат</div>
						<div className="object__description-details-value">{rooms}</div>
					</div>
				</div>
				<div className="object__info">
					<div className="object__info-row">
						<div className="object__info-name">Стоимость</div>
						<div className="object__info-value object__info-value--price">
							{priceNormalize.format(priceTotal)} ₽
						</div>
					</div>
					<div className="object__info-row">
						<div className="object__info-name">
							Цена за м<sup>2</sup>
						</div>
						<div className="object__info-value">
							{priceNormalize.format(priceSqM)} ₽ / м<sup>2</sup>
						</div>
					</div>
					<div className="object__info-row">
						<div className="object__info-name">Площадь</div>
						<div className="object__info-value">
							{square} м<sup>2</sup>
						</div>
					</div>
				</div>
				<button className="object__order-button" onClick={onReserve}>
					Забронировать
				</button>
			</div>
		</div>
	);
};

SingleObject.propTypes = {
	objectData: PropTypes.object,
	isFavourite: PropTypes.bool,
	toggleObjectAsFavourite: PropTypes.func,
	onReserve: PropTypes.func,
};

SingleObject.defaultProps = {
	objectData: {},
	isFavourite: false,
	toggleObjectAsFavourite: () => {},
	onReserve: () => {},
};

export default SingleObject;
