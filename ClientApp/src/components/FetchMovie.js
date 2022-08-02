import React, { Component } from 'react';

export class FetchMovie extends Component {
  static displayName = FetchMovie.name;

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
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.genre}</td>
              <td>{movie.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchMovie.renderMoviesTable(this.state.movies);

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
