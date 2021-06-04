import React, { useEffect } from "react";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredients(props) {
  const [visible, setVisible] = React.useState(false);
  const [ingredient, setIngredient] = React.useState({});
  function popup(item) {
    setIngredient(item);
    setVisible(true);
  }

  return (
    <>
      <IngredientDetails
        setVisible={setVisible}
        visible={visible}
        item={ingredient}
      />
      <h2 className="text text_type_main-medium" id={props.type}>
        {props.typeRu}
      </h2>
      {props.data.map((item, index) => {
        return (
          <div
            className={styles.item}
            key={item._id}
            onClick={() => popup(item)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} />
            <div className={styles.price}>
              <p className="text text_type_digits-default">{item.price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{item.name}</p>
            <div className={styles.counter}>
              <Counter count={1} size="default" />
            </div>
          </div>
        );
      })}
    </>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Ingredients;
