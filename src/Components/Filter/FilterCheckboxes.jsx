import React from 'react';

const FilterCheckboxes = (props) => {
  const {
    values = [],
    checkedValues = [],
    onInputChange,
  } = props;

  const checkboxElements = values.map((el) => (
    <React.Fragment key={el}>
      <input
        type="checkbox"
        id={`rooms_${el}`}
        name="rooms"
        className="rooms__checkbox"
        value={el}
        checked={checkedValues.includes(el)}
        onChange={onInputChange}
      />
      <label htmlFor={`rooms_${el}`} className="rooms__btn">
        {el}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="filter__col rooms">
      <div className="filter__label">Комнат:</div>
      <div className="rooms__wrapper">{checkboxElements}</div>
    </div>
  );
};

export default FilterCheckboxes;
