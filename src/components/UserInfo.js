export class UserInfo {
  constructor(profileSelectors) {
    this._userName = document.querySelector(profileSelectors.name);
    this._userAbout = document.querySelector(profileSelectors.about);
  }

  getUserValues() {
    this._userData = {
      name: this._userName.textContent,
      about: this._userAbout.textContent
    }

    return this._userData;
  }

  setUserInfo(item) {
    this._userName.textContent = item.name;
    this._userAbout.textContent = item.about;
  }

}