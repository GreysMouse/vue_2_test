import { SORTING_ORDERS } from "../../constants";

export const compareObjectsByISODate = (
  obj1,
  obj2,
  comparedKey,
  sortingOrder
) => {
  const date1 = new Date(obj1[comparedKey]);
  const date2 = new Date(obj2[comparedKey]);

  switch (sortingOrder) {
    case SORTING_ORDERS.ASC:
      return date1 < date2 ? -1 : 1;
    case SORTING_ORDERS.DESC:
      return date1 > date2 ? -1 : 1;
  }
};
