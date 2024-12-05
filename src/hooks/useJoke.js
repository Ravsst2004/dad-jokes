import { useState } from "react";
import { API } from "../utils/api";

const useJoke = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const res = await fetch(API, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return { joke, loading, fetchJoke };
};

export default useJoke;
