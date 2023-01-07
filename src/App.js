import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENS = [
  {
    id: "e1",
    title: "Mouse",
    amount: 250,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Keyboard", amount: 1800, date: new Date(2021, 2, 12) },
  { id: "e3", title: "Earphone", amount: 1800, date: new Date(2022, 2, 28) },
  { id: "e4", title: "Mobile", amount: 18500, date: new Date(2021, 5, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENS);

  const addExpenseHandler = (expense) => {
    //  setExpenses([expense , ...expenses ]);
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div className="App-header">
      <h2>Hello dost !!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
