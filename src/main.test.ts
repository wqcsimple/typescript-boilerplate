import {UserApi, OrderApi} from "./main";
import {greet} from './main'

test('the data is peanut butter', () => {
    expect(1).toBe(1)
});

test('greeting', () => {
    expect(greet('Foo')).toBe('Hello Foo')
});

test("login", () => {
    expect(
        UserApi.login({
            phone: "13512345678",
            password: "123"
        })
    ).toEqual(
        {"avatar": "", "name": "", "token": ""}
    )
})
