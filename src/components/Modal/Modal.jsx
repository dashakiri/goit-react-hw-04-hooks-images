import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal ({largeImageURL, tags, onModalClose}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {window.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "unset";
  };
  });

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      onModalClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
     onModalClose();
    }
  };
  
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <img
          src={largeImageURL}
          alt={tags}
          width="960"
          height="600"
        />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
