import React from 'react';
import styles from './order-feed.module.css';
import Feed from '../../components/feed/feed.jsx';

function OrderFeed() {
  return (
    <>
      <div className={styles.orderfeed}>
        <h1 className="text text_type_main-large">Лента заказов</h1>
        <Feed type="feed" />
      </div>
      <div className={styles.progress}>
        <div className={styles.ready}>
          <p className="text text_type_main-medium">Готовы:</p>
          <ul>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
          </ul>
        </div>
        <div className={styles.cooking}>
          <p className="text text_type_main-medium">В работе:</p>
          <ul>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034533</li>
          </ul>
        </div>
        <p
          className="text text_type_main-medium"
          style={{
            clear: 'both',
            position: 'relative',
            float: 'left',
            marginTop: '60px',
          }}
        >
          Выполнено за все время:
        </p>
        <p
          className="text text_type_digits-large"
          style={{
            clear: 'both',
            textShadow:
              '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)',
          }}
        >
          28 752
        </p>
        <p
          className="text text_type_main-medium"
          style={{
            clear: 'both',
            position: 'relative',
            float: 'left',
            marginTop: '60px',
          }}
        >
          Выполнено за сегодня:
        </p>
        <p
          className="text text_type_digits-large"
          style={{
            clear: 'both',
            textShadow:
              '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)',
          }}
        >
          138
        </p>
      </div>
    </>
  );
}

export default OrderFeed;
