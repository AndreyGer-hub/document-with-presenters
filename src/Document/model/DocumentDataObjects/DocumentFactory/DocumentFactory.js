import DefaultDocument from "../DefaultDocument";
import NomenclatureRecieving from "../Documents/NomenclatureRecieving/NomenclatureRecieving";
import NomenclatureWriteOff from "../Documents/NomenclatureWriteOff/NomenclatureWriteOff";

class DocumentFactory {
  constructor(type) {
    this.type = type;
    this.tables = [];
    this.fields = [];
  }

  getDocument() {
    switch (this.type) {
      // Оприходование  номенклатуры
      case "document-1":
        return new NomenclatureRecieving();
      case "document-2":
        return new NomenclatureWriteOff();

      default:
        return new DefaultDocument();
    }
  }
}

export default DocumentFactory;
