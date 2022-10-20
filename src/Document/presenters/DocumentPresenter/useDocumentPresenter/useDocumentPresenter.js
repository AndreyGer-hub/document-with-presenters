import { useEffect, useState } from "react";
import DocumentPresenter from "../DocumentPresenter";

const useDocumentPresenter = (document) => {
  const [documentPresenter, setDocumentPresenter] = useState(() => {
    return new DocumentPresenter(document);
  });

  useEffect(() => {
    setDocumentPresenter(new DocumentPresenter(document));
  }, [document]);

  return documentPresenter;
};

export default useDocumentPresenter;
