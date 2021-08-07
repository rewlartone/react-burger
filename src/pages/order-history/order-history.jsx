import React from 'react';
import styles from './order-history.module.css';
import Feed from '../../components/feed/feed.jsx';
import Menu from '../../components/menu/menu.jsx';

function OrderHistory() {
  return (
    <>
      <Menu
        phrase={'В этом разделе вы можете просмотреть свою историю заказов'}
      />
      <div className={styles.feed}>
        <Feed status type="profile/orders" />
      </div>
    </>
  );
}

export default OrderHistory;
