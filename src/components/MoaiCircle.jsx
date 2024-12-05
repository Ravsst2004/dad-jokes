import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MoaiCircle = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute z-0 w-[30rem] h-[30rem] rounded-full bg-amber-600"></div>
      <motion.img
        animate={controls}
        onHoverStart={() => {
          controls.start({
            rotate: -360,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          });
        }}
        onHoverEnd={() => {
          controls.start({
            rotate: 360,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          });
        }}
        src="/moail.png"
        alt="Moai Illustration"
        className="absolute"
      />
    </div>
  );
};

export default MoaiCircle;
