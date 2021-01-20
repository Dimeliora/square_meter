import { Link } from 'react-router-dom';
import cn from 'classnames';

import priceNormalize from '../../../Utils/priceNormalize';

import './ObjectListItem.css';

const ObjectListItem = (props) => {
  const {
    itemData = {},
    isFavourite = false,
    onToggleFavObject = () => {},
  } = props;

  const {
    id = '',
    scu = '',
    complex_name: complexName = '',
    square = '',
    price_sq_m: priceSqMin = '',
    price_total: priceTotal = '',
    building = '',
    floor = '',
    rooms = '',
  } = itemData;

  const onFavouriteClick = (e) => {
    e.preventDefault();
    onToggleFavObject(itemData);
  };

  return (
    <Link to={`/objects/${id}`} className="panel">
      <div className="panel__item-num">{scu}</div>
      <div className="panel__name">ЖК {complexName}</div>
      <div className="panel__block">{building}</div>
      <div className="panel__floor">{floor}</div>
      <div className="panel__rooms">{rooms}</div>
      <div className="panel__sq">
        {square} м<sup>2</sup>
      </div>
      <div className="panel__price-per-m">
        {priceNormalize.format(priceSqMin)} ₽
      </div>
      <div className="panel__price">{priceNormalize.format(priceTotal)} ₽</div>
      <div className="panel__favourite">
        <div
          className={cn('card__like', { 'card__like--active': isFavourite })}
          onClick={onFavouriteClick}
        >
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </Link>
  );
};

export default ObjectListItem;
