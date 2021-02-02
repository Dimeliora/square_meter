import {
  SET_BID_NAME,
  SET_BID_PHONE,
  SET_BID_POLICY_AGREEMENT,
  TOGGLE_BID_IS_FETCHING,
  SET_BID_CREATE_RESPONSE,
  RESET_BID_CREATE_RESPONSE,
  RESET_BID_FORM,
  SET_TOTAL_BIDS,
} from '../ActionTypes/BidsActions';

const initState = {
  bidName: '',
  bidPhone: '',
  bidPolicyAgreement: false,
  bidIsFetching: false,
  bidCreateMessage: null,
  bidCreateErrors: [],
  totalBids: [],
};

const bidsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_BID_NAME:
      return { ...state, bidName: action.bidName };

    case SET_BID_PHONE:
      return { ...state, bidPhone: action.bidPhone };

    case SET_BID_POLICY_AGREEMENT:
      return { ...state, bidPolicyAgreement: action.bidPolicyAgreement };

    case TOGGLE_BID_IS_FETCHING:
      return { ...state, bidIsFetching: action.bidIsFetching };

    case SET_BID_CREATE_RESPONSE:
      return {
        ...state,
        bidCreateMessage: action.bidCreateMessage,
        bidCreateErrors: action.bidCreateErrors,
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
        bidName: '',
        bidPhone: '',
        bidPolicyAgreement: false,
      };

    case SET_TOTAL_BIDS:
      return { ...state, totalBids: action.totalBids };
      
    default:
      return state;
  }
};

export default bidsReducer;
