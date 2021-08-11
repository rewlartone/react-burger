import React from "react";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";
import Ingredient from "../ingredient/ingredient";
import Modal from "../modal/modal";
import { TIngredient } from "../../services/types";

interface IIngredients {
  data: TIngredient[];
  type: string;
  typeRu: string;
}

const Ingredients: React.FC<IIngredients> = (props) => {

  return (
    <>
      <h2 className="text text_type_main-medium" id={props.type}>
        {props.typeRu}
      </h2>
      <div
        id={props.type + "sblock"}
        style={{ height: "auto", position: "relative", float: "left" }}
      >
        {props.data.map((item, index) => {
          return <Ingredient item={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default Ingredients;
