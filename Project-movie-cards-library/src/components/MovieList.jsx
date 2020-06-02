import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((elemento) => (
          <MovieCard movie={elemento} key={elemento.title} />
        ))}
      </div>
    );
  }
}

export default MovieList;
