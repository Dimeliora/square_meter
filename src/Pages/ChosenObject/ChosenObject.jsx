import React from 'react';
import { Link } from 'react-router-dom';

import priceNormalize from '../../Utils/priceNormalize';

import Preloader from '../../Components/Preloaders/Loader';
import Heading from '../../Components/Heading';
import SingleObject from '../../Components/SingleObject';
import Modal from '../../Components/Modal';
import BidForm from '../../Components/BidForm';

import './ChosenObject.css';

const ChosenObject = (props) => {
  const {
    chosenObject,
    favouriteObjects,
    getChosenObject,
    toggleObjectAsFavourite,
    match: { params },
  } = props;

  const objectId = params.id;

  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getChosenObject(objectId);
  }, [objectId, getChosenObject]);

  if (!chosenObject) return <Preloader />;

  const { title, square, price_total: priceTotal } = chosenObject;

  const isFavourite = favouriteObjects.some((object) => object.id === objectId);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="container content-wrapper">
      <Heading>
        {title}, {square} м<sup>2</sup> за {priceNormalize.format(priceTotal)} ₽
      </Heading>

      <SingleObject
        objectData={chosenObject}
        isFavourite={isFavourite}
        toggleObjectAsFavourite={toggleObjectAsFavourite}
        onBook={onShowModal}
      />

      <div className="back-to-results">
        <Link to="/objects" className="back-to-results__btn">
          ← Вернуться к результатам поиска
        </Link>
      </div>

      {showModal && (
        <Modal onClose={onCloseModal}>
          <BidForm objectInfo={chosenObject} />
        </Modal>
      )}
    </div>
  );
};

export default ChosenObject;
