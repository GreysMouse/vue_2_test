import { SORTING_ORDERS } from "../../constants";

export const getUpdatedSorting = (currentSorting, targetSorting) => {
  const updatedSorting = { ...targetSorting };

  if (currentSorting.type === targetSorting.type) {
    if (currentSorting.order === SORTING_ORDERS.ASC) {
      updatedSorting.order = SORTING_ORDERS.DESC;
    } else {
      updatedSorting.order = SORTING_ORDERS.ASC;
    }
  } else {
    updatedSorting.order = SORTING_ORDERS.DESC;
  }

  return updatedSorting;
};
