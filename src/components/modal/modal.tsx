import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "../../services/hooks";
import { CLOSE } from "../../services/actions/modal";
import {
  useHistory
} from "react-router-dom";
const modalRoot: HTMLSpanElement  = document.getElementById("react-modals")!;

interface IModal {
  details?: string;
  children: React.ReactNode;
  close?: boolean;
}

const Modal: React.FC<IModal> = (props) => {
  const dispatch = useDispatch();
    let history = useHistory();
  const closeModal = React.useCallback(() => {
	  if(props.close){
	  history.goBack();
	  }
    dispatch({ type: CLOSE });
  }, [dispatch]);

  useEffect(() => {

    function escClose(event: KeyboardEvent): void {
      if (event.keyCode == 27) {
        closeModal();
      }
    }
	
	window.addEventListener("keydown", escClose);

    return () => {
      window.removeEventListener("keydown", escClose);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>	
        <ModalOverlay closeModal={closeModal} />
      <div className={styles.modal}>
        <section className={styles.header}>
          <p className="text text_type_main-large">{props.details}</p>
          <CloseIcon type="primary" onClick={closeModal} />
        </section>
        {props.children}
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
