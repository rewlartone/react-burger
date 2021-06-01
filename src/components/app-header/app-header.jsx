import React from 'react';
import styles from './app-header.module.css';
import { Logo,BurgerIcon,ListIcon,ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
 

function AppHeader () {
	return (
	<header className={styles.header}>
	<nav className={styles.logo}><Logo /></nav>
	 <nav>
	 <a href='#' className={`${styles.menu} text text_type_main-default`}><BurgerIcon className={styles.img} type="primary" />Конструктор</a>
	 <a href='#' className={`${styles.menu} text text_type_main-default`}><ListIcon className={styles.img} type="primary" />Лента заказов</a>
	 </nav>
	 <a href='#' className={`${styles.menu} text text_type_main-default`}><ProfileIcon className={styles.img} type="primary" />Личный кабинет</a>
	</header>
	);
}

export default AppHeader ;
