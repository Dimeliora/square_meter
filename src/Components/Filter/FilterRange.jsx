import cn from 'classnames';

const FilterRange = ({
  type = 'text',
  minValue = 0,
  startValue = 0,
  endValue = 0,
  label = '',
  unitType = '',
  classname = '',
}) => {
  return (
    <div className="filter__col">
      <div className="filter__label">{label}:</div>
      <div className="range__wrapper">
        <label className="range">
          <div className="range__label">
            от
          </div>
          <input
            min={minValue}
            type={type}
            className={cn('range__input', classname)}
            placeholder={startValue}
            // value={startValue}
          />
          <div className="range__value">{unitType}</div>
        </label>
        <label className="range">
          <div className="range__label">
            до
          </div>
          <input
            min={minValue}
            type={type}
            className={cn('range__input', classname)}
            placeholder={endValue}
            // value={endValue}
          />
          <div className="range__value">{unitType}</div>
        </label>
      </div>
    </div>
  );
};

export default FilterRange;
