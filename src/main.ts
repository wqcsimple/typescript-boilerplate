import {UserApiModule} from "./api/user/user.api";
import {OrderApiModule} from "./api/order/order.api";

export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`

export const foo = async (): Promise<boolean> => {
    console.log(greet('World'))
    await delayMillis(1000)
    console.log('done')
    return true
}

export const UserApi = new UserApiModule()
export const OrderApi = new OrderApiModule()
export default {
    UserApi,
    OrderApi
}