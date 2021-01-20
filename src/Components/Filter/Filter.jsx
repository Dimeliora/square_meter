import React from 'react';

import FilterSelect from './FilterSelect';
import FilterCheckboxes from './FilterCheckboxes';
import FilterRange from './FilterRange';
import FilterControls from './FilterControls';

import './Filter.css';

const Filter = (props) => {
  const {
    isFetching = false,
    isFilterApplied = true,
    filterSettings = {},
    filterValues = {},
    totalObjectsAmount = 0,
    onFilterValuesChange = () => {},
    onApplyFilter = () => {},
    onResetFilter = () => {},
  } = props;

  const {
    squareMin = '',
    squareMax = '',
    priceMin = '',
    priceMax = '',
    complexNames = '',
    roomValues = [],
  } = filterSettings;

  const {
    complex = '',
    rooms = [],
    sqmin = '',
    sqmax = '',
    pricemin = '',
    pricemax = '',
  } = filterValues;

  const formRef = React.useRef();

  const onFormStateChange = React.useCallback((e) => {
    const { name, value } = e.target;
    onFilterValuesChange({ name, value });
  }, []);

  const onShowObjects = (e) => {
    e.preventDefault();
    onApplyFilter();
  };

  const onResetForm = () => {
    formRef.current.reset();
    onResetFilter();
  };

  return (
    <form ref={formRef}>
      <div className="filter">
        <FilterSelect
          value={complex}
          options={complexNames}
          onInputChange={onFormStateChange}
        />
        <FilterCheckboxes
          values={roomValues}
          checkedValues={rooms}
          onInputChange={onFormStateChange}
        />
        <FilterRange
          minPlaceholder={squareMin}
          maxPlaceholder={squareMax}
          minValue={sqmin}
          maxValue={sqmax}
          label="Площадь"
          name="sq"
          unitType="м2"
          onInputChange={onFormStateChange}
        />
        <FilterRange
          minPlaceholder={priceMin}
          maxPlaceholder={priceMax}
          minValue={pricemin}
          maxValue={pricemax}
          label="Стоимость"
          name="price"
          unitType="₽"
          classname="range__input--price"
          onInputChange={onFormStateChange}
        />
      </div>
      <FilterControls
        isFetching={isFetching}
        isFilterApplied={isFilterApplied}
        objectsAmount={totalObjectsAmount}
        onShowObjects={onShowObjects}
        onResetForm={onResetForm}
      />
    </form>
  );
};

export default Filter;
