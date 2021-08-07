import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { useLocation, Link, useHistory } from "react-router-dom";
import { TIngredient } from "../../services/types";

const IngredientDetails: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const isPopUp: boolean = history.action === "PUSH";
  const { id }: { id: string } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const ingredient: TIngredient | null = id
    ? ingredients.find((ingredients: TIngredient) => ingredients._id === id)
    : null;
  return (
    <>
      {ingredient && (
        <div className={styles.details}>
          {!isPopUp && (
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
};

export default IngredientDetails;
