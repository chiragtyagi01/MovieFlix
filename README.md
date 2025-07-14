---

# MovieFlix 🎬

MovieFlix is a modern movie explorer app built with React, Firebase Authentication, TailwindCSS, and The Movie Database (TMDB) API. It features trending, top-rated, and popular movies, full authentication, favorites functionality, search, genre-based, and a smooth animated UI using react-fast-marquee.

---

## 🚀 Live Demo

👉 [https://movie-flix-pi-three.vercel.app/](https://movie-flix-pi-three.vercel.app/)

## 📂 GitHub Repository

👉 [https://github.com/chiragtyagi01/movie-flix](https://github.com/chiragtyagi01/movie-flix)

## 📸 Screenshots
* **Login Page**
![MovieFlix Screenshot](/public/login.png)
* **Home Page**
![MovieFlix Screenshot](/public/home.png)

---

## 🛠️ Tech Stack

* **React + Vite**: Fast, modern front-end framework and tooling.
* **TailwindCSS**: Utility-first CSS for rapid UI development.
* **Firebase**: For Google & Email authentication.
* **TMDB API**: For fetching trending, popular, and top-rated movies.
* **Axios**: For HTTP requests.
* **React Router DOM**: For page navigation.
* **React Context API**: Global state for handling favorite movies.
* **LocalStorage**: Persistent favorites.
* **React Fast Marquee**: For smooth background poster animation.

### 🔧 Firebase Auth Example

```jsx
import { createUserWithEmailAndPassword } from "firebase/auth";

const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
```

### 🔧 Axios API Fetch

```js
const fetchMovies = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: "en-US"
    }
  });
  setMovies(res.data.results);
};
```

### 🔧 Context API for Favorites

```js
const addToFavorites = (movie) => {
  setFavorites(prev => {
    if (!prev.some(f => f.id === movie.id)) return [...prev, movie];
    return prev;
  });
};
```

---

## 📁 Folder Structure

```
src/
├── components/         # Reusable UI components
├── contexts/           # Auth and Movie context providers
├── hooks/              # Custom hooks like useAuth
├── pages/              # Page-level components (Home, Login, Signup, Favorites)
├── services/           # API logic (TMDB requests)
├── utils/              # Helpers like genre mapping
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

---

## 🔐 Firebase Authentication

* Email/password login
* Google OAuth
* Session persistence with `onAuthStateChanged`

```js
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return unsubscribe;
}, []);
```

---

## 🌍 TMDB API Integration

* API Key stored in `.env`
* Fetch movie lists via Axios
* Displayed posters, titles, genres, overview

### 🔧 Genre Mapping Example

```js
export const getGenreNames = (ids) => ids.map(id => genreMap[id] || "Unknown").join(", ");
```

---

## 🖼️ Movie Cards + Favorites

* Displays title, poster, rating, year
* On hover: shows overview and genre
* Heart icon toggles favorite

```jsx
<button
  onClick={onFavoriteClick}
  className={favorite ? "text-red-500" : "text-white"}
>
  ♥
</button>
```

---

## 💨 Poster Animation (react-fast-marquee)

```jsx
<Marquee speed={60} gradient={false}>
  {posters.map(url => (
    <img key={url} src={url} className="w-64 h-[24rem] object-cover mx-3 rounded-xl" />
  ))}
</Marquee>
```

---

## 🔍 Search + Genre Display

* Fetch from `/search/movie`
* Display genres using mapped `genre_ids`

```jsx
<p className="text-sm text-gray-400">
  Genres: {getGenreNames(movie.genre_ids)}
</p>
```

---

## 🧭 Routing

* `/` → Home
* `/login` → Login
* `/signup` → Sign-up
* `/favorites` → Protected

```jsx
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
```

---

## 🧪 Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/chiragtyagi01/movie-flix.git
cd movie-flix
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env`

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4. Set Firebase Config in `firebase.js`

### 5. Start Dev Server

```bash
npm run dev
```

---

## 📦 Deployment (Vercel)

1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repo
4. Add environment variable: `VITE_TMDB_API_KEY`
5. Click **Deploy** 🚀

---

## 💡 What I Learned

* Firebase + React auth integration
* State management via Context API
* Responsive UI with Tailwind
* Data fetching with Axios
* React component patterns
* Deployment using Vercel

---

## 📬 Contact

* 💼 [LinkedIn](https://www.linkedin.com/in/ichiragtyagi/)
* 🐦 [Twitter](https://x.com/I_am_Chirag28)
* 💻 [GitHub](https://github.com/chiragtyagi01)
* 📧 [Email](mailto:chiragtyagiofficial@gmail.com)

---

## 📝 License

MIT © Chirag Tyagi
