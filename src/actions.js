import { baseUrl } from "./base_url";
import { redirect } from "react-router-dom"

// const URL = "http://localhost:4000"

export const createAction = async ({ request}) => {
    // get data from form
    const formData = await request.formData()
    // set up our new person to match schema
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }
    // Send new person to our backend API
    await fetch (`${baseUrl}/cheeses`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newCheese),
    })
    // redirect to index
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id 
    // get data from form
    const formData = await request.formData()
// set up our updated cheese to match schema
const updateCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image")
}
// send updated cheese to the backend API
await fetch(`${baseUrl}cheese/${id}`, {
    // tell fetch to make a put request
    method: "PUT",
    headers: {
        // tell backend the data is JSON
        "content-Type":"application/json"
    },
    // send the json string of the updated Cheese object
    body: JSON.stringify(updateCheese)
    })
    // redirect back to index and SHOW page
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grab the ud from teh params
    const id = params.id
    // send a delete request to the backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
        // tell fetch to mnake a delete request
        method: "DELETE"
    })
    // redirect to index
    return redirect("/")
}