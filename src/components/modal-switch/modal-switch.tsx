import React, { useEffect } from "react";
import Modal from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderFeed from "../../pages/order-feed/order-feed";
import OrderInfo from "../../pages/order-info/order-info";
import ProtectedRoute from "../protected-route/protected-route";
import OrderHistory from "../../pages/order-history/order-history";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

const ModalSwitch: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  let background = location.state && location.state.background;
  console.log(location);
  if (!(history.action === "PUSH")) {
    background = undefined;
  }
  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <BurgerIngredients />
          <BurgerConstructor />
        </Route>
        <Route path="/ingredients/:id" children={<IngredientDetails />} />

        <Route path="/feed" exact={true}>
          <OrderFeed />
        </Route>
        <Route exact path="/feed/:id">
          <OrderInfo />
        </Route>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <OrderHistory />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderInfo />
        </ProtectedRoute>
      </Switch>
      {background && background.pathname === "/" && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal details={"Детали ингридиента"} close>
              <IngredientDetails />{" "}
            </Modal>
          }
        />
      )}
      {background && background.pathname === "/feed" && (
        <Route
          path="/feed/:id"
          children={
            <Modal close>
              <OrderInfo inModal />{" "}
            </Modal>
          }
        />
      )}
      {background && background.pathname === "/profile/orders" && (
        <Route
          path="/profile/orders/:id"
          children={
            <Modal close>
              <OrderInfo inModal />{" "}
            </Modal>
          }
        />
      )}
    </>
  );
};
export default ModalSwitch;
