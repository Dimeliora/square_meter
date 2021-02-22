import "./Favourites.css";
import PropTypes from "prop-types";

import Heading from "../../Components/Heading";
import ObjectsList from "../../Components/ObjectsList";

const Favourites = (props) => {
	const { favouriteObjects, toggleObjectAsFavourite } = props;

	const areFavouriteObjects = favouriteObjects.length > 0;

	const favouritesContent = (
		<div className="favourites-wrapper">
			<Heading classname="mb-3">Избранное</Heading>
			<ObjectsList
				totalObjects={favouriteObjects}
				favouriteObjects={favouriteObjects}
				onToggleFavObject={toggleObjectAsFavourite}
			/>
		</div>
	);

	const noFavouritesNotice = (
		<h3 className="favourites-empty-notice">
			В "Избранное" пока ничего не добавлено
		</h3>
	);

	return (
		<div className="container content-wrapper">
			{areFavouriteObjects ? favouritesContent : noFavouritesNotice}
		</div>
	);
};

Favourites.propTypes = {
	favouriteObjects: PropTypes.array,
	toggleObjectAsFavourite: PropTypes.func,
};

Favourites.defaultProps = {
	favouriteObjects: [],
	toggleObjectAsFavourite: () => {},
};

export default Favourites;
