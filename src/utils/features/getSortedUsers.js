import { USER_DATA } from "../../config";
import { SORTING_TYPES } from "../../constants";
import { compareObjectsByNumber } from "../methods/comapreObjectsByNumber";
import { compareObjectsByISODate } from "../methods/compareObjectsByISODate";

export const getSortedUsers = (users, sorting) => {
  switch (sorting.type) {
    case SORTING_TYPES.NONE:
      return users;
    case SORTING_TYPES.REGISTER_DATE:
      return users.sort((a, b) =>
        compareObjectsByISODate(a, b, USER_DATA.REGISTER_DATE, sorting.order)
      );
    case SORTING_TYPES.RATING:
      return users.sort((a, b) =>
        compareObjectsByNumber(a, b, USER_DATA.RATING, sorting.order)
      );
    default:
      return users;
  }
};
