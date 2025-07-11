import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieMarqueeBackground = ({ type = "trending/movie/day", position = "top", speed = 50, direction = "left" }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const posterUrls = res.data.results.map(
          (movie) => `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        );
        setPosters(posterUrls);
      } catch (err) {
        console.error("Failed to fetch movie posters:", err);
      }
    };

    fetchMovies();
  }, [type]);

  // Positioning logic
  const positionStyles =
    position === "top"
      ? "top-0"
      : position === "bottom"
      ? "bottom-0"
      : position === "middle"
      ? "top-1/2 transform -translate-y-1/2"
      : "";

    return (
    <div className={`absolute left-0 right-0 ${positionStyles} h-[28rem] overflow-hidden z-0 opacity-20`}>
      <Marquee speed={speed} direction={direction} gradient={false}>
        {posters.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Movie ${i}`}
            className="w-64 h-[24rem] object-cover mx-3 rounded-xl shadow-lg"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MovieMarqueeBackground;
