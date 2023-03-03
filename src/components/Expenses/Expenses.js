import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [filterYear,setFilterYear] = useState('2020');

    const expenses = props.expenses;
    console.log(expenses);

    const FilterExpensesHandler = (filterYearData) =>{
        setFilterYear(filterYearData)
        console.log(filterYear);
    }

    const filteredExpenses = props.expenses.filter((expense)=>{
        return filterYear === expense.date.getFullYear().toString()
    })

    // let expensesContent = <p>No Expenses Found</p>

    // if(filteredExpenses.length > 0){
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem key={expense?.id} expense={expense} />
    //       ))
    // }

    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterExpenses={FilterExpensesHandler}
        />
        <ExpensesChart expenses ={filteredExpenses}/>
        <ExpensesList expenses ={filteredExpenses} />


      </Card>
    );
}

export default Expenses;