import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let expense, startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    expense = expenses[0];
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} expense={expense} history={history} />);
});

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({ note: 'new note' });
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, { note: 'new note' });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    const id = expense.id;
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});