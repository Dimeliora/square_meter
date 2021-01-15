import React from 'react';

import FilterSelect from './FilterSelect';
import FilterCheckboxes from './FilterCheckboxes';
import FilterRange from './FilterRange';
import FilterControls from './FilterControls';

import './Filter.css';

const initFilterState = {
  priceMin: 0,
  priceMax: 0,
  squareMin: 0,
  squareMax: 0,
  complexNames: [],
  roomValues: [],
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'GET_INIT_VALUES':
      return action.data;
    default:
      return state;
  }
};

const Filter = () => {
  const [state, dispatch] = React.useReducer(filterReducer, initFilterState);

  React.useEffect(() => {
    fetch('http://jsproject.webcademy.ru/itemsinfo')
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: 'GET_INIT_VALUES', data }));
  }, []);

  const {
    priceMin,
    priceMax,
    squareMin,
    squareMax,
    complexNames,
    roomValues,
  } = state;

  return (
    <form className="container p-0" id="filter-form">
      <div className="heading-1">Выбор квартир:</div>
      <div className="filter">
        <FilterSelect label="Проект:" options={complexNames} />
        <FilterCheckboxes label="Комнат:" values={roomValues} />
        <FilterRange
          type="number"
          startValue={squareMin}
          endValue={squareMax}
          label="Площадь"
          unitType="м2"
        />
        <FilterRange
          type="number"
          startValue={priceMin}
          endValue={priceMax}
          label="Стоимость"
          unitType="₽"
          classname="range__input--price"
        />
      </div>
      <FilterControls objectsAmount={12} />
    </form>
  );
};

export default Filter;
