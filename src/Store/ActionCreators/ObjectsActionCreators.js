import qs from 'query-string';

import BASE_URL from '../../Configs/Api';

import {
  TOGGLE_IS_FETCHING,
  SETUP_FILTER,
  SET_TOTAL_OBJECTS,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  SET_CHOSEN_OBJECT,
} from '../ActionTypes/ObjectsActions';

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const setupFilter = (filterSettings) => ({
  type: SETUP_FILTER,
  filterSettings,
});

const setTotalObjects = (totalObjects) => ({
  type: SET_TOTAL_OBJECTS,
  totalObjects,
});

const setChosenObject = (chosenObject) => ({
  type: SET_CHOSEN_OBJECT,
  chosenObject,
});

export const setInitialFilterValues = (initialFilterValues) => ({
  type: SET_INITIAL_FILTER_VALUES,
  initialFilterValues,
});

export const setFilterInputValue = (filterInputValue) => ({
  type: SET_FILTER_INPUT_VALUE,
  filterInputValue,
});

export const getInitData = () => (dispatch) => {
  dispatch(toggleIsFetching(true));

  const getFilterSettings = async () => {
    const response = await fetch(`${BASE_URL}/itemsinfo`);
    return response.json();
  };

  const getTotalObjects = async () => {
    const response = await fetch(`${BASE_URL}/items`);
    return response.json();
  };

  Promise.all([getFilterSettings(), getTotalObjects()]).then(
    ([filterSettings, totalObjects]) => {
      dispatch(setupFilter(filterSettings));
      dispatch(setTotalObjects(totalObjects));
      dispatch(toggleIsFetching(false));
    },
  );
};

export const getFilteredData = (filterValues) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  const queryString = qs.stringify(filterValues, {
    arrayFormat: 'comma',
    skipEmptyString: true,
  });

  fetch(`${BASE_URL}/items?${queryString}`)
    .then((response) => response.json())
    .then((totalObjects) => {
      dispatch(setTotalObjects(totalObjects));
      dispatch(toggleIsFetching(false));
    });
};

export const getChosenObject = (id) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setChosenObject(null));

  fetch(`${BASE_URL}/items/${id}`)
    .then((response) => response.json())
    .then((chosenObject) => {
      dispatch(setChosenObject(chosenObject));
      dispatch(toggleIsFetching(false));
    });
};
