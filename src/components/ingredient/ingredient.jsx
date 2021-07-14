import React from "react";
import PropTypes from "prop-types";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { SET_ITEM } from "../../services/actions/modal.jsx";
import { useDrag } from "react-dnd";

function Ingredient(props) {
  const dispatch = useDispatch();
  const { elements } = useSelector((store) => store.burgerConstructor);
  const { bun } = useSelector((store) => store.burgerConstructor);

  function popup(item) {
    dispatch({
      type: SET_ITEM,
      item: item,
    });
  }

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: props.item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });
  
  
  return (
    <div
      className={styles.item}
      onClick={() => {
        popup(props.item);
      }}
      ref={dragRef}
      style={{ cursor: "pointer", opacity }}
    >
      <img src={props.item.image} alt={'рисунок ' + props.item.name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{props.item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{props.item.name}</p>
      <div className={styles.counter}>
        <Counter
          count={bun === null ? (elements.filter((element) => element._id === props.item._id).length) : (bun._id === props.item._id
              ? 2 : elements.filter((element) => element._id === props.item._id).length)}
          size="default"
        />
      </div>
    </div>
  );
}

Ingredient.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ingredient;
