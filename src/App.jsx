import MobileJokeCard from "./components/MobileJokeCard";
import useJoke from "./hooks/useJoke";
import { motion } from "framer-motion";

const App = () => {
  const { joke, loading, fetchJoke } = useJoke();
  console.log(joke);

  const radius = 100;

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-200 h-full ">
      <div className="flex items-center justify-center h-full max-w-6xl mx-auto">
        <div className="mx-4 md:mx-0 md:w-1/2">
          <MobileJokeCard
            handleGetJoke={fetchJoke}
            joke={joke}
            loading={loading}
          />

          <h1 className="text-7xl font-bold mb-4">
            You are a Dad? Get a joke for you now
          </h1>
          <p className="text-xl mb-8">{joke?.joke}</p>
          <button
            className=" bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-medium mb-4"
            onClick={fetchJoke}
          >
            Get a Dad Joke
          </button>
        </div>
        <div className="hidden md:block md:w-1/2 md:relative">
          <motion.div
            style={{
              translateX: "-4%",
              translateY: "-20%",
              top: "50%",
              left: "50%",
            }}
            className="absolute z-30 w-[80rem] h-[80rem] rounded-full bg-amber-600"
          ></motion.div>
          <motion.img
            initial={{ x: 500, y: -200, rotate: 0 }}
            // animate={{ rotate: "-90deg" }}

            animate={{
              x: [
                500, 400, 300, 200, 150, 100, 50, 25, 0, 0, 0, 0, 0, 25, 50,
                100, 150, 200, 300, 400, 500,
              ],
              y: [
                -175, -150, -125, -100, -75, -50, -25, 0, 25, 25, 25, 25, 25, 0,
                -25, -50, -75, -100, -125, -150, -175,
              ],
              rotate: [
                -10, -15, -20, -25, -30, -35, -40, -45, -50, -55, -60, -65, -65,
                -60, -55, -50, -45, -40, -35, -30, -25, -20, -15, -10,
              ],
            }}
            transition={{
              duration: 10,
              repeat: false,
              ease: "linear",
            }}
            style={{
              translateX: "50%",
            }}
            src="/moail.png"
            alt="Dad joke illustration"
          />
          <motion.img
            initial={{ x: 670, y: -560, rotate: 0 }}
            src="/moail.png"
            alt="Dad joke illustration"
            className="absolute"
          />
          <motion.img
            initial={{ x: 740, y: -580, rotate: 10 }}
            src="/moail.png"
            alt="Dad joke illustration"
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default App;
