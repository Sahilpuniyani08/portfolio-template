'use client';
import { cn } from '@/lib/utils'
import { textStyles } from '@/typography/text-styles'
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const RevealText = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });


    const ySlow = useTransform(scrollYProgress, [0, 1], [200, -460]);
    const yMedium = useTransform(scrollYProgress, [0, 1], [160, -340]);
    const yFast = useTransform(scrollYProgress, [0, 1], [260, -240]);


    const sahilY = useTransform(scrollYProgress, [0, 0.5], [300, -30]);
    const sahilScale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.7, 0.7, 4]);
    const sahilOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);





    const blurSlow = useTransform(scrollYProgress, [0, 1], [6, 0]);
    const blurMedium = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const blurFast = useTransform(scrollYProgress, [0, 1], [2, 0]);




    const blurSlowPx = useMotionTemplate`blur(${blurSlow}px)`;
    const blurMediumPx = useMotionTemplate`blur(${blurMedium}px)`;
    const blurFastPx = useMotionTemplate`blur(${blurFast}px)`;


    const words = [
        { text: "React", pos: "left-[6%] top-[30%]", speed: "fast", scale: "scale-150" },
        { text: "Next.js", pos: "right-[12%] top-[25%]", speed: "medium", scale: "scale-300" },
        { text: "Node", pos: "left-[20%] top-[55%]", speed: "slow", scale: "scale-125" },
        { text: "MongoDB", pos: "right-[25%] top-[60%]", speed: "medium", scale: "scale-175" },
        { text: "API", pos: "left-[45%] top-[20%]", speed: "fast", scale: "scale-100" },
        { text: "UI", pos: "right-[42%] top-[45%]", speed: "slow", scale: "scale-80" },
    ];

    const getMotion = (speed: string) => {
        if (speed === "slow") return { y: ySlow, filter: blurSlowPx };
        if (speed === "medium") return { y: yMedium, filter: blurMediumPx };
        return { y: yFast, filter: blurFastPx };
    };

    return (
        <section ref={containerRef} className="h-[500vh] mb-10 relative">
            <div className="h-screen bg-foreground flex sticky top-0 z-10 w-full items-center justify-center overflow-hidden">

                {/* MAIN */}
                <motion.h1
                    style={{
                        y: sahilY,
                        scale: sahilScale,
                        opacity: sahilOpacity,
                    }}
                    className={cn(textStyles.h1, " text-black")}
                >
                    Sahil
                </motion.h1>


                {/* LOOP WORDS */}
                {words.map((item, index) => {
                    const motionStyle = getMotion(item.speed);

                    return (
                        <motion.h1
                            key={index}
                            style={motionStyle}
                            className={cn(
                                textStyles.h1,
                                "absolute text-black/60 whitespace-nowrap z-40 ",
                                item.scale,
                                item.pos
                            )}
                        >
                            {item.text}
                        </motion.h1>
                    );
                })}

            </div>
        </section>
    );
};

export default RevealText;
