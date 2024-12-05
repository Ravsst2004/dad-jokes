import MobileJokeCard from "./components/MobileJokeCard";
import useJoke from "./hooks/useJoke";
import { AnimatePresence } from "framer-motion";
import JokeCard from "./components/JokeCard";
import Loading from "./components/Loading";
import MoaiCircle from "./components/MoaiCircle";
import { useEffect, useState } from "react";

const App = () => {
  const { joke, loading, fetchJoke } = useJoke();
  const [currentJoke, setCurrentJoke] = useState(null);

  useEffect(() => {
    setCurrentJoke(joke?.joke);
  }, [joke]);

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-200 h-full ">
      <div className="flex items-center justify-center h-full max-w-6xl mx-auto">
        <div className=" mx-4 md:mx-0 md:w-1/2">
          <MobileJokeCard
            handleGetJoke={fetchJoke}
            joke={currentJoke}
            loading={loading}
          />

          <div className="hidden md:block">
            <h1 className="text-7xl font-bold mb-4">
              You are a Dad? Get a joke for you now
            </h1>
            {loading ? (
              <Loading />
            ) : (
              currentJoke && (
                <AnimatePresence mode="wait">
                  <JokeCard
                    key={currentJoke}
                    joke={currentJoke}
                    setCurrentJoke={setCurrentJoke}
                  />
                </AnimatePresence>
              )
            )}
            <button
              className=" bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium my-4"
              onClick={fetchJoke}
            >
              Get a Dad Joke
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 md:relative">
          <MoaiCircle />
        </div>
      </div>
    </section>
  );
};

export default App;
