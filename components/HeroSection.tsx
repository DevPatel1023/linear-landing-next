"use client";

import { containerVariants, textRevealVariants } from "@/lib/animations";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  // Container animation - staggers children
  
  // Word-by-word animation for the heading
  const headingText = "Linear is a purpose-built tool for planning and building products";
  const words = headingText.split(" ");

  return (
    <section className="relative min-h-screen overflow-hidden pt-30 container mx-auto px-4">
      <div className="grid grid-cols-12 gap-8 items-center">
        <motion.div
          className="col-span-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading with word-by-word reveal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white will-change-transform">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={textRevealVariants}
                className="inline-block mr-[0.25em]"
                style={{ willChange: "transform, opacity, filter" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Paragraph - animates as a whole with blur */}
          <motion.p
            className="mt-6 text-lg text-white/70 max-w-xl"
            variants={textRevealVariants}
            style={{ willChange: "transform, opacity, filter" }}
          >
            Meet the system for modern software development. Streamline issues,
            projects, and product roadmaps.
          </motion.p>

          {/* Buttons - animate together with blur */}
          <motion.div
            className="mt-8 flex flex-col items-start gap-3 md:flex-row"
            variants={textRevealVariants}
            style={{ willChange: "transform, opacity, filter" }}
          >
            <Button>Start Building</Button>

            <Button variant="ghost" className="rounded-md p-2 hover:bg-white/10">
              <span className="text-white/80">New:</span>{" "}
              <span className="text-white/60">Linear Reviews</span>
              {" ("}Meta{") "}
              <span className="hover:text-white">{">"}</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}