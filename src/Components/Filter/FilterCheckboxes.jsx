import React from 'react'

const FilterCheckboxes = ({ label, values = [] }) => {
  const checkboxElements = values.map((el) => (
    <React.Fragment key={el}>
      <input
        type="checkbox"
        id={`rooms_${el}`}
        className="rooms__checkbox"
        value={el}
      />
      <label htmlFor={`rooms_${el}`} className="rooms__btn">
        {el}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="filter__col rooms">
      <div className="filter__label">{label}</div>
      <div className="rooms__wrapper">{checkboxElements}</div>
    </div>
  );
};

export default FilterCheckboxes;
