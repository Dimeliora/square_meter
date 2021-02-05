import Axios from "../../services/axios";
import qs from "query-string";

import {
	TOGGLE_IS_FETCHING,
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
		dispatch(toggleIsFetching(true));

		const [filterSettings, totalObjects] = await Promise.all([
			Axios.get("/itemsinfo"),
			Axios.get("/items"),
		]);

		dispatch(setupFilter(filterSettings));
		dispatch(setTotalObjects(totalObjects));
	} catch (err) {
		console.error(err);
	} finally {
		dispatch(toggleIsFetching(false));
	}
};

export const getFilteredData = (filterValues) => async (dispatch) => {
	const queryString = qs.stringify(filterValues, {
		arrayFormat: "comma",
		skipEmptyString: true,
	});

	try {
		dispatch(toggleIsFetching(true));

		const totalObjects = await Axios.get(`/items?${queryString}`);

		dispatch(setTotalObjects(totalObjects));
	} catch (err) {
		console.error(err);
	} finally {
		dispatch(toggleIsFetching(false));
	}
};

export const getChosenObject = (id) => async (dispatch) => {
	try {
		dispatch(toggleIsFetching(true));
		dispatch(setChosenObject(null));

		const chosenObject = await Axios.get(`/items/${id}`);

		dispatch(setChosenObject(chosenObject));
	} catch (err) {
		console.error(err);
	} finally {
		dispatch(toggleIsFetching(false));
	}
};
