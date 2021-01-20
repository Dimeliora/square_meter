import { TOGGLE_OBJECT_AS_FAVOURITE } from "../ActionTypes/FavouritesActions";

const initState = {
  favourites: [],
};

const favouritesReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_OBJECT_AS_FAVOURITE:
      const id = action.object.id;
      const isFavourite = state.favourites.some((object) => object.id === id);
      if (isFavourite) {
        return {
          ...state,
          favourites: state.favourites.filter((object) => object.id !== id),
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, action.object],
      };

    default:
      return state;
  }
};

export default favouritesReducer;
