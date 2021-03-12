import cn from "classnames";
import PropTypes from "prop-types";

import "./ObjectsSortItem.scss";

const ObjectsListHeaderItem = (props) => {
	const { label, sorterName, isAscending, activeSorter, onSortObjects } = props;

	const IsItemAnActiveSorter = activeSorter === sorterName;
	const isCurrentAscending = IsItemAnActiveSorter ? isAscending : true;

	const onSortByItem = () => {
		onSortObjects(sorterName);
	};

	return (
		<div
			className={cn("objects-sorter-item", {
				"objects-sorter-item--active": IsItemAnActiveSorter,
			})}
			onClick={onSortByItem}
		>
			<div
				className={cn("objects-sorter-item__label", {
					"objects-sorter-item__label--down": !isCurrentAscending,
				})}
			>
				{label}
			</div>
		</div>
	);
};

ObjectsListHeaderItem.propTypes = {
	label: PropTypes.string,
	sorterName: PropTypes.string,
	isAscending: PropTypes.bool,
	activeSorter: PropTypes.string,
	onSortObjects: PropTypes.func,
};

ObjectsListHeaderItem.defaultProps = {
	label: "",
	sorterName: "",
	isAscending: true,
	activeSorter: "",
	onSortObjects: () => {},
};

export default ObjectsListHeaderItem;
