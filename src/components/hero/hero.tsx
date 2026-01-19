import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButton } from "../common/cta-button";

// Import the poster image from the assets folder
import posterImg from "../../assets/images/poster-img.png";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  fadeUpSoft,
  floatYLoop,
  sectionReveal,
  topGlowReveal,
} from "@/lib/motion/varients";

export default function Hero() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen overflow-hidden noise "
      id="home"
    >
      {/* OUTLINED NAME (BACKGROUND TEXT) */}

      <motion.h1
        variants={fadeUp}
        className="absolute left-1/2  top-25 leading-none -translate-x-1/2 font-playfair  text-[30vw] md:text-[18vw]  font-bold md:tracking-[5rem] md:ml-10  drop-shadow-sm  "
      >
        SAHIL
      </motion.h1>
      <motion.h1
        variants={fadeUp}
        className="hidden md:flex absolute left-1/2 z-30 top-25 leading-none -translate-x-1/2 font-playfair text-stroke text-[30vw] md:text-[18vw]  font-bold md:tracking-[5rem] md:ml-10 "
      >
        SAHIL
      </motion.h1>

      {/* CENTER POSTER IMAGE */}
      <motion.div
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "absolute left-1/2 md:bottom-20 bottom-20  z-20  -translate-x-1/2 ",
          " h-full w-full scale-[2.2] md:scale-[2]  "
        )}
      >
        <motion.div
          className={cn("h-full w-full")}
          variants={floatYLoop}
          animate="animate"
        >
          <Image
            src={posterImg}
            alt="Sahil portrait"
            fill
            priority
            className="object-contain 
           drop-shadow-[0_0_2px_rgba(255,255,255,0.85)]
  drop-shadow-[0_0_6px_rgba(255,200,140,0.45)]
  drop-shadow-[0_0_12px_rgba(255,200,140,0.25)] grayscale-100 contrast-100"
          />
        </motion.div>
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <motion.div
        variants={sectionReveal}
        className="relative z-30 flex min-h-screen w-full  px-5 items-end "
      >
        {/* BOTTOM CONTENT */}
        <motion.div
          variants={sectionReveal}
          className=" relative z-30 items-start w-full flex flex-col md:flex-row  justify-between   pb-10 gap-8 md:px-16 "
        >
          {/* LEFT PARAGRAPH */}
          <div className=" ">
            <motion.p
              variants={fadeUp}
              className="max-w-xs text-2xl  font-serif leading-tight text-foreground "
            >
              I design and build scalable web experiences with a focus on
              clarity, performance, and detail.
            </motion.p>
          </div>

          {/* RIGHT PARAGRAPH */}
          <div className=" flex flex-col gap-5  ">
            <motion.p
              variants={fadeUpSoft}
              className="max-w-2xs  text-sm leading-relaxed text-white/85 md:text-left "
            >
              From concept to creation, I craft digital and physical products
              that blend form, function, and emotion--turning ideas into reality
              that connects with people.
            </motion.p>
            <motion.div variants={fadeUpSoft}>
              <CtaButton
                href="#projects"
                label="See my work"
                textSize="text-sm"
                textColor="text-white"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
