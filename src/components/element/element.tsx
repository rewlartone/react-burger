import React from "react";
import PropTypes from "prop-types";
import styles from "../burger-constructor/burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../services/hooks";
import {
  SET_ELEMENT_BETWEEN,
  DELETE_ELEMENT,
} from "../../services/actions/constructor";
import { useDrop, useDrag } from "react-dnd";
import { TIngredient } from "../../services/types";

interface IElement {
  element: TIngredient;
  index: number;
}

const Element: React.FC<IElement> = (props) => {
  const dispatch = useDispatch();

  const index: number = props.index;
  const element: TIngredient = props.element;
  const [{ isHover }, dropTarget] = useDrop({
    accept: "element",
    drop(item: IElement) {
      setElementBetween(item.index, index, item.element);
    },
  });
  const [{ opacity }, dragRef] = useDrag({
    type: "element",
    item: { index, element },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  function setElementBetween(
    indexWho: number,
    indexBetween: number,
    element: TIngredient
  ): void {
    dispatch({
      type: DELETE_ELEMENT,
      index: indexWho,
    });

    dispatch({
      type: SET_ELEMENT_BETWEEN,
      index: indexBetween,
      element: element,
    });
  }

  const deleteElement = (id: number): void => {
    dispatch({
      type: DELETE_ELEMENT,
      index: id,
    });
  };

  return (
    <li className={styles.element} style={{ opacity }} ref={dragRef}>
      <div className={styles.icon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={props.element.name}
        price={props.element.price}
        thumbnail={props.element.image}
        handleClose={() => deleteElement(props.index)}
      />
      <div className={styles.dropContainer} ref={dropTarget}></div>
    </li>
  );
};

export default Element;
