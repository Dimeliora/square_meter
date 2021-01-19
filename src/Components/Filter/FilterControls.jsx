import cn from 'classnames';

import ButtonLoader from '../Preloaders/ButtonLoader';

const FilterControls = (props) => {
  const {
    isFetching = false,
    isFilterApplied = true,
    objectsAmount = 0,
    onShowObjects = () => {},
    onResetForm = () => {},
  } = props;

  const showBtnLabel = objectsAmount
    ? `Показать объекты (${objectsAmount})`
    : 'Ничего не найдено';

  const disableShowBtn = isFetching || objectsAmount === 0;

  return (
    <div className="filter__buttons">
      <button className="filter__reset" type="reset" onClick={onResetForm}>
        Сбросить фильтр
      </button>

      <button
        className={cn('filter__show', {
          'filter__show--active': !isFilterApplied,
        })}
        disabled={disableShowBtn}
        onClick={onShowObjects}
      >
        {isFetching ? <ButtonLoader /> : showBtnLabel}
      </button>
    </div>
  );
};

export default FilterControls;
