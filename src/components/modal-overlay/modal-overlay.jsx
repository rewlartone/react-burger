import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

function ModalOverlay({closeModal}) {
  return <div onClick={closeModal} className={styles.overlay}></div>;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.PropTypes.func.isRequired
};

export default ModalOverlay;
