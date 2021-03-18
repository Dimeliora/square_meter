import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import INITIAL_FILTER_VALUES from "../../configs/initialFilterValues";

import Preloader from "../../Components/Preloaders/Loader";
import ErrorNotification from "../../Components/ErrorNotification";
import Heading from "../../Components/Heading";
import Filter from "../../Components/Filter/Filter";
import ObjectsSorter from "../../Components/ObjectsSorter";
import ObjectsCardboard from "../../Components/ObjectsCardboard";

const Objects = (props) => {
  const {
    isFetching,
    isFetchError,
    filterSettings,
    filterValues,
    totalObjects,
    favouriteObjects,
    getInitData,
    setFilterInputValue,
    setInitialFilterValues,
    getObjectsData,
    toggleObjectAsFavourite,
  } = props;

  const [isFilterApplied, setIsFilterApplied] = useState(true);
  const [objectsToShow, setObjectsToShow] = useState([]);
  const [sortParams, setSortParams] = useState({
    sorterName: null,
    isAscending: true,
  });

  useEffect(() => {
    if (!filterSettings) {
      getInitData();
    }
  }, [filterSettings, getInitData]);

  useEffect(() => {
    getObjectsData(filterValues);
  }, [filterValues, getObjectsData]);

  useEffect(() => {
    if (totalObjects && isFilterApplied) {
      setObjectsToShow(totalObjects);
    }
  }, [isFilterApplied, totalObjects]);

  const onFilterValuesChange = (filterInputValue) => {
    setFilterInputValue(filterInputValue);
    setIsFilterApplied(false);
  };

  const onResetFilter = () => {
    setInitialFilterValues(INITIAL_FILTER_VALUES);
    setIsFilterApplied(false);
  };

  const onApplyFilter = () => {
    setIsFilterApplied(true);
  };

  const onSortObjects = (sorterName) => {
    setSortParams((prevState) => ({
      sorterName,
      isAscending:
        sorterName === prevState.sorterName ? !prevState.isAscending : true,
    }));
  };

  const sortObjectsToShow = (objects, isAscending, sorterName) => {
    if (!sorterName) return objects;

    const sortDir = isAscending ? 1 : -1;
    return [...objects].sort(
      (a, b) => (a[sorterName] - b[sorterName]) * sortDir
    );
  };

  if (isFetchError) return <ErrorNotification />;

  if (!isFetchError && !filterSettings) return <Preloader />;

  const { isAscending, sorterName } = sortParams;
  const sortedObjectsToShow = sortObjectsToShow(
    objectsToShow,
    isAscending,
    sorterName
  );

  const totalObjectsAmount = totalObjects?.length || 0;

  return (
    <section className="objects">
      <div className="container">
        <div className="content-wrapper">
          <Heading>Выбор квартир</Heading>
          <Filter
            isFetching={isFetching}
            isFilterApplied={isFilterApplied}
            filterSettings={filterSettings}
            filterValues={filterValues}
            totalObjectsAmount={totalObjectsAmount}
            onFilterValuesChange={onFilterValuesChange}
            onApplyFilter={onApplyFilter}
            onResetFilter={onResetFilter}
          />
          <ObjectsSorter
            onSortObjects={onSortObjects}
            activeSorter={sorterName}
            isAscending={isAscending}
          />
          <ObjectsCardboard
            totalObjects={sortedObjectsToShow}
            favouriteObjects={favouriteObjects}
            onToggleFavObject={toggleObjectAsFavourite}
          />
        </div>
      </div>
    </section>
  );
};

Objects.propTypes = {
  isFetching: PropTypes.bool,
  filterSettings: PropTypes.object,
  filterValues: PropTypes.object,
  totalObjects: PropTypes.array,
  favouriteObjects: PropTypes.array,
  getInitData: PropTypes.func,
  setFilterInputValue: PropTypes.func,
  setInitialFilterValues: PropTypes.func,
  getFilteredData: PropTypes.func,
  toggleObjectAsFavourite: PropTypes.func,
};

Objects.defaultProps = {
  isFetching: false,
  filterSettings: {},
  filterValues: {},
  totalObjects: [],
  favouriteObjects: [],
  getInitData: () => {},
  setFilterInputValue: () => {},
  setInitialFilterValues: () => {},
  getFilteredData: () => {},
  toggleObjectAsFavourite: () => {},
};

export default Objects;
