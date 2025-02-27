/* eslint-disable react/prop-types */
function Movie({ movie, onSelectMovie }) {
  return (
    <div>
      <li onClick={() => onSelectMovie(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓️</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </div>
  );
}

export default Movie;
