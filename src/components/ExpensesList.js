import React from "react";
import "./ExpensesList.js";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {


  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">found no expense</h2>;
  }

  return (
    <ul className="expenses-list">
 
 {props.items.map((expense) => (
        <ExpenseItem
           key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
