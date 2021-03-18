import squareMeterService from "../../services/axios";

import {
  REQUEST_OBJECTS_DATA,
  REQUEST_CHOSEN_OBJECT,
  REQUEST_DATA_FAILED,
  REQUEST_INIT_DATA_SUCCEDED,
  REQUEST_OBJECTS_DATA_SUCCEDED,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  REQUEST_CHOSEN_OBJECT_SUCCEDED,
} from "../ActionTypes/ObjectsActions";

const requestObjectsData = () => ({
  type: REQUEST_OBJECTS_DATA,
});

const requestChosenObject = () => ({
  type: REQUEST_CHOSEN_OBJECT,
});

const requestDataFailed = () => ({
  type: REQUEST_DATA_FAILED,
});

const requestInitDataSucceded = (filterSettings) => ({
  type: REQUEST_INIT_DATA_SUCCEDED,
  filterSettings,
});

const requestObjectsDataSucceded = (totalObjects) => ({
  type: REQUEST_OBJECTS_DATA_SUCCEDED,
  totalObjects,
});

const requestChosenObjectSucceded = (chosenObject) => ({
  type: REQUEST_CHOSEN_OBJECT_SUCCEDED,
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
    const filterSettings = await squareMeterService.getItemsInfo();

    dispatch(requestInitDataSucceded(filterSettings));
  } catch (err) {
    dispatch(requestDataFailed());
  }
};

export const getObjectsData = (filterValues) => async (dispatch) => {
  const params = Object.entries(filterValues).reduce((acc, [key, value]) => {
    const item = Array.isArray(value) ? value.join(",") : value;
    return item === "" ? acc : { ...acc, [key]: item };
  }, {});

  try {
    dispatch(requestObjectsData());

    const totalObjects = await squareMeterService.getItems(params);

    dispatch(requestObjectsDataSucceded(totalObjects));
  } catch (err) {
    dispatch(requestDataFailed());
  }
};

export const getChosenObject = (id) => async (dispatch) => {
  try {
    dispatch(requestChosenObject());

    const chosenObject = await squareMeterService.getSingleItem(id);

    dispatch(requestChosenObjectSucceded(chosenObject));
  } catch (err) {
    dispatch(requestDataFailed());
  }
};
