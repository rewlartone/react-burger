import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";
import Modal from "../modal/modal";
import CheckMarkIconImg from "../../images/check-mark-icon-img.jpg";
import { useSelector } from "../../services/hooks";

const OrderDetails: React.FC = () => {
  const { orderId } = useSelector((store) => store.modal);

  return (
    <Modal>
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
};

export default OrderDetails;
