import ObjectListItem from './ObjectListItem';

import './ObjectsList.css';

const ObjectsList = (props) => {
  const {
    totalObjects = [],
    favouriteObjects = [],
    onToggleFavObject = () => {},
  } = props;

  const objectsListItems = totalObjects.map((object) => {
    const id = object.id;
    const isFavourite = favouriteObjects.some((object) => object.id === id);

    return (
      <ObjectListItem
        key={id}
        itemData={object}
        isFavourite={isFavourite}
        onToggleFavObject={onToggleFavObject}
      />
    );
  });

  return <div className="objects-list-wrapper">{objectsListItems}</div>;
};

export default ObjectsList;
