import { connect } from "react-redux";

import { toggleObjectAsFavourite } from "../../Store/ActionCreators/FavouritesActionCreators";

import Favourites from "../../Pages/Favourites";

const mapStateToProps = (state) => ({
  favouriteObjects: state.favourites.favourites,
});

const FavouritesContainer = connect(mapStateToProps, {
  toggleObjectAsFavourite,
})(Favourites);

export default FavouritesContainer;
