import React, { useState } from "react";

const API_KEY = "https://www.omdbapi.com/?apikey=YOUR_API_KEY";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = async () => {
    if (search.trim() === "") return;

    setLoading(true);
    const response = await fetch(`${API_KEY}&s=${search}`);
    const data = await response.json();

    setMovies(data.Search || []);
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Movie Search App</h1>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <button onClick={searchMovie} style={styles.button}>
          Search
        </button>
      </div>

      {loading && <h3>Loading...</h3>}

      <div style={styles.movieGrid}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} style={styles.card}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={styles.image}
              />
              <h3 style={styles.movieTitle}>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          !loading && <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  title: { fontSize: "30px", marginBottom: "20px" },
  searchBox: { display: "flex", justifyContent: "center", gap: "10px" },
  input: { padding: "10px", width: "250px", fontSize: "16px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
  movieGrid: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: { border: "1px solid #ccc", padding: "10px", borderRadius: "10px" },
  image: { width: "100%", borderRadius: "8px" },
  movieTitle: { margin: "10px 0 5px" },
};

export default App;
