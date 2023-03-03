
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import'./ExpenseItem.css'

const ExpenseItem = (props) => {

    return (
      <li>
      <Card className='expense-item'>
        <ExpenseDate expense = {props.expense}/>
        <div className='expense-item__description'>
          <h2>{props.expense.title}</h2>
          <div className='expense-item__price' >{props.expense.amount}</div>
        </div>
      </Card>
      </li>
    );
}

export default ExpenseItem;