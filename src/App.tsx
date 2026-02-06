import React from "react";

import FirstComponent from "./components/FirstComponent";

import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

import State from "./components/State";

function App() {
  const name: string = "Giovanna";
  const age: number = 18;
  const isStudent: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };
  return (
    <div className="App">
      <h1>Projeto com ts</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isStudent && <p>Sim está estudando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo" />
      <Destructuring
        title="primeiro post"
        content="conteúdo"
        commentsQty={10}
        tags={["ts", "gigi"]}
        category={Category.TS}
      />
      <State />
    </div>
  );
}

export default App;
