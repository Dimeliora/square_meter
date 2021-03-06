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

import INITIAL_FILTER_VALUES from "../../configs/initialFilterValues";

const initState = {
  isFetching: false,
  isFetchError: false,
  filterSettings: null,
  filterValues: INITIAL_FILTER_VALUES,
  totalObjects: null,
  chosenObject: null,
};

const objectsReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_OBJECTS_DATA:
      return { ...state, isFetching: true, isFetchError: false };

    case REQUEST_CHOSEN_OBJECT:
      return {
        ...state,
        isFetching: true,
        isFetchError: false,
        chosenObject: null,
      };

    case REQUEST_DATA_FAILED:
      return { ...state, isFetching: false, isFetchError: true };

    case REQUEST_INIT_DATA_SUCCEDED:
      return {
        ...state,
        filterSettings: action.filterSettings,
      };

    case REQUEST_OBJECTS_DATA_SUCCEDED:
      return { ...state, totalObjects: action.totalObjects, isFetching: false };

    case SET_FILTER_INPUT_VALUE:
      const { name, value } = action.filterInputValue;
      const currentFilterInputValue = state.filterValues[name];
      if (Array.isArray(currentFilterInputValue)) {
        const currentInputArray = currentFilterInputValue.includes(value)
          ? currentFilterInputValue.filter((item) => item !== value)
          : [...currentFilterInputValue, value];
        return {
          ...state,
          filterValues: { ...state.filterValues, [name]: currentInputArray },
        };
      }
      return {
        ...state,
        filterValues: { ...state.filterValues, [name]: value },
      };

    case SET_INITIAL_FILTER_VALUES:
      return { ...state, filterValues: action.initialFilterValues };

    case REQUEST_CHOSEN_OBJECT_SUCCEDED:
      return { ...state, chosenObject: action.chosenObject, isFetching: false };

    default:
      return state;
  }
};

export default objectsReducer;
