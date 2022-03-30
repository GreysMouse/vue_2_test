import { USER_DATA } from "../../config";

export const normalizeUser = (user) => {
  return {
    [USER_DATA.ID]: user["id"],
    [USER_DATA.NAME]: user["username"],
    [USER_DATA.EMAIL]: user["email"],
    [USER_DATA.REGISTER_DATE]: user["registration_date"],
    [USER_DATA.RATING]: user["rating"],
  };
};
