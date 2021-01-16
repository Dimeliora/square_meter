import {
  SETUP_FILTER,
  SET_TOTAL_OBJECTS,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  TOGGLE_IS_FETCHING,
} from "../ActionTypes/ObjectsActions";

import initialFilterValues from "../../Configs/initialFilterValues";

const initState = {
  filterSettings: null,
  filterValues: initialFilterValues,
  totalObjects: null,
  isFetching: true,
};

const objectsReducer = (state = initState, action) => {
  switch (action.type) {
    case SETUP_FILTER:
      return {
        ...state,
        filterSettings: action.filterSettings,
      };

    case SET_TOTAL_OBJECTS:
      return { ...state, totalObjects: action.totalObjects };

    case SET_FILTER_INPUT_VALUE:
      const [name, value] = action.filterInputValue;
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

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export default objectsReducer;
