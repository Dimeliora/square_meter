import {
  TOGGLE_IS_FETCHING,
  SETUP_FILTER,
  SET_TOTAL_OBJECTS,
  SET_FILTER_INPUT_VALUE,
  SET_INITIAL_FILTER_VALUES,
  SET_CHOSEN_OBJECT,
} from '../ActionTypes/ObjectsActions';

import initialFilterValues from '../../configs/initialFilterValues';

const initState = {
  isFetching: false,
  filterSettings: null,
  filterValues: initialFilterValues,
  totalObjects: [],
  chosenObject: null,
};

const objectsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SETUP_FILTER:
      return { ...state, filterSettings: action.filterSettings };

    case SET_INITIAL_FILTER_VALUES:
      return { ...state, filterValues: action.initialFilterValues };

    case SET_TOTAL_OBJECTS:
      return { ...state, totalObjects: action.totalObjects };

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

    case SET_CHOSEN_OBJECT:
      return { ...state, chosenObject: action.chosenObject };

    default:
      return state;
  }
};

export default objectsReducer;
