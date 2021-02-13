import ObjectListItem from "./ObjectListItem";
import PropTypes from "prop-types";

const ObjectsList = (props) => {
	const { totalObjects, favouriteObjects, onToggleFavObject } = props;

	const objectsListItems = totalObjects.map((object) => {
		const id = object.id;
		const isFavourite = favouriteObjects.some((object) => object.id === id);

		return (
			<ObjectListItem
				key={id}
				itemData={object}
				isFavourite={isFavourite}
				onToggleFavObject={onToggleFavObject}
			/>
		);
	});

	return <div className="objects-list-wrapper">{objectsListItems}</div>;
};

ObjectsList.propTypes = {
	totalObjects: PropTypes.array,
	favouriteObjects: PropTypes.array,
	onToggleFavObject: PropTypes.func,
};

ObjectsList.defaultProps = {
	totalObjects: [],
	favouriteObjects: [],
	onToggleFavObject: () => {},
};

export default ObjectsList;
