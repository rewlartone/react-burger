import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import "../../style.css";

function App() {
  const [state, setState] = React.useState([]);
  const url = "https://norma.nomoreparties.space/api/ingredients";
  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Ответ сети не ok");
        }
        let dataFetch = await res.json();
        dataFetch = dataFetch.data;
        setState((prev) => dataFetch);
      } catch (e) {
        console.log("Проблема с fetch запросом: ", e.message);
      }
    };
    getData(url);
  }, []);
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients data={state} />
        <BurgerConstructor data={state} />
      </main>
    </>
  );
}

export default App;
