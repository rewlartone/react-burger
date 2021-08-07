import React from "react";
import styles from "./order-history.module.css";
import Feed from "../../components/feed/feed";
import Menu from "../../components/menu/menu";
import { useSelector } from "../../services/hooks";

const OrderHistory: React.FC = () => {
  const { myOrders } = useSelector((store) => store.ws);
  return (
    <>
      <Menu
        phrase={"В этом разделе вы можете просмотреть свою историю заказов"}
      />
      <div className={styles.feed}>
        {myOrders.orders && (
          <Feed status type="profile/orders" data={myOrders.orders} />
        )}
      </div>
    </>
  );
};

export default OrderHistory;
