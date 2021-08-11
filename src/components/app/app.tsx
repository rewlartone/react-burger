import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import ModalSwitch from "../modal-switch/modal-switch";
import SignIn from "../../pages/sign-in/sign-in";
import ForgotPass from "../../pages/forgot-password/forgot-password";
import Registration from "../../pages/registration/registration";
import Profile from "../../pages/profile/profile";
import ResetPass from "../../pages/reset-password/reset-password";
import ProtectedRoute from "../protected-route/protected-route";
import { ProvideAuth } from "../../services/auth";
import "../../style.css";
import { useDispatch, useSelector } from "../../services/hooks";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { userRequest } from "../../services/actions/user";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_MY_START,
} from "../../services/actions/ws";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isUserNotLoad, setIsUserNotLoad] = React.useState < boolean >(true);

  useEffect(() => {
    dispatch(getIngredients());
    if (localStorage.getItem("refreshToken")) {
      setIsUserNotLoad(false);
      dispatch(userRequest());
      dispatch({ type: WS_CONNECTION_MY_START });
    } else {
      setIsUserNotLoad(true);
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch(getIngredients());
    if (!localStorage.getItem("refreshToken")) {
      setIsUserNotLoad(true);
    }
  }, [user]);
  console.log(isUserNotLoad);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
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
              </DndProvider>
            </main>
          </Router>
        </ProvideAuth>
      )}
    </>
  );
};

export default App;
