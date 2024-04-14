/* eslint-disable react/prop-types */
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <div>
      <li>
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>

          <button
            // className="btn-delete"

            style={{
              border: "none",
              padding: "5px",
              borderRadius: "20%",
              color: "red",
              backgroundColor: "beige",
              position: "inherit",
            }}
            onClick={() => onDeleteWatched(movie.imdbID)}>
            X
          </button>
        </div>
      </li>
    </div>
  );
}

export default WatchedMovie;
