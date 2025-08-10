import React from 'react'
import "./Calculator.css"

const Calculator = () => {
  return (
    <div className="container">
      <div className="screen"></div>
      <div className="button-div">
        <div className="row">
          <button className="button">AC</button>
          <button className="button">DEL</button>
          <button className="button">%</button>
        </div>
        <div className="row">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">*</button>
        </div>
        <div className="row">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">+</button>
        </div>
        <div className="row">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">-</button>
        </div>
        <div className="row">
          <button className="button">.</button>
          <button className="button">0</button>
          <button className="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator