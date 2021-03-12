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

const initState = {
  bidName: "",
  bidPhone: "",
  bidPolicyAgreement: false,
  isBidFetching: false,
  isBidFetchError: false,
  bidCreateMessage: null,
  bidCreateErrors: [],
  totalBids: null,
};

const bidsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_BID_NAME:
      return { ...state, bidName: action.bidName };

    case SET_BID_PHONE:
      return { ...state, bidPhone: action.bidPhone };

    case SET_BID_POLICY_AGREEMENT:
      return { ...state, bidPolicyAgreement: action.bidPolicyAgreement };

    case REQUEST_BIDS_DATA:
      return { ...state, isBidFetching: true, isBidFetchError: false };

    case REQUEST_BIDS_DATA_FAILED:
      return { ...state, isBidFetching: false, isBidFetchError: true };

    case SET_BID_CREATE_RESPONSE:
      return {
        ...state,
        bidCreateMessage: action.bidCreateMessage,
        bidCreateErrors: action.bidCreateErrors,
        isBidFetching: false,
      };

    case RESET_BID_CREATE_RESPONSE:
      return {
        ...state,
        bidCreateMessage: null,
        bidCreateErrors: [],
      };

    case RESET_BID_FORM:
      return {
        ...state,
        bidName: "",
        bidPhone: "",
        bidPolicyAgreement: false,
      };

    case SET_TOTAL_BIDS_SUCCEDED:
      return { ...state, totalBids: action.totalBids, isBidFetching: false };

    default:
      return state;
  }
};

export default bidsReducer;
