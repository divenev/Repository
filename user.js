import { getRequest, postRequest } from "./request.js"

export async function login(ctx, email, password) {
    userRequest(ctx, 'login', email, password)
}

export async function register(ctx, email, password, rePassword) {
    if (password !== rePassword) {
        alert('The passwords do not match')
        return
    }
    userRequest(ctx, 'register', email, password)
}

export function logaout(ctx) {
    sessionStorage.removeItem('userData')
    getRequest(ctx.host + ctx.logout)
}

async function userRequest(ctx, type, email, password) {
    if (email == '' || password == '') {
        alert('Enter a value in all fields')
        return
    }
    const userData = await postRequest(ctx.host + ctx[type], { email: email, password: password })
    sessionStorage.setItem('userData', JSON.stringify(userData))
}