import React from "react";

import Filter from "../../Components/Filter/Filter";
import Preloader from "../../Components/Preloader";

import "./Objects.css";

const Objects = (props) => {
  const {
    filterSettings,
    filterValues,
    totalObjects,
    isFetching,
    getInitData,
    setFilterInputValue,
    setInitialFilterValues,
    getFilteredData,
  } = props;

  React.useEffect(() => {
    if (!filterSettings) getInitData();
  }, [filterSettings, getInitData]);

  React.useEffect(() => {
    getFilteredData(filterValues);
  }, [filterValues, getFilteredData]);

  const showFilteredObjects = () => {
    console.log("Show");
  };

  if (isFetching) return <Preloader />;

  const totalObjectsAmount = totalObjects.length;

  return (
    <div>
      <Filter
        filterSettings={filterSettings}
        filterValues={filterValues}
        totalObjectsAmount={totalObjectsAmount}
        onFilterValuesChange={setFilterInputValue}
        onApplyFilter={showFilteredObjects}
        onResetFilter={setInitialFilterValues}
      />
    </div>
  );
};

export default Objects;
