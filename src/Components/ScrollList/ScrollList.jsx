import { useReducer, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import LinearLoader from "../Preloaders/LinearLoader";

const initialState = (data, chunkSize) => ({
  isLoading: false,
  isItemsToShow: data.length > chunkSize,
  currentChunk: chunkSize,
  itemsToShow: data.slice(0, chunkSize),
});

const scrollListReducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return { ...state, isLoading: true };
    case "SHOW":
      const { isMoreToShow, newChunk, newItemsToShow } = action.payload;
      return {
        ...state,
        isLoading: false,
        isItemsToShow: isMoreToShow,
        currentChunk: newChunk,
        itemsToShow: newItemsToShow,
      };
    default:
      return state;
  }
};

const ScrollList = ({ children, data, chunkSize }) => {
  const [state, dispatch] = useReducer(
    scrollListReducer,
    initialState(data, chunkSize)
  );
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

  const loadData = () => {
    dispatch({ type: "LOAD" });
    setTimeout(() => {
      const { newChunk, newItemsToShow, isMoreToShow } = update();
      dispatch({
        type: "SHOW",
        payload: { newChunk, newItemsToShow, isMoreToShow },
      });
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

  const listItemsRenderer = children;

  if (!listItemsRenderer) return null;

  return (
    <div className="scroll-list">
      {listItemsRenderer(itemsToShow)}

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
