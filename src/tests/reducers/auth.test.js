import authReducer from '../../reducers/auth';

test('should generate default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({});
});

test('should login user', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        uid: action.uid
    });
});

test('should logout user', () => {
    const defaultState = {
        uid: '123abc'
    };
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(defaultState, action);
    expect(state).toEqual({});
})