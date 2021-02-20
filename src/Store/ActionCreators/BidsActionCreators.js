import Axios from "../../services/axios";

import {
	SET_BID_NAME,
	SET_BID_PHONE,
	SET_BID_POLICY_AGREEMENT,
	TOGGLE_IS_BID_FETCHING,
	SET_BID_CREATE_RESPONSE,
	RESET_BID_CREATE_RESPONSE,
	RESET_BID_FORM,
} from "../ActionTypes/BidsActions";

const toggleBidIsFetching = (isBidFetching) => ({
	type: TOGGLE_IS_BID_FETCHING,
	isBidFetching,
});

const setBidCreateResponse = ({ message, errors }) => ({
	type: SET_BID_CREATE_RESPONSE,
	bidCreateMessage: message,
	bidCreateErrors: errors,
});

export const setBidName = (bidName) => ({ type: SET_BID_NAME, bidName });

export const setBidPhone = (bidPhone) => ({ type: SET_BID_PHONE, bidPhone });

export const setBidPolicyAgreement = (bidPolicyAgreement) => ({
	type: SET_BID_POLICY_AGREEMENT,
	bidPolicyAgreement,
});

export const resetBidCreateResponse = () => ({
	type: RESET_BID_CREATE_RESPONSE,
});

export const resetBidForm = () => ({
	type: RESET_BID_FORM,
});

export const sendBidData = (bidData) => async (dispatch) => {
	try {
		dispatch(toggleBidIsFetching(true));

		const bidCreateResponse = await Axios.post("/bidnew", bidData);
    
		dispatch(setBidCreateResponse(bidCreateResponse));
	} catch (err) {
		console.error(err);
	} finally {
		dispatch(toggleBidIsFetching(false));
	}
};
