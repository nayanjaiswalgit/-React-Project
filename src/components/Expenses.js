import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFileredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFileredYear(selectedYear);
 
  };

const filteredExpenses = props.items.filter((expense) => {
  
return expense.date.getFullYear().toString() === filteredYear;

});


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>   
       <ExpensesChart expense={filteredExpenses}/> 
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
