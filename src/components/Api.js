export class Api {
  constructor(configuration) {
    this._url = configuration.url
    this._headers = configuration.headers
  }

  _errorHandle(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка № ${res.ok} – ${res.status}`)
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._errorHandle)
  }

  setUserInfo(userInfo) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
      .then(this._errorHandle)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._errorHandle)
  }

  addCard(card) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(this._errorHandle)
  }

}