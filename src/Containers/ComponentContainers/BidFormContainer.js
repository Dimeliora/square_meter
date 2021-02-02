import { connect } from 'react-redux';

import {
  setBidName,
  setBidPhone,
  setBidPolicyAgreement,
  sendBidData,
  resetBidCreateResponse,
  resetBidForm,
} from '../../Store/ActionCreators/BidsActionCreators';

import BidForm from '../../Components/BidForm';

const mapStateToProps = (state) => ({
  bidName: state.bids.bidName,
  bidPhone: state.bids.bidPhone,
  bidPolicyAgreement: state.bids.bidPolicyAgreement,
  bidIsFetching: state.bids.bidIsFetching,
  bidCreateMessage: state.bids.bidCreateMessage,
  bidCreateErrors: state.bids.bidCreateErrors,
});

const BidFormContainer = connect(mapStateToProps, {
  setBidName,
  setBidPhone,
  setBidPolicyAgreement,
  sendBidData,
  resetBidCreateResponse,
  resetBidForm,
})(BidForm);

export default BidFormContainer;
