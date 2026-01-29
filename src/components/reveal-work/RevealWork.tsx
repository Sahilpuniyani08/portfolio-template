'use client';
import { ecommerce } from '@/assets/images'
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useAnimate } from "framer-motion";
import { useRef } from 'react';

const RevealWork = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Add spring to the scale for duration/animation control
    const scaleRaw = useTransform(scrollYProgress, [0.1, 0.2], [0.90, 1]);
    const radiusRaw = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
    const scale = useSpring(scaleRaw, {
        stiffness: 200,
        damping: 30,
        mass: 1,
        // tweak these values for desired duration and smoothing
    });
    const radius = useSpring(radiusRaw, {
        stiffness: 150,
        damping: 50,
        mass: 1,
        // tweak these values for desired duration and smoothing
    });

    return (
        <motion.section
            className="relative pb-28"
            id="about"
            ref={containerRef}
            style={{
                scale: scale,

            }}
        >
            <motion.div className='h-screen w-full mx-auto bg-background-accent/70'
                style={{ borderRadius: radius }}
            >
                <div className="flex flex-col h-full md:flex-row items-center  justify-center gap-8 px-4 py-12 max-w-5xl mx-auto ">
                    {/* Left side: Image */}
                    <div className=" h-64 w-70  flex justify-center mb-6 md:mb-0">
                        <Image
                            src={ecommerce || "/fallback.png"}
                            alt={"reveal-img"}
                            className="rounded-xl shadow-lg object-cover w-64 h-64 "
                            style={{ borderRadius: "8px" }}
                        />
                    </div>
                    {/* Right side: Heading & Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Reveal My Work
                        </h2>
                        <p className="text-base text-foreground-muted mb-2">
                            I have had the privilege to work on multiple projects that focus on elegant design and robust engineering. My expertise covers building dynamic web applications, ensuring seamless user experiences across diverse platforms and devices.
                        </p>
                        <p className="text-base text-foreground-muted">
                            Explore some highlights of my work and see how I blend creativity with technical excellence to deliver purposeful solutions.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default RevealWork
