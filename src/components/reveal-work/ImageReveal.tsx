"use client";

import { furniture } from "@/assets/images";
import { cn } from "@/lib/utils";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const ImageReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animations (only used for desktop)
  const gap = useTransform(scrollYProgress, [0.4, 0.7], [0, 20]);
  const radius = useTransform(scrollYProgress, [0.4, 0.6], [0, 12]);
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1.1, 1]);

  const rotateX = useTransform(scrollYProgress, [0.7, 0.9], [0, 6]);
  const flip = useTransform(scrollYProgress, [0.7, 0.9], [0, 180]);

  const tiltZLeft = useTransform(scrollYProgress, [0.7, 0.9], [0, -10]);
  const tiltZCenter = useTransform(scrollYProgress, [0.7, 0.9], [0, 0]);
  const tiltZRight = useTransform(scrollYProgress, [0.7, 0.9], [0, 10]);

  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);

  const gapPx = useMotionTemplate`${gap}px`;
  const radiusPx = useMotionTemplate`${radius}px`;

  return (
    <section
      ref={containerRef}
      className={cn("mb-10", isMobile ? "py-20" : "h-[1000vh]")}
    >
      <div
        className={cn(
          "w-full flex items-center justify-center",
          isMobile
            ? "flex-col gap-6 px-4"
            : "h-screen sticky top-0 perspective-[1200px] overflow-hidden",
        )}
      >
        {/* MOBILE VIEW (STATIC BACK CARDS) */}
        {isMobile && (
          <>
            {/* Card */}
            <div className="w-[80vw] h-[110vw] rounded-xl bg-foreground text-black flex flex-col items-center justify-center">
              <p className="text-xl font-semibold">Modern</p>
              <p className="text-sm opacity-70 mt-2">Furniture Set</p>
            </div>

            <div className="w-[80vw] h-[110vw] rounded-xl bg-accent text-white flex flex-col items-center justify-center">
              <p className="text-xl font-semibold">Minimal</p>
              <p className="text-sm opacity-70 mt-2">Interior Style</p>
            </div>

            <div className="w-[80vw] h-[110vw] rounded-xl bg-foreground-subtle text-white flex flex-col items-center justify-center">
              <p className="text-xl font-semibold">Luxury</p>
              <p className="text-sm opacity-70 mt-2">Design System</p>
            </div>

            <h1 className="text-lg font-medium text-center mt-6">
              Here is my new bundle of animation
            </h1>
          </>
        )}

        {/* DESKTOP VIEW (FULL ANIMATION) */}
        {!isMobile && (
          <>
            <motion.div style={{ gap: gapPx, scale }} className="flex absolute">
              {/* Card 1 */}
              <motion.div
                style={{
                  rotateY: flip,
                  rotateX,
                  rotateZ: tiltZRight,
                }}
                className="relative w-56 h-80 transform-3d origin-top"
              >
                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden overflow-hidden"
                >
                  <Image
                    src={furniture}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden rotate-y-180 bg-foreground text-black flex items-center justify-center"
                >
                  Modern
                </motion.div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                style={{
                  rotateY: flip,
                  rotateX,
                  rotateZ: tiltZCenter,
                }}
                className="relative w-56 h-80 transform-3d origin-top"
              >
                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden overflow-hidden"
                >
                  <Image
                    src={furniture}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden rotate-y-180 bg-accent text-white flex items-center justify-center"
                >
                  Minimal
                </motion.div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                style={{
                  rotateY: flip,
                  rotateX,
                  rotateZ: tiltZLeft,
                }}
                className="relative w-56 h-80 transform-3d origin-top"
              >
                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden overflow-hidden"
                >
                  <Image
                    src={furniture}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  style={{ borderRadius: radiusPx }}
                  className="absolute inset-0 backface-hidden rotate-y-180 bg-foreground-subtle text-white flex items-center justify-center"
                >
                  Luxury
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h1
              style={{ opacity, y }}
              className="text-3xl font-medium absolute top-24 text-center"
            >
              Here is my new bundle of animation
            </motion.h1>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageReveal;
