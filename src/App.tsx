import React from 'react';

function App() {

  const name: string = "Giovanna"
  const age: number = 18
  const isStudent: boolean = true
  return (
    <div className="App">
     <h1>Projeto com ts</h1>
     <h2>Nome: {name}</h2>
     <p>Idade: {age}</p>
     {isStudent && <p>Sim está estudando</p>}
    </div>
  );
}

export default App;
