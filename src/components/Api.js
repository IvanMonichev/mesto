export default class Api {
  constructor(configuration) {
    this._url = configuration.url
    this._headers = configuration.headers
  }

  _errorHandle(res) {
    if(res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка № ${res.ok} – ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._url}/user/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._errorHandle)
  }
}