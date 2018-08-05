import getExpensesTotal from '../../selectores/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal();
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const result = getExpensesTotal(expenses);
    expect(result).toBe(total);
});