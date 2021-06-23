interface LoginBody {
    phone: string,
    password: string,
    code?: string
}

interface LoginResponse {
    token: string,
    name: string,
    avatar: string
}

class UserApi {
    constructor() {
    }

    login(loginBody: LoginBody): LoginResponse {

        console.log("phone: ", loginBody.phone)
        console.log("password: ", loginBody.password)
        console.log("code: ", loginBody.code)

        return {avatar: "", name: "", token: ""}
    }

}

export default new UserApi()
