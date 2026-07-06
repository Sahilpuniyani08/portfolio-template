import React from "react";
import { motion } from "framer-motion";

const LEFT_TEXT =
  "Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting. I think Cheyene mentioned it but didn’t confirm, and now I’m a little lost.";

const RIGHT_TEXT =
  "Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip. There’s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what’s going on. Can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting? I think Cheyene mentioned it, but didn’t confirm — and now I’m a little lost!";

export const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute left-0 top-1/4 w-[min(54vw,720px)] overflow-hidden -translate-y-20">
        <svg
          id="hero-svg"
          viewBox="0 0 1048 594"
          fill="none"
          className="h-auto w-[1200px] scale-110 -translate-x-72 -translate-y-[15%]"
        >
          <path
            id="first-curve"
            className="fill-none "
            d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235"
          />
          <text x="0" className="text-base">
            <textPath
              id="marquee-text-first"
              href="#first-curve"
              className="fill-accent font-normal opacity-50[baseline-shift:20%]"
            >
              {LEFT_TEXT}
            </textPath>
            <animate
              id="marquee-anim-first"
              attributeName="x"
              dur="25s"
              values="-2000;0"
              repeatCount="indefinite"
            ></animate>
          </text>
        </svg>
      </div>

      <div className="absolute -right-4 bottom-10  w-[min(62vw,780px)] overflow-hidden">
        <svg
          id="hero-svg-right"
          viewBox="0 0 1024 620"
          fill="none"
          className="h-auto w-[1200px] scale-100 "
        >
          <path
            id="second-curve"
            className="stroke-accent fill-none stroke-[30]"
            d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216"
          />
          <text x="-2000" className="text-base text-black">
            <textPath
              id="marquee-text-second"
              href="#second-curve"
              className="fill-black font-normal  [baseline-shift:-30%]"
            >
              {RIGHT_TEXT}
            </textPath>
            <animate
              id="marquee-anim-second"
              attributeName="x"
              dur="25s"
              values="-2000;0"
              repeatCount="indefinite"
            ></animate>
          </text>
        </svg>
      </div>
    </div>
  );
};

export const MusicTiles = () => {
  const bars = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="flex h-full w-max items-center gap-1.5 px-3"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {[...bars, ...bars].map((index, key) => (
          <motion.span
            key={key}
            className="block w-1.5 shrink-0 rounded-full bg-accent"
            animate={{
              height: ["20%", `${30 + (index % 8) * 7}% `, "50%", "20%"],
            }}
            transition={{
              duration: 0.35 + (index % 4) * 0.1,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              delay: index * 0.05,
            }}
          />
        ))}
        <motion.span></motion.span>
      </motion.div>
    </div>
  );
};

const TextPathContainer = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6 py-16">
      <HeroAnimation />
      <div className="absolute bottom-20 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3     ">
        <div className="flex h-20 w-84 items-center overflow-hidden rounded-full border-2 border-foreground bg-black shadow-sm ">
          <MusicTiles />
        </div>
      </div>
    </div>
  );
};

export default TextPathContainer;
