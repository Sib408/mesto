export default class UserInfo {
  constructor({ name, about, avatar}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,

    };
  }

  setUserInfo(nameInput, aboutInput, avatarInput) {
    this._name.textContent = nameInput;
    this._about.textContent = aboutInput;
    this._avatar.src = avatarInput;
  }

  // setUserAvatar(avatar) {
  //   this._avatar.src = avatar;
  // }
}
