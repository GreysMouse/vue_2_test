export class API {
  constructor({ baseURL }) {
    this._baseURL = baseURL;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }
}
