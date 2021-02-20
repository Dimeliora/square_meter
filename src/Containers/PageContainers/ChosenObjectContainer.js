import { connect } from 'react-redux';

import { getChosenObject } from '../../Store/ActionCreators/ObjectsActionCreators';
import { toggleObjectAsFavourite } from '../../Store/ActionCreators/FavouritesActionCreators';

import ChosenObject from '../../Pages/ChosenObject';

const mapStateToProps = (state) => ({
  chosenObject: state.objects.chosenObject,
  isFetchError: state.objects.isFetchError,
  favouriteObjects: state.favourites.favourites,
});

export default connect(mapStateToProps, {
  getChosenObject,
  toggleObjectAsFavourite,
})(ChosenObject);
