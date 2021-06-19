import React from "react";
import PropTypes from "prop-types";
import styles from "../burger-constructor/burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import {
  SET_ELEMENT_BETWEEN,
  DELETE_ELEMENT,
  SET_DRAG,
} from "../../services/actions/constructor.jsx";
import { useDrop, useDrag } from "react-dnd";

function Element(props) {
  const dispatch = useDispatch();

  const index = props.index;
  const element = props.element;
  const [{ isHover }, dropTarget] = useDrop({
    accept: "element",
    drop(item) {
      setElementBetween(item.index, index, item.element);
    },
  });
  const [{ opacity, drag }, dragRef] = useDrag({
    type: "element",
    item: { index, element },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  function setElementBetween(indexWho, indexBetween, element) {
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

  const deleteElement = (id) => {
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
}

Element.propTypes = {
  element: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Element;
