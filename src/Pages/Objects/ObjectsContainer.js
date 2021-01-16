import { connect } from 'react-redux';

import {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getFilteredData,
} from '../../Store/ActionCreators/ObjectsActionCreators';

import Objects from './Objects';

const mapStateToProps = (state) => ({
  filterSettings: state.filterSettings,
  totalObjects: state.totalObjects,
  isFetching: state.isFetching,
  filterValues: state.filterValues,
});

const ObjectsContainer = connect(mapStateToProps, {
  getInitData,
  setFilterInputValue,
  setInitialFilterValues,
  getFilteredData,
})(Objects);

export default ObjectsContainer;
