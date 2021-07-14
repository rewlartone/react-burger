import React from "react";
import styles from "./feed.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Feed(props) {
  return (
    <ul
      className={styles.feed}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {/*elements.map((element, index) => {
              
            })*/}

      <li className={styles.order}>
        <Link
          to={{ pathname: `/${props.type}/034535` }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #034535
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              close: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            Death Star Starship Main бургер
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
                float: "left",
                close: "both",
                marginLeft: "24px",
                marginTop: "8px",
              }}
            >
              Готовится
            </p>
          )}
          <ul className={styles.circles}>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <p
                className="text text_type_digits-default"
                style={{ position: "absolute", top: "14px", left: "10px" }}
              >
                +3
              </p>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
                style={{ opacity: "0.3	" }}
              />
            </li>
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">100</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>{" "}
      </li>
      <li className={styles.order}>
        <Link
          to={{ pathname: `/${props.type}/035536` }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #035536
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              close: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            Death Star Starship Main бургер
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
                float: "left",
                close: "both",
                marginLeft: "24px",
                marginTop: "8px",
              }}
            >
              Готовится
            </p>
          )}
          <ul className={styles.circles}>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">100</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>{" "}
      </li>
      <li className={styles.order}>
        <Link
          to={{ pathname: `/${props.type}/036537` }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #036537
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              close: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            Death Star Starship Main бургер
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
                float: "left",
                close: "both",
                marginLeft: "24px",
                marginTop: "8px",
              }}
            >
              Готовится
            </p>
          )}
          <ul className={styles.circles}>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">100</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>{" "}
      </li>
      <li className={styles.order}>
        <Link
          to={{ pathname: `/${props.type}/037538` }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #037538
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              close: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            Death Star Starship Main бургер
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
                float: "left",
                close: "both",
                marginLeft: "24px",
                marginTop: "8px",
              }}
            >
              Готовится
            </p>
          )}
          <ul className={styles.circles}>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">100</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>
      </li>
      <li className={styles.order}>
        <Link
          to={{ pathname: `/${props.type}/038539` }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #038539
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              close: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            Death Star Starship Main бургер
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
                float: "left",
                close: "both",
                marginLeft: "24px",
                marginTop: "8px",
              }}
            >
              Готовится
            </p>
          )}
          <ul className={styles.circles}>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
            <li className={styles.circle}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-03.png"
                width="60px"
              />
            </li>
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">100</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>
      </li>
    </ul>
  );
}
Feed.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
export default Feed;
