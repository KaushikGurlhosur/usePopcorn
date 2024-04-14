import Movie from "./Movie";

/* eslint-disable react/prop-types */
function MovieList({ movies, onSelectMovie }) {
  return (
    <div>
      <ul className="list list-movies">
        {movies.map((movie) => (
          <Movie
            movie={movie}
            onSelectMovie={onSelectMovie}
            key={movie.imdbID}
          />
        ))}
      </ul>
      {/* {console.log(movies)} */}
    </div>
  );
}

export default MovieList;
