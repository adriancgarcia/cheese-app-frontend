import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const cheeses = useLoaderData()
    console.log(cheeses)

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="create" method="post">
                <input type="input" name="name" placeholder="cheese's name" />
                <input type="input" name="countryOfOrigin" placeholder="cheese's country of origin" />
                <input type="input" name="image" placeholder="cheese's image" />
                <input type="submit" value="create a cheese" />
            </Form>

            <h2>Cheeses</h2>
            {cheeses.map(cheese, index => {
                return (
                <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese._id}`}>
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name} />
                    <h3>{cheese.countryOfOrigin}</h3>
                </div>
                );
            })}
        </div>
        );
    };

export default Index