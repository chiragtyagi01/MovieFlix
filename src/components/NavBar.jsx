import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function NavBar() {
  const { user, logout } = useAuth(); // ✅ use hook at the top

  return (
    <nav className="bg-black px-8 py-4 flex justify-between items-center shadow-md sm:px-4">
      {/* Left: Brand */}
      <div className="text-xl font-bold text-white sm:text-lg">
        MovieFlix
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-4 sm:gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded transition-colors duration-200 ${
              isActive ? "bg-white/20" : "hover:bg-white/10"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded transition-colors duration-200 ${
              isActive ? "bg-white/20" : "hover:bg-white/10"
            }`
          }
        >
          Favorites
        </NavLink>
      </div>

      {/* Right: Auth Section */}
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="text-white text-sm hidden sm:inline">
              {user.email}
            </span>
            <button
              onClick={logout}
              className="text-white px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
