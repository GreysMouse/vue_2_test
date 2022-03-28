export const compareObjectsByNumber = (obj1, obj2, comparedKey, direction) => {
  switch (direction) {
    case "asc":
      return obj1[comparedKey] - obj2[comparedKey];
    case "desc":
      return obj2[comparedKey] - obj1[comparedKey];
  }
};
