import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.expense.date.toLocaleString('en-Us', {month : 'long'});
    const year = props.expense.date.getFullYear();
    const day = props.expense.date.toLocaleString('en-Us', {day : '2-digit'});
    
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;