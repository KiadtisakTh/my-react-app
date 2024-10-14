import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [starPattern, setStarPattern] = useState([]);

  const updateStars = (e) => {
    const value = parseInt(e.target.value) || 0;
    setCount(value);

    let pattern = [];
    for (let i = value; i > 0; i--) {
      pattern.push('*'.repeat(i));
    }
    setStarPattern(pattern);
  };

  return (
    <div className="container">
      <h1>Star Pattern</h1>
      <input
        type="number"
        value={count}
        onChange={updateStars}
        placeholder="Enter number"
      />
      <div className="star-pattern">
        {starPattern.map((stars, index) => (
          <div key={index}>{stars}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
