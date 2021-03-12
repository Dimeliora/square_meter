import React from "react";
import PropTypes from "prop-types";

import ObjectsSortItem from "./Components/ObjectsSortItem";

import OBJECT_SORT_ITEMS from "../../configs/objectSortItems";

import "./ObjectsSorter.scss";

const ObjectsSorter = (props) => {
  const { activeSorter, isAscending, onSortObjects } = props;

  return (
    <div className="objects-sorter">
      <div className="objects-sorter__title">Сортировать по</div>
      <div className="objects-sorter__items">
        {OBJECT_SORT_ITEMS.map(({ label, sorterName }) => (
          <ObjectsSortItem
            key={label}
            label={label}
            sorterName={sorterName}
            isAscending={isAscending}
            activeSorter={activeSorter}
            onSortObjects={onSortObjects}
          />
        ))}
      </div>
    </div>
  );
};

ObjectsSorter.propTypes = {
  activeSorter: PropTypes.string,
  isAscending: PropTypes.bool,
  onSortObjects: PropTypes.func,
};

ObjectsSorter.defaultProps = {
  activeSorter: "",
  isAscending: true,
  onSortObjects: () => {},
};

export default React.memo(ObjectsSorter);
