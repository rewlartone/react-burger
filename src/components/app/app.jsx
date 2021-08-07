import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header.jsx";
import ModalSwitch from "../modal-switch/modal-switch.jsx";
import SignIn from "../../pages/sign-in/sign-in.jsx";
import ForgotPass from "../../pages/forgot-password/forgot-password.jsx";
import Registration from "../../pages/registration/registration.jsx";
import Profile from "../../pages/profile/profile.jsx";
import OrderFeed from "../../pages/order-feed/order-feed.jsx";
import OrderInfo from "../../pages/order-info/order-info.jsx";
import OrderHistory from "../../pages/order-history/order-history.jsx";
import ResetPass from "../../pages/reset-password/reset-password.jsx";
import ProtectedRoute from "../protected-route/protected-route.jsx";
import { getCookie } from "../../services/auth.jsx";
import { ProvideAuth } from "../../services/auth";
import "../../style.css";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { userRequest } from "../../services/actions/user.jsx";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  let isUserNotLoad = true;
  useEffect(() => {
    dispatch(getIngredients());
    if (getCookie("refreshToken")) {
      isUserNotLoad = false;
      dispatch(userRequest());
    }
  }, [dispatch]);
  
  return (
    <>
      {(isUserNotLoad || user.email) && (
        <ProvideAuth>
          <Router>
            <AppHeader />

            <main>
              <DndProvider backend={HTML5Backend}>
			   <ModalSwitch />
                <Route path="/login">
                  <SignIn />
                </Route>
                <Route path="/forgot-password">
                  <ForgotPass />
                </Route>
                <Route path="/reset-password">
                  <ResetPass />
                </Route>
                <Route path="/register">
                  <Registration />
                </Route>
                <ProtectedRoute path="/profile" exact={true}>
                  <Profile />
                </ProtectedRoute>
                <ProtectedRoute path="/profile/orders" exact={true}>
                  <OrderHistory />
                </ProtectedRoute>
                <Route path="/feed" exact={true}>
                  <OrderFeed />
                </Route>
                <Route exact path="/feed/:id">
                  {" "}
                  <OrderInfo />{" "}
                </Route>
                <ProtectedRoute exact path="/profile/orders/:id">
                  {" "}
                  <OrderInfo />{" "}
	  </ProtectedRoute>
              </DndProvider>
            </main>
          </Router>
        </ProvideAuth>
      )}
    </>
  );
}


export default App;
