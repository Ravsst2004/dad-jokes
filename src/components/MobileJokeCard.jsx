/* eslint-disable react/prop-types */
import JokeCard from "./JokeCard";
import Loading from "./Loading";

const MobileJokeCard = ({ handleGetJoke, joke, loading }) => {
  return (
    <div className="lg:hidden p-4">
      <h1 className="text-3xl font-bold text-amber-600 text-center">
        You are a Dad? Get a joke for you now
      </h1>

      {loading ? (
        <div className="flex justify-center items-center mt-10 w-full h-full">
          <Loading />
        </div>
      ) : (
        joke && <JokeCard />
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
