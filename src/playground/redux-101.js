import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;
        case 'SET':
            return {
                count: action.count
            }
            break;
        case 'RESET':
            return {
                count: 0
            };
            break;
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// Actions - object that gets sent to the store and modified the store

// Increment Action
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

// Reset
store.dispatch(resetCount());

// Decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// Set
store.dispatch(setCount({ count: 100 }));