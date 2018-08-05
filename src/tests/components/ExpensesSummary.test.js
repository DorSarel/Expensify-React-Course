import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import getExpensesTotal from '../../selectores/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 2 expenses', () => {
    const total = getExpensesTotal([expenses[0], expenses[1]]);
    const visibleExpenses = [expenses[0], expenses[1]].length;
    const wrapper = shallow(<ExpensesSummary expensesCount={visibleExpenses} expensesTotal={total} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expenses', () => {
    const total = getExpensesTotal([expenses[0]]);
    const visibleExpenses = [expenses[0]].length;
    const wrapper = shallow(<ExpensesSummary expensesCount={visibleExpenses} expensesTotal={total} />);
    expect(wrapper).toMatchSnapshot();
});