import { compareObjectsByISODate } from "../methods/compareObjectsByISODate";
import { compareObjectsByNumber } from "../methods/comapreObjectsByNumber";

export const getSortedUsers = (users, sorting) => {
  switch (sorting.type) {
    case "none":
      return users;
    case "registrationDate":
      return users.sort((a, b) =>
        compareObjectsByISODate(a, b, sorting.type, sorting.direction)
      );
    case "rating":
      return users.sort((a, b) =>
        compareObjectsByNumber(a, b, sorting.type, sorting.direction)
      );
    default:
      return users;
  }
};
