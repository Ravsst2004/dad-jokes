import MobileJokeCard from "./components/MobileJokeCard";
import useJoke from "./hooks/useJoke";

const App = () => {
  const { joke, loading, fetchJoke } = useJoke();

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-200 w-full h-full flex items-center justify-center">
      <div className="mx-4 md:w-1/2">
        <MobileJokeCard
          handleGetJoke={fetchJoke}
          joke={joke}
          loading={loading}
        />
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </section>
  );
};

export default App;
