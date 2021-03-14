import { memo } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import LinearLoader from "../../../Preloaders/LinearLoader";

import "./FilterButtonsGroup.scss";

const FilterButtonsGroup = (props) => {
  const {
    isFetching,
    isFilterApplied,
    objectsAmount,
    onShowObjects,
    onResetForm,
  } = props;

  const handleSubmitBtnClick = (e) => {
    e.preventDefault();
    onShowObjects();
  };

  const showBtnLabel =
    objectsAmount > 0 ? `Показать (${objectsAmount})` : "Не найдено";

  const disableShowBtn = isFetching || objectsAmount === 0;

  return (
    <div className="filter__buttons">
      <button className="filter__reset" type="reset" onClick={onResetForm}>
        Сбросить
      </button>

      <button
        className={cn("filter__show", {
          "filter__show--active": !isFilterApplied,
        })}
        disabled={disableShowBtn}
        onClick={handleSubmitBtnClick}
      >
        {isFetching ? <LinearLoader /> : showBtnLabel}
      </button>
    </div>
  );
};

FilterButtonsGroup.propTypes = {
  isFetching: PropTypes.bool,
  isFilterApplied: PropTypes.bool,
  objectsAmount: PropTypes.number,
  onShowObjects: PropTypes.func,
  onResetForm: PropTypes.func,
};

FilterButtonsGroup.defaultProps = {
  isFetching: false,
  isFilterApplied: true,
  objectsAmount: 0,
  onShowObjects: () => {},
  onResetForm: () => {},
};

export default memo(FilterButtonsGroup);
