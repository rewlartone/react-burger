import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE } from "../../services/actions/modal.jsx";
import {
  useHistory
} from "react-router-dom";
const modalRoot = document.getElementById("react-modals");

function Modal(props) {
  const dispatch = useDispatch();
    let history = useHistory();
  const closeModal = React.useCallback(() => {
	  if(props.details){
	  history.goBack();
	  }
    dispatch({ type: CLOSE });
  }, [dispatch]);

  useEffect(() => {

    function escClose(event) {
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
Modal.propTypes = {
  details: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
