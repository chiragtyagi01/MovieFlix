import React from 'react';
import { useMovieContext } from '../contexts/useMovieContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useMovieContext();

  const hasOneCard = favorites.length === 1;

  return (
    <div className="p-8 w-full box-border">
      <h2 className="mb-8 text-center font-bold text-4xl text-black drop-shadow-md">
        Your Favorites
      </h2>

      {favorites.length === 0 ? (
        <div className="text-center px-8 py-16 bg-white/5 rounded-xl mx-auto mt-8 max-w-xl">
          <h2 className="mb-4 text-3xl text-[#e50914]">No Favorites Yet</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Add some movies to your favorites list and they’ll show up here.
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 p-4 w-full box-border ${
            hasOneCard
              ? 'max-w-md mx-auto grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {favorites.map((movie) => (
            <div key={movie.id} className="animate-fadeIn">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
