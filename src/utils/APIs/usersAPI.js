import { BASE_URL } from "../../config";
import { API } from "./api";

class UsersAPI extends API {
  constructor({ baseURL }) {
    super({ baseURL });
  }

  async getUsers() {
    const res = await fetch(`${this._baseURL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return this._checkResponse(res);
  }
}

export const usersAPI = new UsersAPI({ baseURL: BASE_URL });
