import {
  currenciesApi
} from "./currentApi";

class Api {
  constructor(urlApi) {
    this._url = urlApi;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCurrency() {
    return fetch(`${this._url}`).then((res) => this._handleResponse(res));
  }

  setNewBase(base) {
    return fetch(`${this._url}?base=${base}`).then((res) => this._handleResponse(res));
  }
}

const api = new Api(currenciesApi);

export default api