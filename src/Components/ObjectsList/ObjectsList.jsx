import ObjectListItem from './ObjectListItem';

import './ObjectsList.css';

const ObjectsList = ({ totalObjects = [] }) => {
  const objectsListItems = totalObjects.map((object) => (
    <ObjectListItem key={object.id} {...object} />
  ));

  return (
    <div className="objects-list-wrapper">
      <div className="container p-0">{objectsListItems}</div>
    </div>
  );
};

export default ObjectsList;
