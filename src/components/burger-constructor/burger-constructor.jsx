import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import OrderDetails from "../order-details/order-details.jsx";
import Element from "../element/element.jsx";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_DETAILS } from "../../services/actions/modal.jsx";
import { getOrder } from "../../services/actions/modal.jsx";
import { DELETE_ELEMENT } from "../../services/actions/constructor.jsx";
import { useDrop } from "react-dnd";
import { SET_ELEMENT } from "../../services/actions/constructor.jsx";
import { SET_BUN } from "../../services/actions/constructor.jsx";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      addElement(item);
    },
  });

  function addElement(item) {
    if (item.type === "bun") {
      dispatch({
        type: SET_BUN,
        bun: item,
      });
    } else {
      dispatch({
        type: SET_ELEMENT,
        element: item,
      });
    }
  }

  const { ingredients } = useSelector((store) => store.ingredients);
  const { order } = useSelector((store) => store.modal);
  const { elements } = useSelector((store) => store.burgerConstructor);
  const { bun } = useSelector((store) => store.burgerConstructor);
  const [cost, setCost] = React.useState(0);

  const popup = () => {
    let idsForOrder = elements.map((item) => {
      return item._id;
    });
    idsForOrder.push(bun._id);
    idsForOrder.push(bun._id);
    dispatch(getOrder(idsForOrder));
    dispatch({
      type: ORDER_DETAILS,
    });
  };

  const deleteElement = (id) => {
    dispatch({
      type: DELETE_ELEMENT,
      index: id,
    });
  };

  useEffect(() => {
    if (ingredients[0] != undefined) {
      dispatch({
        type: SET_BUN,
        bun: ingredients[0],
      });
    }
  }, [ingredients]);

  useMemo(() => {
    if (ingredients[0] != undefined) {
      setCost(0);
      elements.map((element) => {
        setCost((prev) => prev + element.price);
      });
      setCost((prev) => prev + bun.price * 2);
    }
  }, [elements, bun]);

  return (
    bun && (
      <>
        {order && <OrderDetails />}
        <div
          className={styles.wrap}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          ref={dropTarget}
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
              return <Element element={element} index={index} key={index} />;
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
    )
  );
}

export default BurgerConstructor;
