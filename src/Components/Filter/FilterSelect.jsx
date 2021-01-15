const FilterSelect = ({ label, options = [] }) => {
  const selectOptionElements = options.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  return (
    <div className="filter__col">
      <div className="filter__label">{label}</div>
      <select id="complex-select" className="filter__dropdown">
        <option value="all" disabled hidden>Выберите</option>
        {selectOptionElements}
      </select>
    </div>
  );
};

export default FilterSelect;
