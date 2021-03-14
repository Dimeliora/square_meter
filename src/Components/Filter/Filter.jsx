import { useCallback } from "react";
import PropTypes from "prop-types";

import FilterDropdown from "./Components/FilterDropdown";
import FilterCheckboxGroup from "./Components/FilterCheckboxGroup";
import FilterRangeGroup from "./Components/FilterRangeGroup";
import FilterButtonsGroup from "./Components/FilterButtonsGroup";

import "./Filter.scss";

const Filter = (props) => {
  const {
    isFetching,
    isFilterApplied,
    filterSettings,
    filterValues,
    totalObjectsAmount,
    onFilterValuesChange,
    onApplyFilter,
    onResetFilter,
  } = props;

  const {
    squareMin = "",
    squareMax = "",
    priceMin = "",
    priceMax = "",
    complexNames = "",
    roomValues = [],
  } = filterSettings;

  const {
    complex = "",
    rooms = [],
    sqmin = "",
    sqmax = "",
    pricemin = "",
    pricemax = "",
  } = filterValues;

  const onFormStateChange = useCallback((e) => {
    const { name, value } = e.target;
    onFilterValuesChange({ name, value });
  }, []);

  const onShowObjects = useCallback(() => {
    onApplyFilter();
  }, []);

  const onResetForm = useCallback(() => {
    onResetFilter();
  }, []);

  return (
    <form className="filter">
      <div className="filter__wrapper">
        <div className="filter__col">
          <div className="filter__label">Проект:</div>
          <FilterDropdown
            value={complex}
            options={complexNames}
            onInputChange={onFormStateChange}
          />
        </div>
        <div className="filter__col">
          <div className="filter__label">Комнат:</div>
          <FilterCheckboxGroup
            values={roomValues}
            checkedValues={rooms}
            onInputChange={onFormStateChange}
          />
        </div>
        <div className="filter__col">
          <div className="filter__label">Площадь:</div>
          <FilterRangeGroup
            minPlaceholder={squareMin}
            maxPlaceholder={squareMax}
            minValue={sqmin}
            maxValue={sqmax}
            name="sq"
            unitType="м2"
            onInputChange={onFormStateChange}
          />
        </div>
        <div className="filter__col">
          <div className="filter__label">Стоимость:</div>
          <FilterRangeGroup
            minPlaceholder={priceMin}
            maxPlaceholder={priceMax}
            minValue={pricemin}
            maxValue={pricemax}
            name="price"
            unitType="₽"
            classname="price"
            onInputChange={onFormStateChange}
          />
        </div>
      </div>
      <FilterButtonsGroup
        isFetching={isFetching}
        isFilterApplied={isFilterApplied}
        objectsAmount={totalObjectsAmount}
        onShowObjects={onShowObjects}
        onResetForm={onResetForm}
      />
    </form>
  );
};

Filter.propTypes = {
  isFetching: PropTypes.bool,
  isFilterApplied: PropTypes.bool,
  filterSettings: PropTypes.object,
  filterValues: PropTypes.object,
  totalObjectsAmount: PropTypes.number,
  onFilterValuesChange: PropTypes.func,
  onApplyFilter: PropTypes.func,
  onResetFilter: PropTypes.func,
};

Filter.defaultProps = {
  isFetching: false,
  isFilterApplied: true,
  filterSettings: {},
  filterValues: {},
  totalObjectsAmount: 0,
  onFilterValuesChange: () => {},
  onApplyFilter: () => {},
  onResetFilter: () => {},
};

export default Filter;
