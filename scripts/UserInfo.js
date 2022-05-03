export class UserInfo {
  constructor(profileSelectors) {
    this._userName = document.querySelector(profileSelectors.name);
    this._userAbout = document.querySelector(profileSelectors.about);
  }

  getUserInfo() {
    this._userData = {
      name: this._userName.textContent,
      about: this._userAbout.textContent
    }

    return this._userData;
  }

  setUserInfo(nameInput, aboutInput) {
    this._userName.textContent = nameInput.value;
    this._userAbout.textContent = aboutInput.value;
  }

}