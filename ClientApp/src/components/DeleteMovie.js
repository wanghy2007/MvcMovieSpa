import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from 'reactstrap';

export function DeleteMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`movies/${id}`);
            const data = await response.json();
            setMovie(data);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`movies/${id}`, {
            method: 'DELETE',
        });
    };

    if (loading)
        return <p><em>Loading...</em></p>

    return (
        <>
            <h1>Delete</h1>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Movie</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-2">Title</dt>
                    <dd className="col-sm-10">{movie.title}</dd>
                    <dt className="col-sm-2">Release Date</dt>
                    <dd className="col-sm-10">{movie.releaseDate}</dd>
                    <dt className="col-sm-2">Genre</dt>
                    <dd className="col-sm-10">{movie.genre}</dd>
                    <dt className="col-sm-2">Price</dt>
                    <dd className="col-sm-10">{movie.price}</dd>
                </dl>
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Delete" className="btn btn-danger" />
                    <NavLink tag={Link} to={`/list-movie`}>Back to list</NavLink>
                </form>
            </div>
        </>
    );
}
