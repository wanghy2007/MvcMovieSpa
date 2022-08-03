import React, { Component } from "react";

export class DetailsMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: {}, loading: true };
    }

    componentDidMount() {
        this.populateMovieData();
    }

    static renderMovie(movie) {
        return (
            <dl className="row">
                <dt>Title</dt>
                <dd>{movie.title}</dd>
            </dl>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : DetailsMovie.renderMovie(this.state.movie);
        
        return (
            <div>
                <h1>Details</h1>
                <hr/>
                {contents}
            </div>
        );
    }

    async populateMovieData() {
        const id = window.location.pathname.split('/').pop();
        const response = await fetch(`movies/${id}`);
        const data = await response.json();
        this.setState({ movie: data, loading: false });
    }
}