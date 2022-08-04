import React, { useState, useEffect } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
  }, []);

  if (loading)
      return <p><em>Loading...</em></p>
  
  return (
    <div>
      <h1>Index</h1>
      <p>
        <NavLink tag={Link} to='/create-movie/'>Create</NavLink>
      </p>
      <table className='table'>
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
                <NavLink tag={Link} to={`/edit-movie/${movie.id}`}>Edit</NavLink>
                <NavLink tag={Link} to={`/details-movie/${movie.id}`}>Details</NavLink>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
