import { SORTING_TYPES } from "../../constants";
import { compareObjectsByNumber } from "../methods/comapreObjectsByNumber";
import { compareObjectsByISODate } from "../methods/compareObjectsByISODate";

export const getSortedUsers = (users, sorting) => {
  switch (sorting.type) {
    case SORTING_TYPES.NONE:
      return users;
    case SORTING_TYPES.REGISTER_DATE:
      return users.sort((a, b) =>
        compareObjectsByISODate(a, b, sorting.type, sorting.order)
      );
    case SORTING_TYPES.RATING:
      return users.sort((a, b) =>
        compareObjectsByNumber(a, b, sorting.type, sorting.order)
      );
    default:
      return users;
  }
};
