import { useMovieContext } from "../contexts/useMovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden bg-[#1a1a1a] text-white flex flex-col h-full 
                 transition-transform duration-200 hover:-translate-y-1 animate-fadeIn text-sm sm:text-base"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 
                     hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4"
        >
          {/* Favorite Button */}
          <button
            onClick={onFavoriteClick}
            className={`absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 text-lg sm:text-xl 
                        flex items-center justify-center rounded-full transition 
                        ${favorite 
                          ? "text-[#ff4757] bg-black/60 hover:bg-black/80"
                          : "text-white bg-black/50 hover:bg-black/80"} 
                        hover:scale-110`}
          >
            ♥
          </button>

          {/* Optional: Rating Dropdown (you can enable this later) */}
          <select className="bg-black/70 text-white text-sm rounded px-2 py-1 mt-2">
            <option value="">Rate this</option>
            <option value="1">★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
          </select>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 flex-1">
        <h3 className="text-sm sm:text-base font-semibold leading-tight">{movie.title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm">{movie.release_date?.split("-")[0]}</p>

        {/* User Rating */}
        <span className="text-yellow-400 text-xs sm:text-sm mt-auto">
          ★ {movie.vote_average?.toFixed(1) || "N/A"}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
