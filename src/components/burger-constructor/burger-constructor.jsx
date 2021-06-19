import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import OrderDetails from "../order-details/order-details.jsx";
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
  const [visible, setVisible] = React.useState(false);
  const [ingredient, setIngredient] = React.useState({});

  function popup() {
    setVisible(true);
  }

  useMemo(() => {
    if (props.data[0] != undefined) {
      for (let i = 7; i < 14; i++) {
        setElements((prev) => [...prev, props.data[i]]);
        setCost((prev) => prev + props.data[i].price);
      }
      setBun(props.data[0]);
      setCost((prev) => prev + props.data[0].price);
    }
  }, [props.data]);

  return (
    <>
      <OrderDetails setVisible={setVisible} visible={visible}></OrderDetails>
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
        <ul
          className={styles.elements}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {elements.map((element, index) => {
            return (
              <li className={styles.element} key={element._id}>
                <div className={styles.icon}>
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={element.name}
                  price={element.price}
                  thumbnail={element.image}
                />
              </li>
            );
          })}
        </ul>
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
          <Button type="primary" size="large" onClick={() => popup()}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
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
