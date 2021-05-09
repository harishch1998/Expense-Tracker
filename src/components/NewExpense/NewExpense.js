import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {

    const [expenseFormState, setExpenseFormState] = useState(false);

    const toggleExpenseForm = () => {
        setExpenseFormState((prevState) => {
            return !prevState;
        });
    }
    
    const saveExpenseFormHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id : Math.random().toString()
        };
        props.onAddNewExpenseData(expenseData);
        toggleExpenseForm();
    };

    return(
        <div className='new-expense'>
            {!expenseFormState && <button onClick = {toggleExpenseForm}>Add new Expense</button>}
            {expenseFormState && <ExpenseForm onSaveExpenseForm = {saveExpenseFormHandler} onExpenseFormAction = {toggleExpenseForm}/>}
        </div>
    );
}

export default NewExpense;