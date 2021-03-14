import squareMeterService from "../../services/axios";

import {
  REQUEST_OBJECTS_DATA,
  GET_INIT_DATA_SUCCEDED,
  REQUEST_OBJECTS_DATA_FAILED,
  GET_FILTERED_DATA_SUCCEDED,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  REQUEST_CHOSEN_OBJECT,
  GET_CHOSEN_OBJECT_SUCCEDED,
} from "../ActionTypes/ObjectsActions";

const requestObjectsData = () => ({
  type: REQUEST_OBJECTS_DATA,
});

const requestChosenObject = () => ({
  type: REQUEST_CHOSEN_OBJECT,
});

const requestObjectsDataFailed = () => ({
  type: REQUEST_OBJECTS_DATA_FAILED,
});

const getInitDataSucceded = (filterSettings, totalObjects) => ({
  type: GET_INIT_DATA_SUCCEDED,
  payload: { filterSettings, totalObjects },
});

const getFilteredDataSucceded = (totalObjects) => ({
  type: GET_FILTERED_DATA_SUCCEDED,
  totalObjects,
});

const getChosenObjectSucceded = (chosenObject) => ({
  type: GET_CHOSEN_OBJECT_SUCCEDED,
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
    dispatch(requestObjectsData());

    const [filterSettings, totalObjects] = await Promise.all([
      squareMeterService.getItemsInfo(),
      squareMeterService.getItems(),
    ]);

    dispatch(getInitDataSucceded(filterSettings, totalObjects));
  } catch (err) {
    dispatch(requestObjectsDataFailed());
  }
};

export const getFilteredData = (filterValues) => async (dispatch) => {
  const params = Object.entries(filterValues).reduce((acc, [key, value]) => {
    const item = Array.isArray(value) ? value.join(",") : value;
    return item === "" ? acc : { ...acc, [key]: item };
  }, {});

  try {
    dispatch(requestObjectsData());

    const totalObjects = await squareMeterService.getItems(params);

    dispatch(getFilteredDataSucceded(totalObjects));
  } catch (err) {
    dispatch(requestObjectsDataFailed());
  }
};

export const getChosenObject = (id) => async (dispatch) => {
  try {
    dispatch(requestChosenObject());

    const chosenObject = await squareMeterService.getSingleItems(id);

    dispatch(getChosenObjectSucceded(chosenObject));
  } catch (err) {
    dispatch(requestObjectsDataFailed());
  }
};
