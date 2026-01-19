import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { fadeUp, fadeUpSoft, sectionReveal, stagger } from "@/lib/motion/varients";
import { SocialIcon } from "../common/social-icon";
import { socialMediaData } from "@/data/social-media";
import { routeLinks } from "@/data/route-links";
import { textStyles } from "@/typography/text-styles";

export default function Footer() {
  return (
    <motion.footer
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative overflow-hidden"
    >

      <div className="relative h-[12vh] md:h-[25vh] flex items-end justify-center">

        <motion.h1
          variants={fadeUp}
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 leading-none ",
            "font-serif font-bold ",
            " text-white text-[40vw] drop-shadow-sm drop-shadow-accent  md:text-[18vw] leading-none  font-bold md:tracking-[5rem] md:ml-10 "
          )}
        >
          Sahil
        </motion.h1>


        <motion.h1
          variants={fadeUp}
          className={cn(
            "absolute top-0 left-1/2  z-30 -translate-x-1/2",
            "font-serif font-bold",
            "  text-white text-[40vw]  md:text-[18vw] leading-none  font-bold md:tracking-[5rem] md:ml-10 ",
            "text-stroke"
          )}
        >
          Sahil
        </motion.h1>
      </div>


      <motion.div
        variants={sectionReveal}
        className="relative bg-accent noise text-foreground px-6 md:px-16 py-12  "
      >
        <div className=" pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2  gap-10 md:justify-around  ">

          <motion.div variants={fadeUpSoft} className=" space-y-8 md:space-y-6">
            <p className="text-sm uppercase tracking-wide">Connected with me</p>

            <motion.div variants={stagger} className="flex gap-4 ">
              {socialMediaData.map((item, idx) => (
                <SocialIcon
                  key={idx}
                  className={
                    "flex h-9 w-9 items-center justify-center rounded-full border transition  border-foreground text-white inset-shadow-none bg-transparent hover:bg-foreground hover:text-accent hover:transition-all hover:ease-in hover:duration-150 hover:border-none hover:inset-shadow-xs hover:shadow-2xl hover:shadow-background-elevated hover:inset-shadow-foreground-muted"
                  }
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </motion.div>

            <p className="max-w-xs font-light text-xs text-foreground/80 leading-relaxed">
              I transform innovative ideas into reality through thoughtful
              design and meaningful digital experiences.
            <span className={cn(textStyles.small, "text-foreground relative md:hidden inline-block mt-5")}>
              Say hi &#8722; {" "}
              <span className="font text-foreground/80 text-[13px]">punyanisahil0001@gmail.com</span>
            </span>
            </p>
          </motion.div>

           <div className="flex flex-col md:items-end  gap-5 md:gap-2 justify-between">
            <motion.nav
              variants={sectionReveal}
              className="flex gap-5 md:gap-8 text-sm "
            >
              {routeLinks.map(({ href, label }) => (
                <motion.div key={label} variants={fadeUpSoft}>
                  <FooterLink href={href}>{label}</FooterLink>
                </motion.div>
              ))}
            </motion.nav>

            <motion.p
              variants={fadeUpSoft}
              className="flex items-end justify-start md:justify-end text-xs opacity-80"
            >
             
                Copyright © Sahil Punyani {new Date().getFullYear()}
              
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}


