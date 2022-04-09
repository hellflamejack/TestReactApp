import React, { useState, useEffect } from "react";

const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div id="re">
      <h1>Hello World</h1>
      <p>Here goes the joke</p>
      <p>{joke}</p>
      <button onClick={generateJoke}>Generate Joke</button>
    </div>
  );
}

export default App;
