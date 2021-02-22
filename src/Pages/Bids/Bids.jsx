import React from "react";
import PropTypes from "prop-types";

import ErrorNotification from "../../Components/ErrorNotification";
import Loader from "../../Components/Preloaders/Loader";
import Heading from "../../Components/Heading";
import ScrollList from "../../Components/ScrollList";
import BidsListItem from "../../Components/BidsListItem";

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
      <Heading classname="mb-3">Все заявки</Heading>
      <ScrollList data={totalBids} chunkSize={15}>
        {(data) =>
          data.map(({ id, name, phone }) => (
            <BidsListItem key={id} id={id} name={name} phone={phone} />
          ))
        }
      </ScrollList>
    </div>
  );
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

export default Bids;
