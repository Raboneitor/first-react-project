import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectFilterHandler = yearFilter => {
        setFilteredYear(yearFilter);
    }

    const filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onSelectFilter={selectFilterHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;