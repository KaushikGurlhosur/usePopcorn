import WatchedMovie from "./WatchedMovie";

/* eslint-disable react/prop-types */
function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <div>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMovieList;

// className="list"
