import React from "react";
import PropTypes from "prop-types";

import Heading from "../../Components/Heading";
import BidsListItem from "../../Components/BidsListItem";
import Loader from "../../Components/Preloaders/Loader";
import ErrorNotification from "../../Components/ErrorNotification";

import "./Bids.css";

const Bids = ({ isBidFetchError, totalBids, getBids }) => {
  React.useEffect(() => {
    if (!totalBids) {
      getBids();
    }
  }, [totalBids, getBids]);

  if (isBidFetchError) return <ErrorNotification />;

  if (!isBidFetchError && !totalBids) return <Loader />;

  return (
    <div className="container content-wrapper">
      <Heading>Все заявки</Heading>
      <div className="bids-wrapper">
        {totalBids.map(({ id, name, phone }) => (
          <BidsListItem key={id} id={id} name={name} phone={phone} />
        ))}
      </div>
    </div>
  );
};

Bids.propTypes = {
  totalBids: PropTypes.array,
};

Bids.defaultProps = {
  totalBids: [],
};

export default Bids;
