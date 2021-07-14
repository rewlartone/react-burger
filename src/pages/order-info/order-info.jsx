import React from 'react';
import styles from './order-info.module.css';
import { useParams } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderInfo() {
  const { id } = useParams();

  return (
    <div className={styles.order}>
      <p
        className="text text_type_digits-default"
        style={{ textAlign: 'center' }}
      >
        #{id}
      </p>
      <p
        className="text text_type_main-medium"
        style={{ float: 'left', clear: 'both', marginTop: '40px' }}
      >
        Death Star Starship Main бургер
      </p>
      <p
        className="text text_type_main-default"
        style={{
          float: 'left',
          clear: 'both',
          marginTop: '12px',
          color: '#00CCCC',
        }}
      >
        Выполнен
      </p>
      <p
        className="text text_type_main-medium"
        style={{ float: 'left', clear: 'both', marginTop: '60px' }}
      >
        Состав:
      </p>
      <ul
        className={styles.ingredients}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>{' '}
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.circle}>
            <img
              src="https://code.s3.yandex.net/react/code/meat-03.png"
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x 100</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <p
        className="text text_type_main-default"
        style={{ float: 'left', marginTop: '40px', color: '#8585AD' }}
      >
        Вчера, 13:50 i-GMT+3
      </p>
      <div className={styles.cost} style={{ marginTop: '40px' }}>
        <p className="text text_type_digits-default">1 x 100</p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
}

export default OrderInfo;
