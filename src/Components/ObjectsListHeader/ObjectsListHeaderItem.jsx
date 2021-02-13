import cn from "classnames";
import PropTypes from "prop-types";

const ObjectsListHeaderItem = (props) => {
	const {
		label,
		classname,
		sorterName,
		isSortable,
		isAscending,
		activeSorter,
		onSortObjects,
	} = props;

	const IsItemAnActiveSorter = activeSorter === sorterName;
	const isCurrentAscending = IsItemAnActiveSorter ? isAscending : true;

	const onSortByItem = () => {
		isSortable && onSortObjects({ sorterName, isCurrentAscending });
	};

	return (
		<div className={cn("panels-sorter__element", classname)}>
			<div
				className={cn("panels-sorter__title", {
					"no-sorter": !isSortable,
					"sorter-up": isSortable && isCurrentAscending,
					"sorter-down": isSortable && !isCurrentAscending,
					"sorter--active": isSortable && IsItemAnActiveSorter,
				})}
				onClick={onSortByItem}
			>
				{label}
			</div>
		</div>
	);
};

ObjectsListHeaderItem.propTypes = {
	label: PropTypes.string,
	classname: PropTypes.string,
	sorterName: PropTypes.string,
	isSortable: PropTypes.bool,
	isAscending: PropTypes.bool,
	activeSorter: PropTypes.string,
	onSortObjects: PropTypes.func,
};

ObjectsListHeaderItem.defaultProps = {
	label: "",
	classname: "",
	sorterName: "",
	isSortable: false,
	isAscending: true,
	activeSorter: "",
	onSortObjects: () => {},
};

export default ObjectsListHeaderItem;
