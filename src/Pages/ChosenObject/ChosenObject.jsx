import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import priceNormalize from "../../helpers/priceNormalize";

import Preloader from "../../Components/Preloaders/Loader";
import ErrorNotification from "../../Components/ErrorNotification";
import Heading from "../../Components/Heading";
import SingleObject from "../../Components/SingleObject";
import Modal from "../../Components/Modal";
import BidFormContainer from "../../Containers/ComponentContainers/BidFormContainer";

import "./ChosenObject.scss";

const ChosenObject = (props) => {
	const {
		isFetchError,
		chosenObject,
		favouriteObjects,
		getChosenObject,
		toggleObjectAsFavourite,
		match,
	} = props;

	const objectId = match.params.id;

	const [showModal, setShowModal] = React.useState(false);
	const [isReservationSucceed, setReservationSucceed] = React.useState(false);

	React.useLayoutEffect(() => {
		getChosenObject(objectId);
	}, [objectId, getChosenObject]);

	if (isFetchError) return <ErrorNotification />;

	if (!isFetchError && !chosenObject) return <Preloader />;

	const isObjectFound = chosenObject && Object.keys(chosenObject).length > 0;
	if (!isFetchError && !isObjectFound) return <Redirect to="/404" />;

	const { title, square, price_total: priceTotal } = chosenObject;

	const isFavourite = favouriteObjects.some((object) => object.id === objectId);

	const onCloseModal = () => {
		setShowModal(false);
	};

	const onShowModal = () => {
		setShowModal(true);
	};

	const onBidCreated = () => {
		setReservationSucceed(true);
		setTimeout(() => {
			setShowModal(false);
			setReservationSucceed(false);
		}, 2000);
	};

	let modalContent = isReservationSucceed ? (
		<div className="reservation-succeed-notice">
			Ваша заявка на бронирование успешно создана
		</div>
	) : (
		<BidFormContainer objectInfo={chosenObject} onBidCreated={onBidCreated} />
	);

	return (
		<div className="container">
			<div className="content-wrapper">
				<Heading>
					{title}, {square} м<sup>2</sup> за {priceNormalize.format(priceTotal)}{" "}
					₽
				</Heading>
				<SingleObject
					objectData={chosenObject}
					isFavourite={isFavourite}
					toggleObjectAsFavourite={toggleObjectAsFavourite}
					onReserve={onShowModal}
				/>
				<div className="back-to-results">
					<Link to="/objects" className="back-to-results__btn">
						← Вернуться к результатам поиска
					</Link>
				</div>
				{showModal && <Modal onClose={onCloseModal}>{modalContent}</Modal>}
			</div>
		</div>
	);
};

ChosenObject.propTypes = {
	chosenObject: PropTypes.object,
	favouriteObjects: PropTypes.array,
	match: PropTypes.object,
	getChosenObject: PropTypes.func,
	toggleObjectAsFavourite: PropTypes.func,
};

ChosenObject.defaultProps = {
	chosenObject: {},
	favouriteObjects: [],
	match: {},
	getChosenObject: () => {},
	toggleObjectAsFavourite: () => {},
};

export default ChosenObject;
