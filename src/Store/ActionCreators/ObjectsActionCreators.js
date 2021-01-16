import qs from "query-string";

import BASE_URL from "../../Configs/Api";

import {
  SETUP_FILTER,
  SET_TOTAL_OBJECTS,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  TOGGLE_IS_FETCHING,
} from "../ActionTypes/ObjectsActions";

const setupFilter = (filterSettings) => ({
  type: SETUP_FILTER,
  filterSettings,
});

const setTotalObjects = (totalObjects) => ({
  type: SET_TOTAL_OBJECTS,
  totalObjects,
});

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setFilterInputValue = (filterInputValue) => ({
  type: SET_FILTER_INPUT_VALUE,
  filterInputValue,
});

export const setInitialFilterValues = (initialFilterValues) => ({
  type: SET_INITIAL_FILTER_VALUES,
  initialFilterValues,
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
    }
  );
};

export const getFilteredData = (filterValues) => (dispatch) => {
  const queryString = qs.stringify(filterValues, {
    arrayFormat: "comma",
    skipEmptyString: true,
  });
  fetch(`${BASE_URL}/items?${queryString}`)
    .then((response) => response.json())
    .then((totalObjects) => dispatch(setTotalObjects(totalObjects)));
};
