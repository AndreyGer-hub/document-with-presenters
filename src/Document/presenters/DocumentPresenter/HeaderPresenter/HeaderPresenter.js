class HeaderPresenter {
  constructor(document) {
    this.document = document;
  }

  getPresentation() {
    return {
      date: this.document.getDate(),
      name: this.document.getName(),
      fields: this.document.getFields(),
      type: this.document.getType(),
    };
  }
}

export default HeaderPresenter;
