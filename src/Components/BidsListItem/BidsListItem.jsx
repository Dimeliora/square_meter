import PropTypes from "prop-types";

import "./BidsListItem.scss";

const BidsListItem = ({ id, name, phone }) => {
  return (
    <div className="bid-item">
      <div className="bid-item__number">{id}</div>
      <div className="bid-item__name">{name}</div>
      <div className="bid-item__phone">{phone}</div>
    </div>
  );
};

BidsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

BidsListItem.defaultProps = {
  id: "",
  name: "",
  phone: "",
};

export default BidsListItem;
