import {
  SET_BID_NAME,
  SET_BID_PHONE,
  SET_BID_POLICY_AGREEMENT,
  TOGGLE_BID_IS_FETCHING,
  SET_BID_CREATE_RESPONSE,
  RESET_BID_CREATE_RESPONSE,
  RESET_BID_FORM,
} from '../ActionTypes/BidsActions';

import BASE_URL from '../../Configs/Api';

const toggleBidIsFetching = (bidIsFetching) => ({
  type: TOGGLE_BID_IS_FETCHING,
  bidIsFetching,
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

export const sendBidData = (bidData) => (dispatch) => {
  dispatch(toggleBidIsFetching(true));
  fetch(`${BASE_URL}/bidnew`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(bidData),
  })
    .then((response) => response.json())
    .then((bidCreateResponse) => {
      dispatch(setBidCreateResponse(bidCreateResponse));
      dispatch(toggleBidIsFetching(false));
    });
};
