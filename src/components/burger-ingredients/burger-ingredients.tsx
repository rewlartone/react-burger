import React, { useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import Ingredients from "../ingredients/ingredients";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "../../services/hooks";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../services/types"

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();

  const { ingredients } = useSelector((store) => store.ingredients);

  const [current, setCurrent] = React.useState("Булки");
  const buns = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === "bun"),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === "sauce"),
    [ingredients]
  );
  const mains = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === "main"),
    [ingredients]
  );

  const ingredientsHTML = useRef<HTMLDivElement>(null);
  useEffect(() => {
	  if(ingredientsHTML.current){
    const current: HTMLDivElement = ingredientsHTML.current;
    current.addEventListener("scroll", detectCurrent);
    return () => current.removeEventListener("scroll", detectCurrent);
	  }
  }, [ingredientsHTML.current]);

  const detectCurrent = (): void => {
	  if(ingredientsHTML.current){
    if (
      Math.ceil(ingredientsHTML.current.scrollTop) <
      document.getElementById("bunsblock")!.offsetHeight
    ) {
      setCurrent("Булки");
    } else if (
      Math.ceil(ingredientsHTML.current.scrollTop) <
      document.getElementById("bunsblock")!.offsetHeight +
        document.getElementById("saucesblock")!.offsetHeight
    ) {
      setCurrent("Соусы");
    } else {
      setCurrent("Начинки");
    }
	  }
  };

  const setTab = (tab: string) => {
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
      <div className={styles.ingredients} ref={ingredientsHTML}>
        <Ingredients data={buns} type="bun" typeRu="Булки" />
        <Ingredients data={sauces} type="sauce" typeRu="Соусы" />
        <Ingredients data={mains} type="main" typeRu="Начинки" />
      </div>
    </section>
  );
}

export default BurgerIngredients;
