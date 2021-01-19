import cn from 'classnames';

const ObjectsListHeaderItem = (props) => {
  const {
    label = '',
    classname = '',
    sorterName = '',
    isSortable = false,
    isAscending = true,
    activeSorter = '',
    onSortObjects = () => {},
  } = props;

  const IsItemAnActiveSorter = activeSorter === sorterName;
  const isCurrentAscending = IsItemAnActiveSorter ? isAscending : true;

  const onSortByItem = () => {
    isSortable && onSortObjects({ sorterName, isCurrentAscending });
  };
  
  return (
    <div className={cn('panels-sorter__element', classname)}>
      <div
        className={cn('panels-sorter__title', {
          'no-sorter': !isSortable,
          'sorter-up': isSortable && isCurrentAscending,
          'sorter-down': isSortable && !isCurrentAscending,
          'sorter--active': isSortable && IsItemAnActiveSorter,
        })}
        onClick={onSortByItem}
      >
        {label}
      </div>
    </div>
  );
};

export default ObjectsListHeaderItem;
