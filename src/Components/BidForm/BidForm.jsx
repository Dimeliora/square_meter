import './BidForm.css';

const BidForm = ({ objectInfo }) => {
  const {
    flat_number: flatNumber,
    complex_name: complexName,
    scu,
    building,
  } = objectInfo;

  return (
    <>
      <div className="modal__header">
        <div className="modal__title">Заявка на бронирование</div>
        <div className="modal__details">
          Квартира <span>{flatNumber}</span> в ЖК {complexName} Дом {building}
          <div className="modal__details-art">{scu}</div>
        </div>
      </div>
      <form className="modal__form">
        <div className="modal__form-content">
          <div className="formgroup">
            <label className="modal__form-input-label" htmlFor="form-name">
              Имя{' '}
            </label>
            <input
              type="text"
              id="form-name"
              className="modal__form-input"
              placeholder="Введите имя"
            />
          </div>
          <div className="formgroup">
            <label className="modal__form-input-label" htmlFor="form-phone">
              Телефон{' '}
            </label>
            <input
              type="text"
              id="form-phone"
              className="modal__form-input"
              placeholder="+7 (XXX) XXX-XX-XX"
            />
          </div>
          <div className="formgroup formgroup--checkbox">
            <input type="checkbox" id="policy" />
            <label className="policy-text" htmlFor="policy">
              Я согласен на обработку моих персональных данных. С Политикой в
              отношении обработки персональных данных ознакомлен и согласен.
            </label>
          </div>
        </div>
        <input
          className="modal__submit"
          type="submit"
          value="Отправить заявку"
          disabled
        />
      </form>
    </>
  );
};

export default BidForm;
