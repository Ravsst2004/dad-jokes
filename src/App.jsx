import useJoke from "./hooks/useJoke";
import { AnimatePresence, motion } from "framer-motion";
import JokeCard from "./components/JokeCard";
import Loading from "./components/Loading";
import MoaiCircle from "./components/MoaiCircle";
import { useEffect, useState } from "react";

const TEXT = ["You", "are", "a", "Dad?", "Get", "a", "joke", "for", "you"];

const App = () => {
  const { joke, loading, fetchJoke } = useJoke();
  const [currentJoke, setCurrentJoke] = useState(null);

  const [balls, setBalls] = useState([{ id: 0, x: 0, y: 0 }]);

  const addBall = () => {
    const newBall = {
      id: balls.length,
      x: Math.random() * window.innerWidth - 100,
      y: Math.random() * window.innerHeight - 100,
    };
    setBalls((prevBalls) => [...prevBalls, newBall]);
  };

  useEffect(() => {
    setCurrentJoke(joke?.joke);
  }, [joke]);

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-200 h-full">
      <div>
        {balls.map((ball) => (
          <motion.div
            key={ball.id}
            initial={{ x: ball.x, y: ball.y }}
            animate={{
              x: Math.random() * window.innerWidth - 100,
              y: Math.random() * window.innerHeight - 100,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            drag={true}
            whileHover={addBall}
            onDragEnd={addBall}
            onClick={addBall}
            className="absolute w-20 h-20 rounded-full bg-amber-600"
          />
        ))}
      </div>

      <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
        <div className="mx-4 md:mx-0 lg:w-1/2">
          <div className="mx-10 lg:mx-0 block">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, staggerChildren: 0.2 }}
                className="text-4xl lg:text-6xl font-bold mb-4 uppercase"
              >
                {TEXT.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 * index }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <AnimatePresence>
              {loading ? (
                <Loading />
              ) : (
                currentJoke && (
                  <JokeCard
                    key={currentJoke}
                    joke={currentJoke}
                  />
                )
              )}
            </AnimatePresence>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3.5 }}
              className=" bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium my-4"
              onClick={fetchJoke}
            >
              Get a Dad Joke
            </motion.button>
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
