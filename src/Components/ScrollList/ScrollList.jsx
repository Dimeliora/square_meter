import { useReducer, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import LinearLoader from "../Preloaders/LinearLoader";

const LOAD = "LOAD";
const SHOW = "SHOW";

const initialState = () => ({
  isLoading: false,
  isItemsToShow: true,
  currentChunk: 0,
  itemsToShow: [],
});

const scrollListReducer = (state, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, isLoading: true };
    case SHOW:
      return {
        ...state,
        isLoading: false,
        isItemsToShow: action.isMoreToShow,
        currentChunk: action.newChunk,
        itemsToShow: action.newItemsToShow,
      };
    default:
      return state;
  }
};

const setLoad = () => ({
  type: LOAD,
});

const setShow = (newChunk, newItemsToShow, isMoreToShow) => ({
  type: SHOW,
  newChunk,
  newItemsToShow,
  isMoreToShow,
});

const ScrollList = ({ children, data, chunkSize }) => {
  const [state, dispatch] = useReducer(scrollListReducer, initialState());
  const { isLoading, isItemsToShow, currentChunk, itemsToShow } = state;

  const update = () => {
    const newChunk = currentChunk + chunkSize;
    const newItemsToShow = [
      ...itemsToShow,
      ...data.slice(currentChunk, newChunk),
    ];
    const isMoreToShow = data.length > newChunk;
    return { newChunk, newItemsToShow, isMoreToShow };
  };

  useEffect(() => {
    const { newChunk, newItemsToShow, isMoreToShow } = update();
    dispatch(setShow(newChunk, newItemsToShow, isMoreToShow));
  }, []);

  const loadData = () => {
    dispatch(setLoad());
    setTimeout(() => {
      const { newChunk, newItemsToShow, isMoreToShow } = update();
      dispatch(setShow(newChunk, newItemsToShow, isMoreToShow));
    }, 500);
  };

  const loadHandler = useRef(loadData);

  const [triggerElement, setTriggerElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const trigger = entries[0];
        if (trigger.isIntersecting) {
          loadHandler.current();
        }
      },
      {
        treshold: 1.0,
        rootMargin: "150px",
      }
    )
  );

  useEffect(() => {
    const currentObserver = observer;
    if (triggerElement) {
      currentObserver.current.observe(triggerElement);
      return () => currentObserver.current.unobserve(triggerElement);
    }
  }, [triggerElement]);

  useEffect(() => {
    loadHandler.current = loadData;
  });

  const listItems = children;

  if (!listItems) return null;

  return (
    <div className="scroll-list">
      {listItems(itemsToShow)}

      {isLoading && <LinearLoader classname="linear-loader-bg--red" />}

      {!isLoading && isItemsToShow && (
        <div ref={setTriggerElement} className="scroll-trigger" />
      )}
    </div>
  );
};

ScrollList.propTypes = {
  children: PropTypes.func,
  data: PropTypes.array,
  chunkSize: PropTypes.number,
};

ScrollList.defaultProps = {
  data: [],
  chunkSize: 10,
};

export default ScrollList;
