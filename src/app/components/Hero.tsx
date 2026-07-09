import { Zap, Star, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background text-foreground pt-20">
      
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* 2. Floating Animated Icons */}
      <div className="absolute top-32 left-20 text-brand animate-bounce hidden md:block">
        <Zap className="w-8 h-8" />
      </div>
      <div className="absolute top-52 right-32 text-brand animate-pulse hidden md:block">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-32 text-brand animate-bounce hidden md:block" style={{ animationDelay: '1000ms' }}>
        <Sparkles className="w-7 h-7" />
      </div>

      {/* 3. Main Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Headline */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-4">
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
            </div>

            {/* Subheadline */}
            <div className="flex justify-center">
              <div className="max-w-2xl text-xl md:text-2xl text-muted font-medium leading-relaxed">
                We create <span className="text-brand font-bold">impossible</span> digital experiences that make brands <span className="text-white font-bold underline decoration-brand">unforgettable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="inline-flex items-center justify-center bg-brand hover:bg-brand-light text-white px-8 py-4 text-lg font-bold rounded-full transition-all group">
                LET&apos;S START SOMETHING BIG
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold rounded-full transition-all">
                SEE OUR WORK
              </button>
            </div>
          </div>

          {/* 4. Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
          </div>

          {/* Bottom Tagline */}
          <div className="text-center mt-20">
            <div className="text-2xl md:text-4xl font-bold text-muted mb-4">
              THINKING <span className="text-brand">DIFFERENT</span> IS OUR SUPERPOWER
            </div>
            <div className="w-32 h-1 bg-brand mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand to-transparent"></div>
    </section>
  );
}