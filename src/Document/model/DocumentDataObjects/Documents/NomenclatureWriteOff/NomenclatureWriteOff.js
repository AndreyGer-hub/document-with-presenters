import DefaultDocument from "../../DefaultDocument";

class NomenclatureWriteOff extends DefaultDocument {
  constructor() {
    super();
    this.type = "document-2";
    this.title = "Оприходование номенклатуры";
  }

  init() {
    super.init();
    this.type = "document-2";
  }

  _setDefaultFields() {
    this.fields = this._fromColumnsToFields(["stock"]);
  }

  _setDefaultTables() {
    const installationsType = "nomenclatureStock";
    const plusMinus = "+";
    this.tables = [{installationsType, plusMinus}];
  }
}

export default NomenclatureWriteOff;
