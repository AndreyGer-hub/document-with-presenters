class BodyPresenter {
  constructor(document) {
    this.document = document;
  }

  getPresentation() {
    return {
      tables: this.document.getTables(),
      fields: this.document.getFields(),
    };
  }
}

export default BodyPresenter;
