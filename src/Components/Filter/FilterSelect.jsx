import React from "react";
import PropTypes from "prop-types";

const FilterSelect = (props) => {
	const { value, options, onInputChange } = props;

	const selectOptionElements = options.map((el) => (
		<option key={el} value={el}>
			{el}
		</option>
	));

	return (
		<div className="filter__col">
			<div className="filter__label">Проект:</div>
			<select
				name="complex"
				value={value}
				className="filter__dropdown"
				onChange={onInputChange}
			>
				<option value="">Выберите</option>
				{selectOptionElements}
			</select>
		</div>
	);
};

FilterSelect.propTypes = {
	value: PropTypes.string,
	options: PropTypes.array,
	onInputChange: PropTypes.func,
};

FilterSelect.defaultProps = {
	value: "",
	options: [],
	onInputChange: () => {},
};

export default React.memo(FilterSelect);
