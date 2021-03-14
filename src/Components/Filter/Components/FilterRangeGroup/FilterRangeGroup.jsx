import {memo} from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import priceNormalize from "../../../../helpers/priceNormalize";

import "./FilterRangeGroup.scss";

const FilterRangeGroup = (props) => {
	const {
		minPlaceholder,
		maxPlaceholder,
		minValue,
		maxValue,
		name,
		unitType,
		classname,
		onInputChange,
	} = props;

	return (
		<div className="filter__range">
			<label className="filter__range-item">
				<div className="filter__range-label">от</div>
				<input
					min="0"
					type="number"
					name={`${name}min`}
					value={minValue}
					className={cn("filter__range-input", classname)}
					placeholder={priceNormalize.format(minPlaceholder)}
					onChange={onInputChange}
				/>
				<div className="filter__range-unit">{unitType}</div>
			</label>

			<label className="filter__range-item">
				<div className="filter__range-label">до</div>
				<input
					min="0"
					type="number"
					name={`${name}max`}
					value={maxValue}
					className={cn("filter__range-input", classname)}
					placeholder={priceNormalize.format(maxPlaceholder)}
					onChange={onInputChange}
				/>
				<div className="filter__range">{unitType}</div>
			</label>
		</div>
	);
};

FilterRangeGroup.propTypes = {
	minPlaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxPlaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	unitType: PropTypes.string,
	classname: PropTypes.string,
	onInputChange: PropTypes.func,
};

FilterRangeGroup.defaultProps = {
	minPlaceholder: 0,
	maxPlaceholder: 0,
	minValue: 0,
	maxValue: 0,
	name: "",
	unitType: "",
	classname: "",
	onInputChange: () => {},
};

export default memo(FilterRangeGroup);
