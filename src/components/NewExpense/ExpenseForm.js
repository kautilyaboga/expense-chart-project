import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [userInput,setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })



    const [formOpen,setFormOpen] = useState(false);
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        // console.log('Title Changed');
        // console.log(event);
        setEnteredTitle(event.target.value)

        // Not Ideal
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })

        // // If current state relies on previous state then use this.
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle : event.target.value};
        // })

    };

    const amountChangeHandler = (event) =>{

        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData ={
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormOpen(false);

    };

    const cancelHandler = (event)=>{
        event.preventDefault();
        setFormOpen(false);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const openFormHandler = (event)=>{
        event.preventDefault();
        setFormOpen(true);
    }



    return (formOpen ?
    
    
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label > Title</label>
                <input value={enteredTitle} onChange={(event)=>titleChangeHandler(event)} type="text" />
            </div>
            <div className="new-expense__control">
                <label > Amount</label>
                <input value={enteredAmount} onChange={(event)=>amountChangeHandler(event)} type="number" min = '0.01' step = '0.01' />
            </div>
            <div className="new-expense__control">
                <label > Date</label>
                <input value={enteredDate} onChange={(event)=>dateChangeHandler(event)} type="date" min = "2019-01-01" max="2022-12-31"/>
            </div>
            <div className="new-expense__actions" onClick={cancelHandler}><button >Cancel</button></div>
            <div className="new-expense__actions"><button type='submit'>Add Expense</button></div>
        </div>
    </form>
    : <div className="new-expense__actions" onClick={openFormHandler}><button >Add New Expense</button></div>

    )



}

export default ExpenseForm