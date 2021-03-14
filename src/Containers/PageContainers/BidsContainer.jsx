import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBids } from "../../Store/ActionCreators/BidsActionCreators";

import ErrorNotification from "../../Components/ErrorNotification";
import Loader from "../../Components/Preloaders/Loader";
import Bids from "../../Pages/Bids";

const BidsContainer = ({ isBidFetchError, totalBids, getBids }) => {
  useEffect(() => {
    if (!totalBids) {
      getBids();
    }
  }, [totalBids, getBids]);

  if (isBidFetchError) {
    return <ErrorNotification />;
  }

  if (!isBidFetchError && !totalBids) {
    return <Loader />;
  }

  return <Bids totalBids={totalBids} />;
};

Bids.propTypes = {
  totalBids: PropTypes.array,
  isBidFetchError: PropTypes.bool,
  getBids: PropTypes.func,
};

Bids.defaultProps = {
  totalBids: [],
  isBidFetchError: false,
  getBids: () => {},
};

const mapStateToProps = (state) => ({
  isBidFetchError: state.bids.isBidFetchError,
  totalBids: state.bids.totalBids,
});

const mapDispatchToProps = { getBids };

export default connect(mapStateToProps, mapDispatchToProps)(BidsContainer);
