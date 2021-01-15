import declension from '../../Utils/declension';

const FilterControls = ({ objectsAmount = 0 }) => {
  const btnLabelForms = {
    1: 'объект',
    '2-4': 'объекта',
    '11-14': 'объектов',
  };
  const showBtnLabel = objectsAmount
    ? `Показать ${objectsAmount} ${declension(objectsAmount, btnLabelForms)}`
    : 'Объектов, удовлетворяющих условиям не найдено';

  return (
    <div className="filter__buttons">
      <button className="filter__show" id="show-button">
        {showBtnLabel}
      </button>
      <button className="filter__reset" type="reset">
        Сбросить фильтр
      </button>
    </div>
  );
};

export default FilterControls;
