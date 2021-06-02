import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  const [elements, setElements] = React.useState([]);
  const [bun, setBun] = React.useState({});
  const [cost, setCost] = React.useState(0);

  useEffect(() => {
    for (let i = 5; i < 12; i++) {
      setElements((prev) => [...prev, props.data[i]]);
      setCost((prev) => prev + props.data[i].price);
    }
    setBun(props.data[0]);
    setCost((prev) => prev + props.data[0].price);
  }, []);

  return (
    <div
      className={styles.wrap}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <ConstructorElement
        type="top"
        isLocked={true}
        text={bun.name}
        price={bun.price}
        thumbnail={bun.image}
      />
      <div
        className={styles.elements}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {elements.map((element, index) => {
          return (
            <section className={styles.element} key={element._id}>
              <div className={styles.icon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={element.name}
                price={element.price}
                thumbnail={element.image}
              />
            </section>
          );
        })}
      </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun.name}
        price={bun.price}
        thumbnail={bun.image}
      />
      <div className={styles.price}>
        <p className="text text_type_digits-medium">{cost}</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BurgerConstructor;
