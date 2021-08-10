import React, { useMemo } from "react";
import OrderDetails from "../order-details/order-details";
import Element from "../element/element";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/hooks";
import { ORDER_DETAILS } from "../../services/actions/modal";
import { getOrder } from "../../services/actions/modal";
import { DELETE_ELEMENT } from "../../services/actions/constructor";
import { useDrop } from "react-dnd";
import { SET_ELEMENT } from "../../services/actions/constructor";
import { SET_BUN } from "../../services/actions/constructor";
import { useHistory } from "react-router-dom";
import { TIngredient } from "../../services/types";

const BurgerConstructor: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: TIngredient) {
      addElement(item);
    },
  });

  function addElement(item: TIngredient): void {
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
  const { user } = useSelector((store) => store.user);
  const { order } = useSelector((store) => store.modal);
  const { elements } = useSelector((store) => store.burgerConstructor);
  const { bun } = useSelector((store) => store.burgerConstructor);
  const [cost, setCost] = React.useState < number >(0);

  const popup = (): void => {
    if (user.email) {
      if (elements[0] && bun) {
        const idsForOrder = elements.map((item: TIngredient) => {
          return item._id;
        });
        idsForOrder.push(bun._id);
        idsForOrder.push(bun._id);
        dispatch(getOrder(idsForOrder));
        dispatch({
          type: ORDER_DETAILS,
        });
      }
    } else {
      history.replace({ pathname: "/login" });
    }
  };

  const deleteElement = (id: number) => {
    dispatch({
      type: DELETE_ELEMENT,
      index: id,
    });
  };

  useMemo(() => {
    if (ingredients[0] !== undefined) {
      setCost(0);
      elements.forEach((element: TIngredient) => {
        setCost((prev) => prev + element.price);
      });
      if (bun !== null) setCost((prev) => prev + bun.price * 2);
    }
  }, [elements, bun]);

  return (
    <>
      {order && <OrderDetails />}
      <div
        className={styles.wrap}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        ref={dropTarget}
      >
        {!elements[0] && !bun && (
          <p
            className="text text_type_main-default"
            style={{ textAlign: "center" }}
          >
            Перетащите ингредиент, чтобы собрать бургер
          </p>
        )}
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun && bun.name || ''}
          price={bun && bun.price || 0}
          thumbnail={bun && bun.image || ''}
        />
        <ul
          className={styles.elements}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {/*При попытке поставить key={element._id} реакт пишет "Keys should be unique", тут ведь могут быть 2 и более одинаковых элемента, поэтому оставил index*/}
          {elements.map((element: TIngredient, index: number) => {
            return <Element element={element} index={index} key={index} />;
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun && bun.name || ''}
          price={bun && bun.price || 0}
          thumbnail={bun && bun.image || ''}
        />
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{cost}</p>
          <CurrencyIcon type="primary" />
          <Button
            type="primary"
            size="large"
            onClick={() => {
              elements[0] && bun && popup();
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
