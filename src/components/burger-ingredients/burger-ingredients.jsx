import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import { Tab,CurrencyIcon,Counter  } from '@ya.praktikum/react-developer-burger-ui-components'


function BurgerIngredients (props) {
	 const [current, setCurrent] = React.useState('Булки');
		
	return (
	<section className={styles.wrap}>
	<h1 className="text text_type_main-medium">Соберите бургер</h1>
	<div style={{ display: 'flex' }}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
	<div className={styles.ingredients}>
		<Ingredients data={props.data} type="bun" typeRu="Булки"/>
		<Ingredients data={props.data} type="sauce" typeRu="Соусы" />
		<Ingredients data={props.data} type="main" typeRu="Начинки" />
	</div>
	</section>
	);
}

function Ingredients (props) {
		 let bun=[],sauce=[],main=[],rel=[];
	 React.useMemo(()=>{
			for(let i=0;i<props.data.length;i++){
if(props.data[i].type === "bun"){
	bun.push(props.data[i]);
}
if(props.data[i].type === "sauce"){
	sauce.push(props.data[i]);
}
if(props.data[i].type === "main"){
	main.push(props.data[i]);
}
	 }},[props.data]);
	 if(props.type === "bun"){
		 rel = bun;
	 } else if(props.type === "sauce"){
		 rel = sauce;
	 } else if(props.type === "main"){
		 rel = main;
	 }
	return (
	<>
	<h2 className="text text_type_main-medium">{props.typeRu}</h2>
{rel.map((item,index ) => {
	console.log(item);
			return (
		<div className={styles.item} key={index}>
	<img src={item.image} />
	<div className={styles.price}><p className="text text_type_digits-default">{item.price}</p><CurrencyIcon type="primary"/></div>
	<p className="text text_type_main-default" >{item.name}</p>
	<div className={styles.counter}><Counter count={1} size="default" /></div>
	</div>);
			
		})}
</>
	);
}

BurgerIngredients.propTypes = {
   data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
  }))
}; 

export default BurgerIngredients ;