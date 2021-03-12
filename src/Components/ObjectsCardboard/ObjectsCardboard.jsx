import PropTypes from "prop-types";

import ObjectCard from "./Components/ObjectCard";

import "./ObjectsCardboard.scss";

const ObjectsCardboard = (props) => {
	const { totalObjects, favouriteObjects, onToggleFavObject } = props;

	const objectsCardboardItems = totalObjects.map((object) => {
		const id = object.id;
		const isFavourite = favouriteObjects.some((object) => object.id === id);

		return (
			<div
				key={id}
				className="col-12 col-md-6 col-xl-4 d-flex justify-content-center"
			>
				<ObjectCard
					itemData={object}
					isFavourite={isFavourite}
					onToggleFavObject={onToggleFavObject}
				/>
			</div>
		);
	});

	return (
		<div className="objects-cardboard">
			<div className="row">{objectsCardboardItems}</div>
		</div>
	);
};

ObjectsCardboard.propTypes = {
	totalObjects: PropTypes.array,
	favouriteObjects: PropTypes.array,
	onToggleFavObject: PropTypes.func,
};

ObjectsCardboard.defaultProps = {
	totalObjects: [],
	favouriteObjects: [],
	onToggleFavObject: () => {},
};

export default ObjectsCardboard;
