import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from 'reactstrap';

export function EditMovie() {
    const { id } = useParams();
    const [formValues, setFormValues] = useState({
        id: "",
        title: "",
        releaseDate: "",
        genre: "",
        price: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`movies/${id}`);
            const data = await response.json();
            setFormValues(data);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        console.log(name);
        console.log(value);
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`movies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: formValues.id,
                title: formValues.title,
                releaseDate: formValues.releaseDate,
                genre: formValues.genre,
                price: formValues.price,
            }),
        });
    };

    if (loading)
      return <p><em>Loading...</em></p>

    return (
        <>
            <h1>Edit</h1>
            <h4>Movie</h4>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" value={formValues.id} onChange={handleChange} />
                        <div className="form-group">
                            <label htmlFor="title" className="control-label">Title</label>
                            <input id="title" name="title" className="form-control" value={formValues.title} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="releaseDate" className="control-label">Release Date</label>
                            <input id="releaseDate" name="releaseDate" className="form-control" value={formValues.releaseDate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genre" className="control-label">Genre</label>
                            <input id="genre" name="genre" className="form-control" value={formValues.genre} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price" className="control-label">Price</label>
                            <input id="price" name="price" className="form-control" value={formValues.price} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Save" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <NavLink tag={Link} to={`/list-movie`}>Back to list</NavLink>
            </div>
        </>
    );
}