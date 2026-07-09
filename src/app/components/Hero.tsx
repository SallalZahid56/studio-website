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
    <section id="home" className="relative overflow-hidden bg-background text-foreground pt-12 pb-32 min-h-[85vh]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute top-20 left-20 text-brand animate-bounce hidden md:block">
        <Zap className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-32 text-brand animate-pulse hidden md:block">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-32 text-brand animate-bounce hidden md:block" style={{ animationDelay: '1000ms' }}>
        <Sparkles className="w-7 h-7" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-8 mb-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <div className="mb-4">WE ARE A</div>
                <div className="relative inline-block">
                  <span className="text-brand bg-white px-8 py-4 rounded-2xl transform -rotate-2 inline-block">
                    SUPER
                  </span>
                </div>
                <div className="mt-4">DIGITAL</div>
                <div className="text-muted">AGENCY</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="max-w-2xl text-xl md:text-2xl text-muted font-medium leading-relaxed">
                We create <span className="text-brand font-bold">impossible</span> digital experiences that make brands <span className="text-white font-bold underline decoration-brand">unforgettable</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="inline-flex items-center justify-center bg-brand hover:bg-brand-light text-white px-8 py-4 text-lg font-bold rounded-full transition-all group">
                LET&apos;S START SOMETHING BIG
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold rounded-full transition-all">
                SEE OUR WORK
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand">200+</div>
              <div className="text-muted font-medium uppercase tracking-wider text-sm">PROJECTS LAUNCHED</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand">99%</div>
              <div className="text-muted font-medium uppercase tracking-wider text-sm">CLIENT SATISFACTION</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand">24H</div>
              <div className="text-muted font-medium uppercase tracking-wider text-sm">RESPONSE TIME</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand">∞</div>
              <div className="text-muted font-medium uppercase tracking-wider text-sm">CREATIVE POSSIBILITIES</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="text-2xl md:text-4xl font-bold text-muted mb-4">
              THINKING <span className="text-brand">DIFFERENT</span> IS OUR SUPERPOWER
            </div>
            <div className="w-32 h-1 bg-brand mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand to-transparent"></div>
    </section>
  );
}