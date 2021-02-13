import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";

import priceNormalize from "../../../helpers/priceNormalize";

import { ReactComponent as HeartLogo } from "../../../asset/icons/heart-solid.svg";

import "./ObjectListItem.css";

const ObjectListItem = (props) => {
	const { itemData, isFavourite, onToggleFavObject } = props;

	const {
		id = "",
		scu = "",
		complex_name: complexName = "",
		square = "",
		price_sq_m: priceSqMin = "",
		price_total: priceTotal = "",
		building = "",
		floor = "",
		rooms = "",
	} = itemData;

	const onFavouriteClick = (e) => {
		e.preventDefault();
		onToggleFavObject(itemData);
	};

	return (
		<Link to={`/objects/${id}`} className="panel">
			<div className="panel__item-num">{scu}</div>
			<div className="panel__name">ЖК {complexName}</div>
			<div className="panel__block">{building}</div>
			<div className="panel__floor">{floor}</div>
			<div className="panel__rooms">{rooms}</div>
			<div className="panel__sq">
				{square} м<sup>2</sup>
			</div>
			<div className="panel__price-per-m">
				{priceNormalize.format(priceSqMin)} ₽
			</div>
			<div className="panel__price">{priceNormalize.format(priceTotal)} ₽</div>
			<div className="panel__favourite">
				<div
					className={cn("card__like", { "card__like--active": isFavourite })}
					onClick={onFavouriteClick}
				>
					<HeartLogo className="panel__favourite-icon" />
				</div>
			</div>
		</Link>
	);
};

ObjectListItem.propTypes = {
	itemData: PropTypes.object,
	isFavourite: PropTypes.bool,
	onToggleFavObject: PropTypes.func,
};

ObjectListItem.defaultProps = {
	itemData: {},
	isFavourite: false,
	onToggleFavObject: () => {},
};

export default ObjectListItem;
