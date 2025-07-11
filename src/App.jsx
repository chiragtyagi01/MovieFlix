import { MovieProvider } from './contexts/MovieContext'; 
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { useAuth } from './hooks/useAuth'; // Make sure this is correct
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      <NavBar />
      <main className="flex-1 p-8 w-full box-border min-h-[400px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Content */}
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </div>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;
