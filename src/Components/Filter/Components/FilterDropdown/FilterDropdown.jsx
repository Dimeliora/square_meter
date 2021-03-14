import {memo} from "react";
import PropTypes from "prop-types";

import "./FilterDropdown.scss";

const FilterDropdown = (props) => {
	const { value, options, onInputChange } = props;

	const selectOptionElements = options.map((el) => (
		<option key={el} value={el}>
			{el}
		</option>
	));

	return (
		<select
			name="complex"
			value={value}
			className="filter__dropdown"
			onChange={onInputChange}
		>
			<option value="">Выберите</option>
			{selectOptionElements}
		</select>
	);
};

FilterDropdown.propTypes = {
	value: PropTypes.string,
	options: PropTypes.array,
	onInputChange: PropTypes.func,
};

FilterDropdown.defaultProps = {
	value: "",
	options: [],
	onInputChange: () => {},
};

export default memo(FilterDropdown);
