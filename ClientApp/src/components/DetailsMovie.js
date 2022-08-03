import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function renderMovie(movie) {
    return (
        <dl className="row">
            <dt>Title</dt>
            <dd>{movie.title}</dd>
            <dt>Release Date</dt>
            <dd>{movie.releaseDate}</dd>
            <dt>Genre</dt>
            <dd>{movie.genre}</dd>
            <dt>Price</dt>
            <dd>{movie.price}</dd>
        </dl>
    );
}

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
    });

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderMovie(movie);

    return (
        <div>
            <h1>Details</h1>
            <hr/>
            {contents}
        </div>
    );
}
