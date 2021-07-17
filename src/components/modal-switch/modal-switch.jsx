import React, { useEffect } from "react";
import Modal from "../modal/modal.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { Route, Switch, useLocation, useHistory  } from "react-router-dom";


 function ModalSwitch() {
  const location = useLocation();
  const history = useHistory(); 
  const background = history.action === "PUSH";
  
  return (
    <>
      <Switch>
        <Route exact path="/">
		<BurgerIngredients />
        <BurgerConstructor />
		</Route>    {background && <Route path="/ingredients/:id" children={<><BurgerIngredients />
        <BurgerConstructor /><Modal details={"Детали ингридиента"}><IngredientDetails /> </Modal></>} />}
      </Switch>
	  { !background && <Route path="/ingredients/:id" children={<IngredientDetails />} /> }
    </>
  );
}
export default ModalSwitch;