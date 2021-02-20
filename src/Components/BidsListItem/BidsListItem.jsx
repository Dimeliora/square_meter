import "./BidsListItem.css";

const BidsListItem = ({ id, name, phone }) => {
  return (
    <div className="bid-item">
      <div>{id}</div>
      <div className="bid-item__name">{name}</div>
      <div className="bid-item__phone">{phone}</div>
    </div>
  );
};

export default BidsListItem;
