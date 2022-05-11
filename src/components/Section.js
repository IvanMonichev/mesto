export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  render(items) {

    items.reverse().forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._containerElement.prepend(element);
  }
}