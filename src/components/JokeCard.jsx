import { motion } from "motion/react";
import { useState } from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { LuClipboard } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const JokeCard = ({ joke }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    if (joke) {
      navigator.clipboard.writeText(joke);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.2, x: 100, transition: { duration: 0.8 } }}
      className="flex gap-6 mt-6 p-4 border border-amber-600 rounded-lg bg-amber-50"
    >
      <p className="text-2xl font-bold">{joke}</p>
      <div className="space-y-1">
        {/* <button
          className="h-fit bg-gray-500 hover:bg-gray-600 text-white p-2 rounded font-medium"
          onClick={() => setCurrentJoke(null)}
        >
          <IoMdClose />
        </button> */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={handleCopy}
          className={`h-fit bg-gray-500 hover:bg-gray-600 text-white p-2 rounded font-medium`}
        >
          {isCopied ? (
            <p>
              <BsClipboard2CheckFill />
            </p>
          ) : (
            <p>
              <LuClipboard />
            </p>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JokeCard;
