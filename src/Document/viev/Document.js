import React, { useEffect } from "react";
import { useState } from "react";
import DocumentFactory from "../model/DocumentDataObjects/DocumentFactory/DocumentFactory";
import useDocumentPresenter from "../presenters/DocumentPresenter/useDocumentPresenter/useDocumentPresenter";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Document({ type }) {
  const [document, setDocument] = useState(() => {
    const factory = new DocumentFactory(type);
    const newDocument = factory.getDocument();
    newDocument.init();
    return newDocument;
  });

  const documentPresenter = useDocumentPresenter(document);

  const changeDocumentName = (name) => {
    setDocument(document.changeName(name));
  };

  return (
    <div style={{ position: "relative", marginBottom: "40px", width: "500px"}}>
      <Header data={documentPresenter.getHeaderPresentation()} />
      <Body data={documentPresenter.getBodyPresentation()} />
      <Footer data={documentPresenter.getFooterPresentation()} />
      <button onClick={() => changeDocumentName(document.getName() + "+")}>
        Change Name
      </button>
    </div>
  );
}

export default Document;
