import React from "react";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import Ingredient from "../ingredient/ingredient.jsx";

function Ingredients(props) {
  const { visible } = useSelector((store) => store.modal);
  const { bun } = useSelector((store) => store.burgerConstructor);

  return (
    bun && (
      <>
        {visible && <IngredientDetails />}
        <h2 className="text text_type_main-medium" id={props.type}>
          {props.typeRu}
        </h2>
        <div
          id={props.type + "sblock"}
          style={{ height: "auto", position: "relative", float: "left" }}
        >
          {props.data.map((item, index) => {
            return <Ingredient item={item} key={index} />;
          })}
        </div>
      </>
    )
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
