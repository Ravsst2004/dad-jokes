import { useState } from "react";
import JokeCard from "./components/JokeCard";

const API = "https://icanhazdadjoke.com/";

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetJoke = async () => {
    try {
      setLoading(true);
      const res = await fetch(API, {
        headers: {
          Accept: "application/json",
        },
      });
      const joke = await res.json();
      setLoading(false);
      setJoke(joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <section className="max-w-xl mx-auto bg-gradient-to-br from-amber-50 to-orange-200 w-full h-full rounded-xl flex flex-col items-center justify-center">
      <JokeCard
        handleGetJoke={handleGetJoke}
        joke={joke}
        loading={loading}
      />
    </section>
  );
};

export default App;
