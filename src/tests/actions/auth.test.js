import { login, logout } from '../../actions/auth';

test('should generate login action', () => {
    const result = login('123abc');
    expect(result).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    });
});

test('should generate logout action', () => {
    const result = logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });
});