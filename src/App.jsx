import MobileJokeCard from "./components/MobileJokeCard";
import useJoke from "./hooks/useJoke";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
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

  const controls = useAnimation();

  useEffect(() => {
    const bounce = () => {
      controls.start({
        x: [
          Math.random() * window.innerWidth - 100,
          Math.random() * window.innerWidth - 100,
        ],
        y: [
          Math.random() * window.innerHeight - 100,
          Math.random() * window.innerHeight - 100,
        ],
      });
    };

    bounce();
    const interval = setInterval(bounce, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-200 h-full">
      <motion.div
        animate={controls}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        drag={true}
        className="absolute w-20 h-20 rounded-full bg-amber-600"
      ></motion.div>
      <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
        <div className=" mx-4 md:mx-0 lg:w-1/2">
          <div className="mx-10 lg:mx-0 block">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4">
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
        <div className="hidden lg:block lg:w-1/2 md:relative">
          <MoaiCircle />
        </div>
      </div>
    </section>
  );
};

export default App;
