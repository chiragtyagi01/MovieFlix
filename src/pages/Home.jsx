import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="w-full box-border py-8 sm:py-4">
  <form
    onSubmit={handleSearch}
    className="max-w-xl mx-auto mb-8 flex gap-4 px-4 box-border sm:mb-4"
  >
    <input
      type="text"
      placeholder="Search for movies..."
      className="flex-1 px-4 py-3 rounded bg-neutral-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-neutral-500"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button
      type="submit"
      className="px-6 py-3 bg-[#e50914] text-white rounded font-medium whitespace-nowrap hover:bg-[#f40612] transition-colors duration-200 cursor-pointer "
    >
      Search
    </button>
  </form>

  {error && (
    <div className="text-center text-red-500 font-medium mb-4">
      {error}
    </div>
  )}

  {loading ? (
    <div className="text-center text-white text-lg">Loading...</div>
  ) : (
    <div className="grid gap-6 p-4 w-full box-border grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )}
</div>

  );
}

export default Home;
