import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function IngredientDetails() {
  const { item } = useSelector((store) => store.modal);

  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const itemUrl = id
    ? ingredients.find((ingredients) => ingredients._id === id)
    : null;
  const ingredient = itemUrl || item;

  return (
    <>
      {ingredients[0] && (
        <div className={styles.details}>
          {id && (
            <p
              className="text text_type_main-large"
              style={{ marginTop: "40px" }}
            >
              Детали ингредиента
            </p>
          )}
          <img
            src={ingredient.image_large}
            alt={"рисунок " + ingredient.name}
          />
          <p className="text text_type_main-medium">{ingredient.name}</p>
          <ul>
            <li>
              <p className="text text_type_main-default">Калории, ккал</p>
              <br />
              <p className="text text_type_digits-default">
                {ingredient.calories}
              </p>
            </li>
            <li>
              <p className="text text_type_main-default">Белки, г</p>
              <br />
              <p className="text text_type_digits-default">
                {ingredient.proteins}
              </p>
            </li>
            <li>
              <p className="text text_type_main-default">Жиры, г</p>
              <br />
              <p className="text text_type_digits-default">{ingredient.fat}</p>
            </li>
            <li>
              <p className="text text_type_main-default">Углеводы, г</p>
              <br />
              <p className="text text_type_digits-default">
                {ingredient.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default IngredientDetails;
