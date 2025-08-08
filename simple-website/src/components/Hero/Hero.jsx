import React from "react";
import "./Hero.css";

const Hero = ({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore features</p>
        <h1>→</h1>
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot orange" : "dot"}
              role="button"
              aria-label={`Go to slide ${index + 1}`}>
              😊
            </li>
          ))}
        </ul>

        <div className="hero-play">
          <h1 onClick={() => setPlayStatus(!playStatus)} role="button">
            {playStatus ? "⏸️" : "▶️"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
