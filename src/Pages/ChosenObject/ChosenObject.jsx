import React from 'react';
import { Link } from 'react-router-dom';
// import cn from 'classnames';

import priceNormalize from '../../Utils/priceNormalize';

import Preloader from '../../Components/Preloaders/Loader';

import './ChosenObject.css';

const ChosenObject = (props) => {
  const {
    chosenObject,
    getChosenObject,
    match: { params },
  } = props;

  React.useEffect(() => {
    getChosenObject(params.id);
  }, [params.id, getChosenObject]);

  if (!chosenObject) return <Preloader />;

  const {
    // id,
    scu,
    title,
    complex_name: complexName,
    building,
    flat_number: flatNumber,
    floor,
    floors_total: floorsTotal,
    rooms,
    square,
    price_sq_m: priceSqM,
    price_total: priceTotal,
    image,
  } = chosenObject;

  return (
    <div className="container p-0 pt-3">
      <div className="heading-1">
        {title}, {square} м<sup>2</sup> за {priceNormalize.format(priceTotal)} ₽
      </div>

      <div className="object">
        <div className="object__photo">
          <div className="object__photo-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="object__desc">
          <div className="object__desc-sector">ЖК {complexName}</div>
          <div className="object__desc-name">
            <div className="object__desc-title">{title}</div>
            <div className="object__desc-art">{scu}</div>
            <button className="button-favourite" id="btn-add-favourite">
              <i className="fas fa-heart"></i> <span>В ИЗБРАННОЕ</span>
            </button>
          </div>
          <div className="object__desc-details">
            <div className="params">
              <div className="params__item">
                <div className="params__definition">Корпус</div>
                <div className="params__value">{building}</div>
              </div>
              <div className="params__item">
                <div className="params__definition">Этаж</div>
                <div className="params__value">
                  {floor} из {floorsTotal}
                </div>
              </div>
              <div className="params__item">
                <div className="params__definition">Номер</div>
                <div className="params__value">{flatNumber}</div>
              </div>
              <div className="params__item">
                <div className="params__definition">Комнат</div>
                <div className="params__value">{rooms}</div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details__row">
              <div className="details__name">Стоимость</div>
              <div className="details__value details__value--price">
                {priceNormalize.format(priceTotal)} ₽
              </div>
            </div>
            <div className="details__row">
              <div className="details__name">
                Цена за м<sup>2</sup>
              </div>
              <div className="details__value">
                {priceNormalize.format(priceSqM)} ₽ / м<sup>2</sup>
              </div>
            </div>
            <div className="details__row">
              <div className="details__name">Площадь</div>
              <div className="details__value">
                {square} м<sup>2</sup>
              </div>
            </div>
          </div>
          <button className="button-order" id="book-button">
            Забронировать
          </button>
        </div>
      </div>

      <div className="back-to-results">
        <Link to="/objects" className="back-to-results__btn">
          ← Вернуться к результатам поиска
        </Link>
      </div>
    </div>
  );
};

export default ChosenObject;
