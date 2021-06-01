import React from 'react';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import '../../style.css';
import data from '../../utils/data.js';


function App() {
	
	return (
	<>
	<AppHeader />
	<main>
	<BurgerIngredients data={data} />
	<BurgerConstructor data={data} />
	</main>
	</>
	);
}

export default App;
