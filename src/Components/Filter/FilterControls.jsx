import cn from "classnames";
import PropTypes from "prop-types";

import ButtonLoader from "../Preloaders/ButtonLoader";

const FilterControls = (props) => {
	const {
		isFetching,
		isFilterApplied,
		objectsAmount,
		onShowObjects,
		onResetForm,
	} = props;

	const showBtnLabel = objectsAmount
		? `Показать объекты (${objectsAmount})`
		: "Ничего не найдено";

	const disableShowBtn = isFetching || objectsAmount === 0;

	return (
		<div className="filter__buttons">
			<button className="filter__reset" type="reset" onClick={onResetForm}>
				Сбросить фильтр
			</button>

			<button
				className={cn("filter__show", {
					"filter__show--active": !isFilterApplied,
				})}
				disabled={disableShowBtn}
				onClick={onShowObjects}
			>
				{isFetching ? <ButtonLoader /> : showBtnLabel}
			</button>
		</div>
	);
};

FilterControls.propTypes = {
	isFetching: PropTypes.bool,
	isFilterApplied: PropTypes.bool,
	objectsAmount: PropTypes.number,
	onShowObjects: PropTypes.func,
	onResetForm: PropTypes.func,
};

FilterControls.defaultProps = {
	isFetching: false,
	isFilterApplied: true,
	objectsAmount: 0,
	onShowObjects: () => {},
	onResetForm: () => {},
};

export default FilterControls;
