import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";
import Modal from "../modal/modal.jsx";
import CheckMarkIconImg from "../../images/check-mark-icon-img.jpg";

function OrderDetails({ setVisible, visible }) {
  const [orderId, setOrderId] = React.useState("034536");

  return (
    <Modal setVisible={setVisible} visible={visible}>
      <div className={styles.details}>
        <p className={`${styles.digits} text text_type_digits-large`}>
          {orderId}
        </p>
        <p className={`${styles.id} text text_type_main-medium`}>
          идентификатор заказа
        </p>
        <img src={CheckMarkIconImg} />
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
}

OrderDetails.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default OrderDetails;
