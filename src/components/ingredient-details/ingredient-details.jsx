import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import Modal from "../modal/modal.jsx";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { item } = useSelector((store) => store.modal);

  return (
    <Modal details={"Детали ингридиента"}>
      <div className={styles.details}>
        <img src={item.image_large} />
        <p className="text text_type_main-medium">{item.name}</p>
        <ul>
          <li>
            <p className="text text_type_main-default">Калории, ккал</p>
            <br />
            <p className="text text_type_digits-default">{item.calories}</p>
          </li>
          <li>
            <p className="text text_type_main-default">Белки, г</p>
            <br />
            <p className="text text_type_digits-default">{item.proteins}</p>
          </li>
          <li>
            <p className="text text_type_main-default">Жиры, г</p>
            <br />
            <p className="text text_type_digits-default">{item.fat}</p>
          </li>
          <li>
            <p className="text text_type_main-default">Углеводы, г</p>
            <br />
            <p className="text text_type_digits-default">
              {item.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default IngredientDetails;
