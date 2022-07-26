import {html} from "../node_modules/lit-html/lit-html.js";
import {getRequest} from "./request.js"
import {view} from "./viewPage.js"

let templates = (data) => html`
        <section id="home-view">
            <fieldset id="main">
                <legend>Catches</legend>
                <div id="catches">'
                    ${data.map((d) => html`
                    <div class="catch">
                        <label>Angler</label>
                        <input type="text" class="angler" value="${d.angler}">
                        <label>Weight</label>
                        <input type="text" class="weight" value="${d.weight}">
                        <label>Species</label>
                        <input type="text" class="species" value="${d.species}">
                        <label>Location</label>
                        <input type="text" class="location" value="${d.location}">
                        <label>Bait</label>
                        <input type="text" class="bait" value="${d.bait}">
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value="${d.captureTime}">
                        <button class="update" data-id="${d._ownerId}">Update</button>
                        <button class="delete" data-id="${d._ownerId}">Delete</button>
                    </div>`
                    )}
                </div>
            </fieldset>
        </section>
`

export async function catchesView(ctx) {
    let data = await getRequest(ctx.host + ctx.catches)
    view(await templates(data), ctx.main)
}