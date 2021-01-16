import React from "react";

import initialFilterValues from "../../Configs/initialFilterValues";

import FilterSelect from "./FilterSelect";
import FilterCheckboxes from "./FilterCheckboxes";
import FilterRange from "./FilterRange";
import FilterControls from "./FilterControls";

import "./Filter.css";

const Filter = (props) => {
  const {
    filterSettings,
    filterValues,
    totalObjectsAmount,
    onFilterValuesChange,
    onApplyFilter,
    onResetFilter,
  } = props;

  const {
    squareMin,
    squareMax,
    priceMin,
    priceMax,
    complexNames,
    roomValues,
  } = filterSettings;

  const { complex, rooms, sqmin, sqmax, pricemin, pricemax } = filterValues;

  const formRef = React.useRef();

  const onFormStateChange = (e) => {
    const input = e.target;
    onFilterValuesChange([input.name, input.value]);
  };

  const onShowObjectsBtnClick = (e) => {
    e.preventDefault();
    onApplyFilter();
  };

  const onResetFormBtnClick = () => {
    formRef.current.reset();
    onResetFilter(initialFilterValues);
  };

  return (
    <form className="container p-0" id="filter-form" ref={formRef}>
      <div className="heading-1">Выбор квартир:</div>
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
        objectsAmount={totalObjectsAmount}
        onShowObjects={onShowObjectsBtnClick}
        onResetForm={onResetFormBtnClick}
      />
    </form>
  );
};

export default Filter;
