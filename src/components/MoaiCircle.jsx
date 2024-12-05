import { motion } from "framer-motion";

const MoaiCircle = () => {
  return (
    <>
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
        animate={{
          x: [
            500, 400, 300, 200, 150, 100, 50, 25, 0, 0, 0, 0, 0, 25, 50, 100,
            150, 200, 300, 400, 500,
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
          repeat: Infinity,
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
        drag={true}
        src="/moail.png"
        alt="Dad joke illustration"
        className="absolute"
      />
      <motion.img
        initial={{ x: 740, y: -580, rotate: 10 }}
        drag={true}
        src="/moail.png"
        alt="Dad joke illustration"
        className="absolute cursor-grab"
      />
    </>
  );
};

export default MoaiCircle;
