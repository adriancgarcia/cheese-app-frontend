import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData();
    console.log(cheese)

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src = {cheese.image} alt={cheese.name} />

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method="post">
                <input type="text" name="name" placeholder="name of cheese" defaultValue={cheese.name} />
                <input type="text" name="countryOfOrigin" placeholder="country of origin" defaultValue={cheese.countryOfOrigin} />
                <input type="text" name="image" placeholder="cheese's image" defaultValue={cheese.image} />
                <input type="submit" value={`Update ${cheese.name}`} />
            </Form>
            
            <h2>Delete Cheese</h2>
            <Form action={`/delete/${cheese._id}`} method="post">
                <input type="submit" value={`delete ${cheese.name}`}/>
            </Form>
        </div>
    );
}

export default Show;