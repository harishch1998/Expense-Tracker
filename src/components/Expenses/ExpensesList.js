import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import Card from '../UI/Card';

const ExpensesList = (props) => {

    let expenseItemsList = props.items.map((expense) => 
    (<ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
    />))

    let totalSum = 0;
    props.items.forEach(element => {
        totalSum += element.amount;
    });

    if(props.items.length === 0){
        return (<h2 className = 'expenses-list__fallback'>No expenses found.</h2>);
    } 
    return (<ul className = 'expenses-list'>
    {expenseItemsList}
    <Card className='expense-item'>
        <div className='expense-item__description'>
            <h2>TOTAL EXPENSES</h2>
            <div className='expense-item__price'>${totalSum}</div>
        </div>
    </Card>
    </ul>);
}
export default ExpensesList;