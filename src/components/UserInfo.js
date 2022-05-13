export class UserInfo {
  constructor(profileSelectors) {
    this._userName = document.querySelector(profileSelectors.name);
    this._userAbout = document.querySelector(profileSelectors.about);
    this._userAvatar = document.querySelector(profileSelectors.avatar)
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
    this.setUserAvatar(item);
  }

  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}