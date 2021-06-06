import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

function Modal({ setVisible, visible, children, details }) {
  const closeModal = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    window.addEventListener("keydown", escClose);

    function escClose(event) {
      if (event.keyCode == 27) {
        closeModal();
      }
    }

    return () => {
      window.removeEventListener("keydown", escClose);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    visible && (
      <>
        {" "}
        <div onClick={closeModal}>
          <ModalOverlay />
        </div>{" "}
        <div className={styles.modal}>
          <section className={styles.header}>
            <p className="text text_type_main-large">{details}</p>
            <CloseIcon type="primary" onClick={closeModal} />
          </section>
          {children}
        </div>
      </>
    ),

    modalRoot
  );
}
Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  details: PropTypes.string,
};

export default Modal;
