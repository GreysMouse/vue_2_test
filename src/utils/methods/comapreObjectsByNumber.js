import { SORTING_ORDERS } from "../../constants";

export const compareObjectsByNumber = (
  obj1,
  obj2,
  comparedKey,
  sortingOrder
) => {
  switch (sortingOrder) {
    case SORTING_ORDERS.ASC:
      return obj1[comparedKey] - obj2[comparedKey];
    case SORTING_ORDERS.DESC:
      return obj2[comparedKey] - obj1[comparedKey];
  }
};
