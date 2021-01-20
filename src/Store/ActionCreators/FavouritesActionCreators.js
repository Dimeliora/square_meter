import { TOGGLE_OBJECT_AS_FAVOURITE } from "../ActionTypes/FavouritesActions";

export const toggleObjectAsFavourite = (object) => ({
  type: TOGGLE_OBJECT_AS_FAVOURITE,
  object,
});
