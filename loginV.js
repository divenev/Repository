import { html } from "../node_modules/lit-html/lit-html.js";
import { catchesView } from "./catchesV.js";
import { login } from "./user.js";
import { view } from "./viewPage.js"

let context = null

let templates = html`
    <section id="login-view">
        <h2>Login</h2>
        <form @submit=${onSubmit} id="login">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <p class="notification"></p>
            <button>Login</button>
        </form>
    </section>
`

export async function loginView(ctx) {
    view(await templates, ctx.main)
    context = ctx
}

function onSubmit(ev) {
    ev.preventDefault()
    let formData = new FormData(ev.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    login(context, email, password)
    document.getElementsByTagName('button')[0].disabled = true

    //Home pages
    catchesView(context)
}


