import { connect } from "react-redux";

import {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getObjectsData,
} from "../../Store/ActionCreators/ObjectsActionCreators";
import { toggleObjectAsFavourite } from "../../Store/ActionCreators/FavouritesActionCreators";

import Objects from "../../Pages/Objects";

const mapStateToProps = (state) => ({
  isFetching: state.objects.isFetching,
  isFetchError: state.objects.isFetchError,
  filterSettings: state.objects.filterSettings,
  totalObjects: state.objects.totalObjects,
  filterValues: state.objects.filterValues,
  favouriteObjects: state.favourites.favourites,
});

const mapDispatchToProps = {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getObjectsData,
  toggleObjectAsFavourite,
};

const ObjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Objects);

export default ObjectsContainer;
