import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []));
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge text-bg-secondary">News</span>
      </h2>

      <div className="row g-4">
        {articles.map((news, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
