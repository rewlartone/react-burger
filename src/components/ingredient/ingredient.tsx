import React from "react";
import PropTypes from "prop-types";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/hooks";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";
import { TIngredient } from "../../services/types";

interface IIngredient {
  item: TIngredient;
}

const Ingredient: React.FC<IIngredient> = (props) => {
  const { elements } = useSelector((store) => store.burgerConstructor);
  const { bun } = useSelector((store) => store.burgerConstructor);
  const location = useLocation();

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: props.item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  return (
    <Link
      key={props.item._id}
      to={{
        pathname: `/ingredients/${props.item._id}`,
        state: { background: location },
      }}
      style={{ color: "#fff" }}
    >
      <div
        className={styles.item}
        ref={dragRef}
        style={{ cursor: "pointer", opacity }}
      >
        <img src={props.item.image} alt={"рисунок " + props.item.name} />
        <div className={styles.price}>
          <p className="text text_type_digits-default">{props.item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{props.item.name}</p>
        <div className={styles.counter}>
          <Counter
            count={
              bun === null
                ? elements.filter(
                    (element: TIngredient) => element._id === props.item._id
                  ).length
                : bun._id === props.item._id
                ? 2
                : elements.filter(
                    (element: TIngredient) => element._id === props.item._id
                  ).length
            }
            size="default"
          />
        </div>
      </div>
    </Link>
  );
};

export default Ingredient;
