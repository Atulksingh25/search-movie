 import React, { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=YOUR_GNEWS_KEY`
        );

        const data = await res.json();

        console.log("API Response:", data); // 👈 check in console

        if (!data.articles) {
          setArticles([]);
          throw new Error("No articles found");
        }

        setArticles(data.articles);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📰 News App</h1>

      <select
        className="border p-2 mb-4"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((a, i) => (
          <div key={i} className="border p-3 rounded-xl shadow-md">
            
            {/* Correct Image Key */}
            <img
              src={a.image}
              alt="news"
              className="rounded-md mb-2"
            />

            <h2 className="font-semibold">{a.title}</h2>
            <p className="text-sm">{a.description}</p>

            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

