import React from 'react';

import initialFilterValues from '../../configs/initialFilterValues';

import Preloader from '../../Components/Preloaders/Loader';
import Heading from '../../Components/Heading';
import Filter from '../../Components/Filter/Filter';
import ObjectsListHeader from '../../Components/ObjectsListHeader';
import ObjectsList from '../../Components/ObjectsList';

const Objects = (props) => {
  const {
    isFetching,
    filterSettings,
    filterValues,
    totalObjects,
    favouriteObjects,
    getInitData,
    setFilterInputValue,
    setInitialFilterValues,
    getFilteredData,
    toggleObjectAsFavourite,
  } = props;

  const [isFilterApplied, setIsFilterApplied] = React.useState(true);

  const [objectsToShow, setObjectsToShow] = React.useState([]);

  const [sortParams, setSortParams] = React.useState({
    sorterName: null,
    isAscending: null,
  });

  React.useEffect(() => {
    if (!filterSettings) getInitData();
  }, [filterSettings]);

  React.useEffect(() => {
    if (filterSettings) getFilteredData(filterValues);
  }, [filterValues]);

  React.useEffect(() => {
    if (isFilterApplied) setObjectsToShow(totalObjects);
  }, [totalObjects]);

  const onFilterValuesChange = (filterInputValue) => {
    setFilterInputValue(filterInputValue);
    setIsFilterApplied(false);
  };

  const onResetFilter = () => {
    setInitialFilterValues(initialFilterValues);
    setIsFilterApplied(false);
  };

  const onApplyFilter = () => {
    setObjectsToShow(totalObjects);
    setIsFilterApplied(true);
  };

  const onSortObjects = React.useCallback(
    ({ sorterName, isCurrentAscending }) => {
      setSortParams((state) => ({
        sorterName,
        isAscending:
          sorterName === state.sorterName
            ? !state.isAscending
            : isCurrentAscending,
      }));
    },
    [],
  );

  const sortObjectsToShow = (objects, isAscending, sorterName) => {
    if (!sorterName) return objects;

    const sortDir = isAscending ? 1 : -1;
    return [...objects].sort(
      (a, b) => (a[sorterName] - b[sorterName]) * sortDir,
    );
  };

  if (!filterSettings) return <Preloader />;

  const { isAscending, sorterName } = sortParams;
  const sortedObjectsToShow = sortObjectsToShow(
    objectsToShow,
    isAscending,
    sorterName,
  );

  const totalObjectsAmount = totalObjects.length;

  return (
    <div className="container content-wrapper">
      <Heading>Выбор квартир:</Heading>
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
      <ObjectsListHeader
        onSortObjects={onSortObjects}
        activeSorter={sorterName}
        isAscending={isAscending}
      />
      <ObjectsList
        totalObjects={sortedObjectsToShow}
        favouriteObjects={favouriteObjects}
        onToggleFavObject={toggleObjectAsFavourite}
      />
    </div>
  );
};

export default Objects;
