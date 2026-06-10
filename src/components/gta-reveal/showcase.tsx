import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { use } from "react";

const Showcase = () => {
  const springVars = {
    stiffness: 80,
    damping: 20,
  };
  const { scrollYProgress } = useScroll();
  const maskSize = useSpring(
    useTransform(scrollYProgress, [0, 1], [14000, 1000]),
    springVars,
  );
  const maskPosition = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1200, 100]),
    springVars,
  );

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const outerImageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springVars,
  );

  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [0, 1]),
    springVars,
  );

  const textY = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [80, 0]),
    springVars,
  );

  return (
    <div className="h-[300vh] bg-background">
      <motion.div
        style={{ scale: imageScale, opacity: outerImageOpacity }}
        className="fixed inset-0 h-full w-full bg-[url('/gta-bg.webp')] bg-center bg-cover bg-no-repeat"
      />
      <motion.h1
        style={{ opacity: textOpacity, y: textY }}
        className="fixed top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white opacity-80"
      >
        GTA REVEAL
      </motion.h1>
      <motion.div
        className="fixed inset-0 flex h-full w-full mask-[url('/gta-logo.webp')] mask-no-repeat "
        style={{
          maskSize: useMotionTemplate`${maskSize}px`,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
        }}
      >
        <motion.div
          style={{ scale: imageScale }}
          className="fixed inset-0 h-full w-full bg-[url('/gta-bg.webp')] bg-center bg-cover bg-no-repeat"
        />
      </motion.div>
    </div>
  );
};

export default Showcase;
