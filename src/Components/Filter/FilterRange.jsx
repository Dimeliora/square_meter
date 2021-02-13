import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import priceNormalize from "../../helpers/priceNormalize";

const FilterRange = (props) => {
	const {
		minPlaceholder,
		maxPlaceholder,
		minValue,
		maxValue,
		label,
		name,
		unitType,
		classname,
		onInputChange,
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
						className={cn("range__input", classname)}
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
						className={cn("range__input", classname)}
						placeholder={priceNormalize.format(maxPlaceholder)}
						onChange={onInputChange}
					/>
					<div className="range__value">{unitType}</div>
				</label>
			</div>
		</div>
	);
};

FilterRange.propTypes = {
	minPlaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxPlaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	label: PropTypes.string,
	name: PropTypes.string,
	unitType: PropTypes.string,
	classname: PropTypes.string,
	onInputChange: PropTypes.func,
};

FilterRange.defaultProps = {
	minPlaceholder: 0,
	maxPlaceholder: 0,
	minValue: 0,
	maxValue: 0,
	label: "",
	name: "",
	unitType: "",
	classname: "",
	onInputChange: () => {},
};

export default React.memo(FilterRange);
