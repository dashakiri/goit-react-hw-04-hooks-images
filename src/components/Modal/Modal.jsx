import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "unset";
  }

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onModalClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <img
            src={this.props.largeImageURL}
            alt={this.props.tags}
            width="960"
            height="600"
          />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
