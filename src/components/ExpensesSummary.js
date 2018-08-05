import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectores/expenses';
import getExpensesTotal from '../selectores/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {props.expensesCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);