import React, { useEffect, useState } from "react";

const MovieFinder = () => {
  const [query, setQuery] = useState("avengers"); // default search term
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "f6a3fcd7"; // ✅ Free key from OMDb API (no signup required)
  // API source: https://www.omdbapi.com/

  // 🔁 Fetch movies whenever query changes
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await res.json();

        if (data.Response === "True") setMovies(data.Search);
        else setError(data.Error);
      } catch (err) {
        setError("Failed to fetch movies!");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  // 🔍 Search submit
  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim();
    if (input === "") return alert("Please enter a movie name!");
    setQuery(input);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie Finder App</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search movie..."
          className="p-2 rounded-lg text-black w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-gray-400">Loading movies...</p>}

      {/* Error */}
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 px-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition-all"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
              alt={movie.Title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.Title}</h2>
              <p className="text-gray-400">Year: {movie.Year}</p>
              <p className="text-yellow-400">Type: {movie.Type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieFinder;
