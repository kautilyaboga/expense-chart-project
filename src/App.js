import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];

  const [expensesList,setExpensesList] = useState(expenses);

  const addExpenseHandler = expense =>{
    // console.log('In App.js');
    // console.log(expense);
    setExpensesList((prevExpensesList)=> [expense,...prevExpensesList])
  }

  

  return (
    
      <div>
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses expenses ={expensesList}/>
      </div>
  );
}

export default App;
