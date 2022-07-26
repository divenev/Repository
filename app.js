
import { login, register, logaout } from './user.js'
import {catchesView} from './catchesV.js'
import { registerView } from './registerV.js'
import { loginView } from './loginV.js'

const ctx = {
    host: 'http://localhost:3030/',
    catches: 'data/catches',
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    main: document.getElementById('main'),
    userEmail: document.getElementById('userEmail')
}



// login(ctx, "divenev@abv.bg", '123456')
// console.log(sessionStorage);


// catchesView(ctx)

loginView(ctx)



