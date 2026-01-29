'use client';

import { furniture } from '@/assets/images';
import { cn } from '@/lib/utils';
import { textStyles } from '@/typography/text-styles';
import { useScroll, useTransform, motion, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const ImageReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Animations
  const gap = useTransform(scrollYProgress, [0.4, 0.7], [0, 20]);
  const radius = useTransform(scrollYProgress, [0.4, 0.6], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1.1, 1]);


  const rotateX = useTransform(scrollYProgress, [0.7, 0.9], [0, 6]);

  const flip = useTransform(scrollYProgress, [0.7, 0.9], [0, 180]);
  const tiltZLeft = useTransform(scrollYProgress, [0.7, 0.9], [0, -10]);
  const tiltZCenter = useTransform(scrollYProgress, [0.7, 0.9], [0, 0]);
  const tiltZRight = useTransform(scrollYProgress, [0.7, 0.9], [0, 10]);


  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);

  // Units
  const gapPx = useMotionTemplate`${gap}px`;
  const radiusPx = useMotionTemplate`${radius}px`;

  return (
    <section ref={containerRef} className="h-[1000vh] mb-10">
      <div className="w-full h-screen perspective-[1000px] sticky top-0 flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ gap: gapPx, scale, y: 40 }}
          className="flex absolute "
        >
          {/*  first card */}
          <motion.div
            style={{
              rotateY: flip,
              rotateX,
              rotateZ: tiltZRight,
            }}
            
            className="relative h-80 w-56 aspect-3/4 transform-3d origin-top z-10 "
          >
            {/* FRONT */}
            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden overflow-hidden ">
              <Image
                alt="image-1"
                src={furniture}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* BACK */}
            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden rotate-y-180 bg-foreground text-black flex flex-col items-center justify-center">
              <p className="text-xl font-semibold">Modern</p>
              <p className="text-sm opacity-70 mt-2">Furniture Set</p>
            </motion.div>
          </motion.div>

          {/*  second card */}
          <motion.div
            style={{
              borderRadius: radiusPx,
              rotateY: flip,
              rotateX,
              rotateZ: tiltZCenter,
            }}
            className="relative h-80 w-56 aspect-3/4 transform-3d origin-top z-10 "
          >
            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden overflow-hidden ">
              <Image
                alt="image-2"
                src={furniture}
                fill
                className="object-cover object-bottom-right"
                priority
              />
            </motion.div>

            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden rotate-y-180 bg-accent text-white flex flex-col items-center justify-center ">
              <p className="text-xl font-semibold">Minimal</p>
              <p className="text-sm opacity-70 mt-2">Interior Style</p>
            </motion.div>
          </motion.div>

          {/*  Third card */}
          <motion.div
            style={{
              borderRadius: radiusPx,
              rotateY: flip,
              rotateX,
              rotateZ: tiltZLeft,
            }}
            className="relative h-80 w-56 aspect-3/4 transform-3d origin-top z-30 "
          >
            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden overflow-hidden  ">
              <Image
                alt="image-3"
                src={furniture}
                fill
                className="object-cover object-bottom-right"
                priority
              />
            </motion.div>

            <motion.div style={{ borderRadius: radiusPx }} className="absolute inset-0 backface-hidden rotate-y-180 bg-foreground-subtle text-white flex flex-col items-center justify-center z-50 ">
              <p className="text-xl font-semibold">Luxury</p>
              <p className="text-sm opacity-70 mt-2">Design System</p>
            </motion.div>
          </motion.div>

        </motion.div>

        <motion.h1 style={{ opacity, y }} className={cn(textStyles.h2, "absolute top-24")}>
          Here is my new bundle of animation
        </motion.h1>

      </div>
    </section>
  );
};

export default ImageReveal;
