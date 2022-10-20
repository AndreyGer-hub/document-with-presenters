class FooterPresenter {
  constructor(document) {
    this.document = document;
  }
  getPresentation() {
    return {
      comment: this.document.getComment(),
    };
  }
}

export default FooterPresenter;
