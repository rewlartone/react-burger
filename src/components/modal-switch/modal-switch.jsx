import React, { useEffect } from "react";
import Modal from "../modal/modal.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { Route, Switch, useLocation, useHistory  } from "react-router-dom";


 function ModalSwitch() {
  const location = useLocation();
  const history = useHistory(); 
  let background = location.state && location.state.background ;
  if(!(history.action === "PUSH")){
	  background = undefined;
  }
  return (
    <>
      <Switch location={ background || location }>
        <Route exact path="/">
		<BurgerIngredients />
        <BurgerConstructor />
		</Route>  
		<Route path="/ingredients/:id" children={<IngredientDetails/>} 	/>
      </Switch>
	  { background && <Route path="/ingredients/:id" children={<Modal details={"Детали ингридиента"}><IngredientDetails /> </Modal>} /> }
    </>
  );
}
export default ModalSwitch;