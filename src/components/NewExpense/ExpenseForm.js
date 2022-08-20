import React, {useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = () => {

    /* Each state used seperately*/

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    /* Each state used multiply*/

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = (event) => {
    //    
    //     // This works but a lot of data comes at the same time. This
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value
    //     // });

    //     // This is the safer way to update something.
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value}
    //     });
    //     console.log(event.target.value)
    // };
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     });
    // };
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     });
    // };

    const sumbitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Number</label>
                    <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"  value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;