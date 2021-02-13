import React from "react";
import PropTypes from "prop-types";

import ObjectsListHeaderItem from "./ObjectsListHeaderItem";

import "./ObjectsListHeader.css";

const ObjectsListHeader = (props) => {
	const { activeSorter, isAscending, onSortObjects } = props;

	return (
		<div className="panels-sorter">
			<ObjectsListHeaderItem
				label="Артикул"
				classname="panels-sorter__item-num"
			/>
			<ObjectsListHeaderItem label="ЖК" classname="panels-sorter__name" />
			<ObjectsListHeaderItem label="Корпус" classname="panels-sorter__block" />
			<ObjectsListHeaderItem label="Этаж" classname="panels-sorter__floor" />
			<ObjectsListHeaderItem
				label="Комнат"
				classname="panels-sorter__rooms"
				sorterName="rooms"
				isAscending={isAscending}
				isSortable
				activeSorter={activeSorter}
				onSortObjects={onSortObjects}
			/>
			<ObjectsListHeaderItem
				label="Площадь"
				classname="panels-sorter__sq"
				sorterName="square"
				isAscending={isAscending}
				isSortable
				activeSorter={activeSorter}
				onSortObjects={onSortObjects}
			/>
			<ObjectsListHeaderItem
				label="Цена за м2"
				classname="panels-sorter__price-per-m"
				sorterName="price_sq_m"
				isAscending={isAscending}
				isSortable
				activeSorter={activeSorter}
				onSortObjects={onSortObjects}
			/>
			<ObjectsListHeaderItem
				label="Стоимость"
				classname="panels-sorter__price_total"
				sorterName="price_total"
				isAscending={isAscending}
				isSortable
				activeSorter={activeSorter}
				onSortObjects={onSortObjects}
			/>
			<ObjectsListHeaderItem
				label="Избранное"
				classname="panels-sorter__favourite"
			/>
		</div>
	);
};

ObjectsListHeader.propTypes = {
	activeSorter: PropTypes.string,
	isAscending: PropTypes.bool,
	onSortObjects: PropTypes.func,
};

ObjectsListHeader.defaultProps = {
	activeSorter: "",
	isAscending: true,
	onSortObjects: () => {},
};

export default React.memo(ObjectsListHeader);
