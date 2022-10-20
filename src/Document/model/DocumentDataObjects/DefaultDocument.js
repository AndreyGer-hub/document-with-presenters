class DefaultDocument {
  constructor(id) {
    this.status = "";
    this.fields = [];
    this.tables = [];
    this.date = new Date();
    this.title = "Дефолтный документ";
    this.name = "";
    this.comment = "";
    this.type = "";
    this.id = id;
  }

  init() {
    this._setDefaultTables();
    this._setDefaultFields();
    this._setDefaultStatus();
    this.date = new Date();
    this.title = "Дефолтный документ";
    this.name = "";
    this.comment = "";
    this.type = "";
  }

  _setDefaultStatus() {
    this.status = "draft";
  }

  _setDefaultFields() {
    this.fields = this._fromColumnsToFields([]);
  }

  _setDefaultTables() {
    this.tables = [
      {
        id: "unregistred",
        columns: [],
        installations: [],
      },
    ];
  }

  _fromColumnsToFields(columns) {
    return columns.map((column) => ({
      value: "-",
      id: column,
    }));
  }

  copy() {
    const newDocument = new DefaultDocument(this.id);
    newDocument.setComment(this.comment);
    newDocument.setDate(this.date);
    newDocument.setFields(this.fields);
    newDocument.setName(this.name);
    newDocument.setStatus(this.status);
    newDocument.setTables(this.tables);
    newDocument.setTitle(this.title);
    newDocument.setType(this.type);
    return newDocument;
  }

  getDate() {
    return this.date;
  }
  getName() {
    return this.name;
  }
  getFields() {
    return this.fields;
  }
  getTables() {
    return this.tables;
  }
  getStatus() {
    return this.status;
  }
  getTitle() {
    return this.title;
  }
  getType() {
    return this.type;
  }
  getComment() {
    return this.comment;
  }
  getId() {
    return this.id;
  }

  setDate(date) {
    this.date = date;
  }
  setName(name) {
    this.name = name;
  }
  setFields(fields) {
    this.fields = fields;
  }
  setTables(tables) {
    this.tables = tables;
  }
  setStatus(status) {
    this.status = status;
  }
  setTitle(title) {
    this.title = title;
  }
  setType(type) {
    this.type = type;
  }
  setComment(comment) {
    this.comment = comment;
  }

  changeDate(date) {
    const newDocument = this.copy();
    newDocument.setName(date);
    return newDocument;
  }

  changeName(name) {
    const newDocument = this.copy();
    newDocument.setName(name);
    return newDocument;
  }

  changeFields(fields) {
    const newDocument = this.copy();
    newDocument.setName(fields);
    return newDocument;
  }

  changeTables(tables) {
    const newDocument = this.copy();
    newDocument.setName(tables);
    return newDocument;
  }

  changeStatus(status) {
    const newDocument = this.copy();
    newDocument.setName(status);
    return newDocument;
  }

  changeTitle(title) {
    const newDocument = this.copy();
    newDocument.setName(title);
    return newDocument;
  }

  changeType(type) {
    const newDocument = this.copy();
    newDocument.setName(type);
    return newDocument;
  }

  changeComment(comment) {
    const newDocument = this.copy();
    newDocument.setName(comment);
    return newDocument;
  }
}

export default DefaultDocument;
