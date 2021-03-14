import {memo} from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./FilterCheckboxGroup.scss";

const FilterCheckboxGroup = (props) => {
	const { values, checkedValues, onInputChange } = props;

	const checkboxElements = values.map((el) => {
		const isChecked = checkedValues.includes(el);

		return (
			<div key={el} className="filter__rooms-item">
				<input
					type="checkbox"
					id={`rooms_${el}`}
					name="rooms"
					className={cn("filter__rooms-checkbox", {
						"filter__rooms-checkbox--active": isChecked,
					})}
					value={el}
					checked={isChecked}
					onChange={onInputChange}
				/>
				<label htmlFor={`rooms_${el}`} className="filter__rooms-btn">
					{el}
				</label>
			</div>
		);
	});

	return <div className="filter__rooms">{checkboxElements}</div>;
};

FilterCheckboxGroup.propTypes = {
	values: PropTypes.arrayOf(PropTypes.string),
	checkedValues: PropTypes.arrayOf(PropTypes.string),
	onInputChange: PropTypes.func,
};

FilterCheckboxGroup.defaultProps = {
	values: [],
	checkedValues: [],
	onInputChange: () => {},
};

export default memo(FilterCheckboxGroup);
