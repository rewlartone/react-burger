import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import Modal from "../modal/modal.jsx";

function IngredientDetails({ setVisible, visible, item }) {
  return (
    <Modal
      setVisible={setVisible}
      details={"Детали ингридиента"}
      visible={visible}
    >
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

IngredientDetails.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    image_large: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }).isRequired,
};

export default IngredientDetails;
