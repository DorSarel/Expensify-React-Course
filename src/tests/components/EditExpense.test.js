import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let expense, editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    expense = expenses[0];
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense editExpense={editExpense} removeExpense={removeExpense} expense={expense} history={history} />);
});

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({ note: 'new note' });
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, { note: 'new note' });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    const id = expense.id;
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});