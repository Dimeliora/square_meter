import React from 'react';
import cn from 'classnames';

import priceNormalize from '../../utils/priceNormalize';

const FilterRange = (props) => {
  const {
    minPlaceholder = 0,
    maxPlaceholder = 0,
    minValue = 0,
    maxValue = 0,
    label = '',
    name = '',
    unitType = '',
    classname = '',
    onInputChange = () => {},
  } = props;

  return (
    <div className="filter__col">
      <div className="filter__label">{label}:</div>
      <div className="range__wrapper">
        <label className="range">
          <div className="range__label">от</div>
          <input
            min="0"
            type="number"
            name={`${name}min`}
            value={minValue}
            className={cn('range__input', classname)}
            placeholder={priceNormalize.format(minPlaceholder)}
            onChange={onInputChange}
          />
          <div className="range__value">{unitType}</div>
        </label>

        <label className="range">
          <div className="range__label">до</div>
          <input
            min="0"
            type="number"
            name={`${name}max`}
            value={maxValue}
            className={cn('range__input', classname)}
            placeholder={priceNormalize.format(maxPlaceholder)}
            onChange={onInputChange}
          />
          <div className="range__value">{unitType}</div>
        </label>
      </div>
    </div>
  );
};

export default React.memo(FilterRange);
