import PropTypes from "prop-types";

import Heading from "../../Components/Heading";
import ScrollList from "../../Components/ScrollList";
import BidsListItem from "../../Components/BidsListItem";

import "./Bids.scss";

const Bids = ({ totalBids }) => {
  return (
    <section className="bids">
      <div className="container">
        <div className="content-wrapper">
          <Heading>Заявки</Heading>
          <div className="bids-wrapper">
            <ScrollList data={totalBids} chunkSize={15}>
              {(data) =>
                data.map(({ id, name, phone }) => (
                  <BidsListItem key={id} id={id} name={name} phone={phone} />
                ))
              }
            </ScrollList>
          </div>
        </div>
      </div>
    </section>
  );
};

Bids.propTypes = {
  totalBids: PropTypes.array,
};

Bids.defaultProps = {
  totalBids: [],
};

export default Bids;
