
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Navigate, Link } from "react-router-dom";
import MovieMarqueeBackground from "../components/MovieMarqueeBackground";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";


const Login = () => {
  const { user, login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
  };

  checkScreenSize(); // Set on load
  window.addEventListener("resize", checkScreenSize); // Update on resize

  return () => window.removeEventListener("resize", checkScreenSize);
}, []);


  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-zinc-800 ">
      
      {/* Movie Marquee Backgrounds */}
     {!isMobile && (
          <MovieMarqueeBackground
            type="trending/movie/day"
            position="top"
            speed={50}
            direction="left"
          />
        )}

        <MovieMarqueeBackground
          type="movie/popular"
          position={isMobile ? "top" : "middle"}
          speed={50}
          direction="left"
        />

        <MovieMarqueeBackground
          type="movie/top_rated"
          position={"bottom"}
          speed={50}
          direction="left"
        />

      {/* Optional blur overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" /> */}

      {/* Centered Login Form */}
      <div className="flex-grow flex items-center justify-center z-10">
        <div className="w-full max-w-md sm:bg-zinc-900 bg-transparent text-white rounded-xl shadow-lg p-8 space-y-6 z-10">
          <h2 className="text-4xl font-bold text-center">Login</h2>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full text-lg bg-[#e50914] hover:bg-[#f40612] text-white py-2 rounded font-semibold transition cursor-pointer"
            >
              Log In
            </button>
          </form>

          <hr className="border-zinc-600" />

          <button
            onClick={loginWithGoogle}
            className="w-full text-lg bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition cursor-pointer"
          >
            Sign in with Google
          </button>

          <p className="text-lg text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
