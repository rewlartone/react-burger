import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

interface IModalOverlay {
  closeModal: () => void;
}

const ModalOverlay: React.FC<IModalOverlay> = ({ closeModal }) => {
  return <div onClick={closeModal} className={styles.overlay}></div>;
};

export default ModalOverlay;
