import React from "react";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.logo}>
        <Logo />
      </nav>
      <nav>
        <NavLink
          exact={true}
          to={{ pathname: `/` }}
          className={`${styles.menu} text text_type_main-default`}
          activeClassName={styles.menuactive}
        >
          <BurgerIcon type="primary" />
          Конструктор
        </NavLink>
        <NavLink
          exact={true}
          to={{ pathname: `/feed` }}
          className={`${styles.menu} text text_type_main-default`}
          activeClassName={styles.menuactive}
        >
          <ListIcon type="primary" />
          Лента заказов
        </NavLink>
      </nav>
      <NavLink
        to={{ pathname: `/profile` }}
        className={`${styles.menu} text text_type_main-default`}
        activeClassName={styles.menuactive}
      >
        <ProfileIcon type="primary" />
        Личный кабинет
      </NavLink>
    </header>
  );
};

export default AppHeader;
