import React from 'react';
import cn from 'classnames';

import ButtonLoader from '../Preloaders/ButtonLoader';

import './BidForm.css';

const BidForm = (props) => {
  const {
    objectInfo,
    bidName,
    bidPhone,
    bidPolicyAgreement,
    bidIsFetching,
    bidCreateMessage,
    bidCreateErrors,
    onBidCreated,
    setBidName,
    setBidPhone,
    setBidPolicyAgreement,
    sendBidData,
    resetBidCreateResponse,
    resetBidForm,
  } = props;

  const {
    flat_number: flatNumber,
    complex_name: complexName,
    scu,
    building,
  } = objectInfo;

  React.useEffect(() => {
    if (bidCreateMessage === 'Bid Created') {
      onBidCreated();
      resetBidCreateResponse();
      resetBidForm();
    }
  }, [bidCreateMessage, onBidCreated, resetBidCreateResponse, resetBidForm]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setBidName(value);
    }
    if (name === 'phone') {
      setBidPhone(value);
    }
  };

  const onCheckboxChange = ({ target: { checked } }) => {
    setBidPolicyAgreement(checked);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    sendBidData({ name: bidName, phone: bidPhone });
  };

  let isInvalidName = false;
  let isInvalidPhone = false;
  if (bidCreateErrors) {
    isInvalidName = bidCreateErrors.some((msg) => msg.includes('Имя'));
    isInvalidPhone = bidCreateErrors.some((msg) => msg.includes('Телефон'));
  }

  return (
    <div className="bids-modal">
      <div className="bids-modal-header">
        <div className="bids-modal-header__title">Заявка на бронирование</div>
        <div className="bids-modal-header__details">
          Квартира <span>{flatNumber}</span> в ЖК {complexName} Дом {building}
          <div className="bids-modal-header__details-art">{scu}</div>
        </div>
      </div>

      <form className="bids-modal-form" noValidate onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="form-name" className="bids-modal-form__input-label">
            Имя
          </label>
          <input
            type="text"
            className={cn('form-control', 'bids-modal-form__input', {
              'is-invalid': isInvalidName,
            })}
            id="form-name"
            value={bidName}
            placeholder="Введите имя"
            name="name"
            disabled={bidIsFetching}
            onChange={onInputChange}
          />
          <div className="invalid-feedback">Пожалуйста, введите имя</div>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="form-phone" className="bids-modal-form__input-label">
            Телефон
          </label>
          <input
            type="text"
            className={cn('form-control', 'bids-modal-form__input', {
              'is-invalid': isInvalidPhone,
            })}
            id="form-phone"
            value={bidPhone}
            placeholder="+7 (XXX) XXX-XX-XX"
            name="phone"
            disabled={bidIsFetching}
            onChange={onInputChange}
          />
          <div className="invalid-feedback">
            Пожалуйста, введите номер телефона
          </div>
        </div>

        <div className="form-check mt-5 bids-modal-form__policy">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="form-policy"
            onChange={onCheckboxChange}
            checked={bidPolicyAgreement}
            disabled={bidIsFetching}
          />
          <label
            className="form-check-label bids-modal-form__policy-label"
            htmlFor="form-policy"
          >
            Я согласен на обработку моих персональных данных. С Политикой в
            отношении обработки персональных данных ознакомлен и согласен.
          </label>
          <div className="invalid-feedback bids-modal-form__policy-invalid">
            Пожалуйста, подтвердите согласие на обработку ваших данных
          </div>
        </div>

        <button
          type="submit"
          className="bids-modal-form__submit"
          disabled={bidIsFetching || !bidPolicyAgreement}
        >
          {bidIsFetching ? <ButtonLoader /> : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
};

export default BidForm;
