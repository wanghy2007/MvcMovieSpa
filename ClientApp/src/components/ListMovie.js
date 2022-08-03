import React, { useState, useEffect } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function renderMoviesTable(movies) {
  return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie =>
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.releaseDate}</td>
            <td>{movie.genre}</td>
            <td>{movie.price}</td>
            <td>
              <NavLink tag={Link} to={`/details-movie/${movie.id}`}>Details</NavLink>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export function ListMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('movies');
      const data = await response.json();
      setMovies(data);
      setLoading(false);
    }
    fetchData();
  });

  let contents = loading
      ? <p><em>Loading...</em></p>
      : renderMoviesTable(movies);
  
  return (
    <div>
      <h1 id="tabelLabel" >Movies</h1>
      <p>This component demonstrates fetching movie from the server.</p>
      {contents}
    </div>
  );
}
