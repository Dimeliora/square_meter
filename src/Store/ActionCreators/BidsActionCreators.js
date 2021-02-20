import Axios from "../../services/axios";

import {
  SET_BID_NAME,
  SET_BID_PHONE,
  SET_BID_POLICY_AGREEMENT,
  TOGGLE_IS_BID_FETCHING,
  TOGGLE_IS_BID_FETCH_ERROR,
  SET_BID_CREATE_RESPONSE,
  RESET_BID_CREATE_RESPONSE,
  RESET_BID_FORM,
  SET_TOTAL_BIDS,
} from "../ActionTypes/BidsActions";

const toggleIsBidFetching = (isBidFetching) => ({
  type: TOGGLE_IS_BID_FETCHING,
  isBidFetching,
});

const toggleIsBidFetchError = (isBidFetchError) => ({
  type: TOGGLE_IS_BID_FETCH_ERROR,
  isBidFetchError,
});

const setBidCreateResponse = ({ message, errors }) => ({
  type: SET_BID_CREATE_RESPONSE,
  bidCreateMessage: message,
  bidCreateErrors: errors,
});

const setBids = (totalBids) => ({
  type: SET_TOTAL_BIDS,
  totalBids,
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
    dispatch(toggleIsBidFetching(true));

    const bidCreateResponse = await Axios.post("/bidnew", bidData);

    dispatch(setBidCreateResponse(bidCreateResponse));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(toggleIsBidFetching(false));
  }
};

export const getBids = () => async (dispatch) => {
  try {
    dispatch(toggleIsBidFetchError(false));
    dispatch(toggleIsBidFetching(true));

    const totalBids = await Axios.get("/bids");

    dispatch(setBids(totalBids));
  } catch (err) {
    dispatch(toggleIsBidFetchError(true));
  } finally {
    dispatch(toggleIsBidFetching(false));
  }
};
