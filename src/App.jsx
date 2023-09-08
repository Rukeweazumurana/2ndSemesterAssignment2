import './App.css';
import * as Icon from 'react-feather';

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const incrementTen = () => {
    setCount(count + 10);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const decrementofTen = () => {
    setCount(count - 10);
  };
  const restart = () => {
    setCount(0);
  };

  const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setCount(randomNumber);
  };

  return (
    <div className="background2">
      <div className="card2">
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={increment} className="">
            <Icon.ChevronUp />
          </button>
          <button onClick={incrementTen}>
            <Icon.ChevronsUp />
          </button>
          <button onClick={restart}>
            <Icon.RotateCw />
          </button>
          <button onClick={randomNum}>
            <Icon.Hash />
          </button>
          <button onClick={decrementofTen}>
            <Icon.ChevronsDown />
          </button>
          <button onClick={decrement}>
            <Icon.ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

const Grid = () => {
  const data = [
    { name: 'Winter Orbit', rating: 5, id: 1 },
    { name: 'Dial D for Deadman', rating: 4, id: 2 },
  ];

  return (
    <div>
      <div className="card-container">
        {data.map((item) => {
          return (
            <>
              <div key={item.id} className="card">
                <h1>{item.name}</h1>
                <p>Rating: {item.rating}/5</p>
                <div>
                  <Icon.Star />
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <div className="grid-container2">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
};

export { Counter, Grid };
