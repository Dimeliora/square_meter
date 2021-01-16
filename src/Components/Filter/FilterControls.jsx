const FilterControls = ({ objectsAmount = 0, onShowObjects, onResetForm }) => {
  const showBtnLabel = objectsAmount
    ? `Показать объекты (${objectsAmount})`
    : "Объектов, удовлетворяющих условиям не найдено";

  const disableShowBtn = objectsAmount === 0;

  return (
    <div className="filter__buttons">
      <button
        className="filter__show"
        disabled={disableShowBtn}
        onClick={onShowObjects}
      >
        {showBtnLabel}
      </button>
      <button className="filter__reset" type="reset" onClick={onResetForm}>
        Сбросить фильтр
      </button>
    </div>
  );
};

export default FilterControls;
