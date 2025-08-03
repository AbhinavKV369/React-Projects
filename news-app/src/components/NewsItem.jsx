import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light h-100 mb-3">
      <img
        src={src || "https://via.placeholder.com/300x180?text=No+Image"}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description.slice(0, 200) : ""}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-auto">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
