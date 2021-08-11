import React from "react";
import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../services/auth";
import PropTypes from "prop-types";

interface IMenu {
  phrase: string;
}

const Menu: React.FC<IMenu> = (props) => {
  let auth: any = useAuth();

  const signOut = (): void => {
    auth.signOut();
  };

  return (
    <div className={styles.menu}>
      <NavLink
        exact={true}
        to={{ pathname: `/profile` }}
        className={`${styles.nav} text text_type_main-large`}
        activeClassName={styles.navactive}
      >
        Профиль
      </NavLink>
      <NavLink
        exact={true}
        to={{ pathname: `/profile/orders` }}
        className={`${styles.nav} text text_type_main-large`}
        activeClassName={styles.navactive}
      >
        История заказов
      </NavLink>
      <NavLink
        exact={true}
        to={{ pathname: `/` }}
        onClick={signOut}
        className={`${styles.nav} text text_type_main-large`}
        activeClassName={styles.navactive}
      >
        Выход
      </NavLink>
      <p className="text text_type_main-default">{props.phrase}</p>
    </div>
  );
};

export default Menu;
