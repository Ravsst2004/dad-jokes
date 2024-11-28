/* eslint-disable react/prop-types */
import Loading from "./Loading";

const JokeCard = ({ handleGetJoke, joke, loading }) => {
  return (
    <div className="px-4 py-16 text-center space-y-6 border rounded-lg bg-slate-50 w-[32rem] h-fit flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-gray-600">Are You a Dad?</h1>
      {loading ? (
        <Loading />
      ) : (
        <p className="text-4xl font-bold">{joke?.joke}</p>
      )}
      {/* {joke && <img src={`https://icanhazdadjoke.com/j/${joke.id}.png`} />} */}
      <button
        onClick={handleGetJoke}
        className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium"
      >
        {joke === null ? "Get a Joke" : "Get Another Joke"}
      </button>
    </div>
  );
};

export default JokeCard;
