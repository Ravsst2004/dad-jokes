/* eslint-disable react/prop-types */
import Loading from "./Loading";
import { motion } from "framer-motion";

const MobileJokeCard = ({ handleGetJoke, joke, loading }) => {
  const handleCopy = () => {
    if (joke?.joke) {
      navigator.clipboard.writeText(joke.joke);
    }
  };

  return (
    <div className="md:hidden p-4">
      <h1 className="text-3xl font-bold text-amber-600 text-center">
        You are a Dad? Get a joke for you now
      </h1>

      {loading ? (
        <div className="flex justify-center items-center mt-10 w-full h-full">
          <Loading />
        </div>
      ) : (
        joke && (
          <div className="mt-6 p-4 border border-amber-600 rounded-lg bg-amber-50">
            <p className="text-2xl font-bold text-center">{joke.joke}</p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              onClick={handleCopy}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium"
            >
              Copy
            </motion.button>
          </div>
        )
      )}

      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={handleGetJoke}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium mb-4"
        >
          {joke === null ? "Get a Joke" : "Get Another Joke"}
        </button>
      </div>
    </div>
  );
};

export default MobileJokeCard;
