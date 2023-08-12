// const URL = "http://localhost:4000"
import {baseUrl} from "./base_url"


export const cheesesLoader = async () => {
    const response = await fetch (`${baseUrl}/cheeses`)
    const cheeses = await response.json()
    return cheeses
};

export const cheeseLoader = async ({params}) => {
    const id = params.id
    const response = await fetch (`${baseUrl}/cheeses/${id}`)
    const cheese = await response.json()
    return cheese
}