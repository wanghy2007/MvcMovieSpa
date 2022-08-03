import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from 'reactstrap';

export function DetailsMovie() {
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

    if (loading)
        return <p><em>Loading...</em></p>

    return (
        <div>
            <h1>Details</h1>
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
            </div>
            <div>
                <NavLink tag={Link} to={`/edit-movie/${movie.id}`}>Edit</NavLink>
                <NavLink tag={Link} to={`/list-movie`}>Back to list</NavLink>
            </div>
        </div>
    );
}
