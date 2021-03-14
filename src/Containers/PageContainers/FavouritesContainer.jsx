import { connect } from "react-redux";

import { toggleObjectAsFavourite } from "../../Store/ActionCreators/FavouritesActionCreators";

import Favourites from "../../Pages/Favourites";

const mapStateToProps = (state) => ({
  favouriteObjects: state.favourites.favourites,
});

const mapDispatchToProps = {
  toggleObjectAsFavourite,
};

const FavouritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);

export default FavouritesContainer;
