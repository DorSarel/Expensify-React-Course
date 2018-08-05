
const getExpensesTotal = (expenses = []) => {
    const initalValue = 0;
    return expenses.map((expense) => expense.amount).reduce((total, currentValue) => total += currentValue, initalValue);
};

export default getExpensesTotal;