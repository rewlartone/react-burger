import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { ConstructorElement,DragIcon,CurrencyIcon,Button  } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor (props) {
		
	return (
    <div className={styles.wrap} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={props.data[0].name}
        price={props.data[0].price}
        thumbnail={props.data[0].image}
      />
	  <div className={styles.elements} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
     <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[1].name}
        price={props.data[1].price}
        thumbnail={props.data[1].image}
      /></section>
	 <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[2].name}
        price={props.data[2].price}
        thumbnail={props.data[2].image}
      /></section>
	 <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[9].name}
        price={props.data[9].price}
        thumbnail={props.data[9].image}
      /></section>
	 <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[4].name}
        price={props.data[4].price}
        thumbnail={props.data[4].image}
      /></section>
	  <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[8].name}
        price={props.data[8].price}
        thumbnail={props.data[8].image}
      /></section>
	  <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[10].name}
        price={props.data[10].price}
        thumbnail={props.data[10].image}
      /></section>
	  <section className={styles.element} ><div className={styles.icon}><DragIcon type="primary" /></div><ConstructorElement
        text={props.data[13].name}
        price={props.data[13].price}
        thumbnail={props.data[13].image}
      /></section>
	  </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={props.data[0].name}
        price={props.data[0].price}
        thumbnail={props.data[0].image}
      />
	  <div className={styles.price}>
	<p className="text text_type_digits-medium">100</p><CurrencyIcon type="primary"/>
	<Button type="primary" size="large">
  Оформить заказ
</Button>
	</div>
    </div>
  );
}

BurgerConstructor.propTypes = {
   data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
  }))
}; 



export default BurgerConstructor ;