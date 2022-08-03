import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class ListMovie extends Component {
  static displayName = ListMovie.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    this.populateMovieData();
  }

  static renderMoviesTable(movies) {
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

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ListMovie.renderMoviesTable(this.state.movies);

    return (
      <div>
        <h1 id="tabelLabel" >Movies</h1>
        <p>This component demonstrates fetching movie from the server.</p>
        {contents}
      </div>
    );
  }

  async populateMovieData() {
    const response = await fetch('movies');
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }
}
