import BodyPresenter from "./BodyPresenter/BodyPresenter";
import FooterPresenter from "./FooterPresenter/FooterPresenter";
import HeaderPresenter from "./HeaderPresenter/HeaderPresenter";

class DocumentPresenter {
  constructor(document) {
    this.document = document;
    this.headerPresenter = new HeaderPresenter(document);
    this.bodyPresenet = new BodyPresenter(document);
    this.footerPresenter = new FooterPresenter(document);
  }

  getHeaderPresentation() {
    return this.headerPresenter.getPresentation();
  }
  getBodyPresentation() {
    return this.bodyPresenet.getPresentation();
  }
  getFooterPresentation() {
    return this.footerPresenter.getPresentation();
  }
}

export default DocumentPresenter;
