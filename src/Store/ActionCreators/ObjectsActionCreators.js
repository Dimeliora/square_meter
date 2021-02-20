import Axios from "../../services/axios";

import {
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FETCH_ERROR,
  SETUP_FILTER,
  SET_TOTAL_OBJECTS,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  SET_CHOSEN_OBJECT,
} from "../ActionTypes/ObjectsActions";

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const toggleIsFetchError = (isFetchError) => ({
  type: TOGGLE_IS_FETCH_ERROR,
  isFetchError,
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

export const getInitData = () => async (dispatch) => {
  try {
    dispatch(toggleIsFetchError(false));
    dispatch(toggleIsFetching(true));

    const [filterSettings, totalObjects] = await Promise.all([
      Axios.get("/itemsinfo"),
      Axios.get("/items"),
    ]);

    dispatch(setupFilter(filterSettings));
    dispatch(setTotalObjects(totalObjects));
  } catch (err) {
    dispatch(toggleIsFetchError(true));
  } finally {
    dispatch(toggleIsFetching(false));
  }
};

export const getFilteredData = (filterValues) => async (dispatch) => {
  const params = Object.entries(filterValues).reduce((acc, [key, value]) => {
    const item = Array.isArray(value) ? value.join(",") : value;
    return item === "" ? acc : { ...acc, [key]: item };
  }, {});

  try {
    dispatch(toggleIsFetchError(false));
    dispatch(toggleIsFetching(true));

    const totalObjects = await Axios.get(`/items`, { params });

    dispatch(setTotalObjects(totalObjects));
  } catch (err) {
    dispatch(toggleIsFetchError(true));
  } finally {
    dispatch(toggleIsFetching(false));
  }
};

export const getChosenObject = (id) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchError(false));
    dispatch(toggleIsFetching(true));
    dispatch(setChosenObject(null));

    const chosenObject = await Axios.get(`/items/${id}`);

    dispatch(setChosenObject(chosenObject));
  } catch (err) {
    dispatch(toggleIsFetchError(true));
  } finally {
    dispatch(toggleIsFetching(false));
  }
};
