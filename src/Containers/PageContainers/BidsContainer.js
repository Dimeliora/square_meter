import { connect } from "react-redux";

import { getBids } from "../../Store/ActionCreators/BidsActionCreators";

import Bids from "../../Pages/Bids";

const mapStateToProps = (state) => ({
  isBidFetchError: state.bids.isBidFetchError,
  totalBids: state.bids.totalBids,
});

const BidsContainer = connect(mapStateToProps, { getBids })(Bids);

export default BidsContainer;
