import { useState } from "react";

const API = "https://icanhazdadjoke.com/";

const App = () => {
  const [joke, setJoke] = useState(null);

  // API from icanhazdadjoke
  const handleGetJoke = () => {
    fetch(API, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-200 w-full h-screen flex justify-center items-center">
      <div className="px-4 py-16 text-center space-y-6 border rounded-lg bg-slate-50 w-[32rem] h-fit">
        <h1 className="text-2xl font-semibold text-gray-600">Are You a Dad?</h1>
        <p className="text-4xl font-bold">{joke}</p>
        <button
          onClick={handleGetJoke}
          className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium"
        >
          {joke === null ? "Get a Joke" : "Get Another Joke"}
        </button>
      </div>
    </section>
  );
};

export default App;
