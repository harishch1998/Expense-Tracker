import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const inputFilterYearHandler = (filterYear) => {
        setFilterYear(filterYear);
    }

    const filteredExpenses = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filterYear });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filterYear} onInputFilterYear={inputFilterYearHandler} />
                <ExpensesChart expenses = {filteredExpenses}/> 
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    );
}
export default Expenses;