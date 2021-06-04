import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Ingredients from "../ingredients/ingredients.jsx";
import Modal from "../modal/modal.jsx";

import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("Булки");
  const buns = useMemo(
    () => props.data.filter((item) => item.type === "bun"),
    [props.data]
  );
  const sauces = useMemo(
    () => props.data.filter((item) => item.type === "sauce"),
    [props.data]
  );
  const mains = useMemo(
    () => props.data.filter((item) => item.type === "main"),
    [props.data]
  );

  const setTab = (tab) => {
    setCurrent(tab);
    let element;
    if (tab === "Булки") element = document.getElementById("bun");
    if (tab === "Соусы") element = document.getElementById("sauce");
    if (tab === "Начинки") element = document.getElementById("main");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.wrap}>
      <h1 className="text text_type_main-medium">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab value="Булки" active={current === "Булки"} onClick={setTab}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Начинки"} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredients}>
        <Ingredients data={buns} type="bun" typeRu="Булки" />
        <Ingredients data={sauces} type="sauce" typeRu="Соусы" />
        <Ingredients data={mains} type="main" typeRu="Начинки" />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BurgerIngredients;
