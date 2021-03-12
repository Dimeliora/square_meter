import Axios from "../../services/axios";

import {
  SET_BID_NAME,
  SET_BID_PHONE,
  SET_BID_POLICY_AGREEMENT,
  REQUEST_BIDS_DATA,
  REQUEST_BIDS_DATA_FAILED,
  SET_BID_CREATE_RESPONSE,
  RESET_BID_CREATE_RESPONSE,
  RESET_BID_FORM,
  SET_TOTAL_BIDS_SUCCEDED,
} from "../ActionTypes/BidsActions";

const requestBidsData = () => ({
  type: REQUEST_BIDS_DATA,
});

const requestBidsDataFailed = () => ({
  type: REQUEST_BIDS_DATA_FAILED,
});

const setBidCreateResponse = ({ message, errors }) => ({
  type: SET_BID_CREATE_RESPONSE,
  bidCreateMessage: message,
  bidCreateErrors: errors,
});

const setTotalBidsSucceded = (totalBids) => ({
  type: SET_TOTAL_BIDS_SUCCEDED,
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
    dispatch(requestBidsData());

    const bidCreateResponse = await Axios.post("/bidnew", bidData);

    dispatch(setBidCreateResponse(bidCreateResponse));
  } catch (err) {
    dispatch(requestBidsDataFailed());
  }
};

export const getBids = () => async (dispatch) => {
  try {
    dispatch(requestBidsData());

    const totalBids = await Axios.get("/bids");

    dispatch(setTotalBidsSucceded(totalBids));
  } catch (err) {
    dispatch(requestBidsDataFailed());
  }
};
