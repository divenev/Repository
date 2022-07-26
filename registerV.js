import { html } from "../node_modules/lit-html/lit-html.js";
import { catchesView } from "./catchesV.js";
import { register } from "./user.js";
import { view } from "./viewPage.js"

let context = null

let templates = html`
    <section id="register-view">
        <h2>Register</h2>
        <form @submit=${onSubmit} id="register">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <p class="notification"></p>
            <button>Register</button>
        </form>
    </section>
`

export async function registerView(ctx) {
    view(await templates, ctx.main)
    context = ctx
}

function onSubmit(ev) {
    ev.preventDefault()
    let formData = new FormData (ev.currentTarget) 
    const email = formData.get('email')
    const password = formData.get('password')
    const rePassword = formData.get('rePass')
   
    register(context, email, password, rePassword)
    document.getElementsByTagName('button')[0].disabled = true

    //Home pages
    catchesView(context)
}


