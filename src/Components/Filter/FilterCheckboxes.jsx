import React from 'react';
import cn from 'classnames';

const FilterCheckboxes = (props) => {
  const { values = [], checkedValues = [], onInputChange = () => {} } = props;

  const checkboxElements = values.map((el) => {
    const isChecked = checkedValues.includes(el);

    return (
      <React.Fragment key={el}>
        <input
          type="checkbox"
          id={`rooms_${el}`}
          name="rooms"
          className={cn('rooms__checkbox', {
            'rooms__checkbox--active': isChecked,
          })}
          value={el}
          checked={isChecked}
          onChange={onInputChange}
        />
        <label htmlFor={`rooms_${el}`} className="rooms__btn">
          {el}
        </label>
      </React.Fragment>
    );
  });

  return (
    <div className="filter__col rooms">
      <div className="filter__label">Комнат:</div>
      <div className="rooms__wrapper">{checkboxElements}</div>
    </div>
  );
};

export default React.memo(FilterCheckboxes);
