export const getUsersTablePagesCount = (listLength, paginationStep) => {
  return Math.ceil(listLength / paginationStep);
};
