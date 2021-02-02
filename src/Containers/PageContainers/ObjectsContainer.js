import { connect } from 'react-redux';

import {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getFilteredData,
} from '../../Store/ActionCreators/ObjectsActionCreators';
import { toggleObjectAsFavourite } from '../../Store/ActionCreators/FavouritesActionCreators';

import Objects from '../../Pages/Objects';

const mapStateToProps = (state) => ({
  isFetching: state.objects.isFetching,
  filterSettings: state.objects.filterSettings,
  totalObjects: state.objects.totalObjects,
  filterValues: state.objects.filterValues,
  favouriteObjects: state.favourites.favourites,
});

const ObjectsContainer = connect(mapStateToProps, {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getFilteredData,
  toggleObjectAsFavourite,
})(Objects);

export default ObjectsContainer;
