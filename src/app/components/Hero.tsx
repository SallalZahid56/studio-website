"use client";

import { Zap, Star, Sparkles, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-x-hidden bg-background pt-12 pb-32 text-foreground min-h-[85vh] w-full max-w-full"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute top-20 left-20 hidden text-brand animate-bounce md:block">
        <Zap className="h-8 w-8" />
      </div>
      <div className="absolute top-40 right-32 hidden text-brand animate-pulse md:block">
        <Star className="h-6 w-6" />
      </div>
      <div
        className="absolute bottom-40 left-32 hidden text-brand animate-bounce md:block"
        style={{ animationDelay: "1000ms" }}
      >
        <Sparkles className="h-7 w-7" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-2 sm:px-6"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
          <div className="mb-16 space-y-8 text-center">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-[3.5rem] leading-[0.9] font-black tracking-tight wrap-break-words sm:text-8xl">
                <div className="mb-2">WE ARE A</div>
                <div className="relative my-4 inline-block">
                  <span className="inline-block -rotate-2 rounded-xl bg-white px-6 py-2 text-brand">
                    SUPER
                  </span>
                </div>
                <div className="mt-2">DIGITAL</div>
                <div className="text-muted">AGENCY</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center px-2">
              <div className="max-w-[90vw] text-lg font-medium text-muted">
                We create <span className="font-bold text-brand">impossible</span> digital experiences
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row"
          >
            <button className="group inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-light">
              LET&apos;S START SOMETHING BIG
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-black">
              SEE OUR WORK
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand md:text-5xl">200+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted">PROJECTS LAUNCHED</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand md:text-5xl">99%</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted">CLIENT SATISFACTION</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand md:text-5xl">24H</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted">RESPONSE TIME</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand md:text-5xl">∞</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted">CREATIVE POSSIBILITIES</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="mb-4 text-2xl font-bold text-muted md:text-4xl">
              THINKING <span className="text-brand">DIFFERENT</span> IS OUR SUPERPOWER
            </div>
            <div className="mx-auto h-1 w-32 rounded-full bg-brand" />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-brand to-transparent" />
    </section>
  );
}