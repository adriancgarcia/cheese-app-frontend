import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const cheeses = useLoaderData()
    // console.log(cheeses)

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name of cheese" />
                <input type="text" name="countryOfOrigin" placeholder="country of origin" />
                <input type="text" name="image" placeholder="cheese's image" />
                <input type="submit" value="create a cheese" />
            </Form>

            <h2>Cheeses</h2>
            {cheeses.map((cheese, index) => {
                return (
                <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese._id}`}>
                        <h1>{cheese.name}</h1>
                    </Link>
                    <h3>{cheese.countryOfOrigin}</h3>
                    <img src={cheese.image} alt={cheese.name} />
                </div>
                );
            })}
        </div>
        );
    };

export default Index