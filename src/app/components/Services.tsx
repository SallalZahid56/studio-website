import { Palette, Globe, Smartphone, Zap, Layers, Target, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Palette, title: "BRAND IDENTITY", desc: "MAKE THEM REMEMBER", text: "We don't just design logos. We create visual DNA that makes your brand impossible to ignore.", features: ["Logo Design", "Brand Guidelines", "Visual Identity"], color: "bg-brand" },
  { icon: Globe, title: "WEB DESIGN", desc: "DIGITAL PERFECTION", text: "Websites that don't just look good—they perform miracles. Every click, scroll, and interaction designed to convert.", features: ["UI/UX Design", "Responsive Design", "Web Development"], color: "bg-black" },
  { icon: Smartphone, title: "MOBILE APPS", desc: "POCKET POWERHOUSE", text: "Apps that people don't just download—they obsess over. Intuitive, addictive, and revenue-generating.", features: ["iOS & Android", "UI/UX Design", "Prototyping"], color: "bg-brand" },
  { icon: Zap, title: "DIGITAL MARKETING", desc: "VIRAL BY DESIGN", text: "Marketing campaigns that break the internet. We don't just reach audiences—we create movements.", features: ["Social Media", "Content Strategy", "SEO Optimization"], color: "bg-black" },
  { icon: Layers, title: "DESIGN SYSTEMS", desc: "SYSTEMATIC GENIUS", text: "Design systems that scale with your ambition. Consistent, efficient, and future-proof.", features: ["Component Libraries", "Style Guides", "Documentation"], color: "bg-brand" },
  { icon: Target, title: "STRATEGY", desc: "THINK DIFFERENT", text: "Strategic thinking that disrupts industries. We don't follow trends—we create them.", features: ["Brand Strategy", "Digital Transformation", "Innovation"], color: "bg-black" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-black overflow-x-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight mb-8 wrap-break-words">
            <div>OUR</div>
            <div className="text-brand">SUPERPOWERS</div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            We don&apos;t just deliver services—we deliver <span className="text-black font-bold">game-changing solutions</span> that transform businesses and <span className="text-brand font-bold">dominate markets</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col gap-6 rounded-xl group hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-full h-1 ${s.color}`}></div>
              <div className="p-8 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-brand transition-colors" />
                </div>
                <div className="space-y-4">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{s.title}</div>
                  <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">{s.desc}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{s.text}</p>
                </div>
                <div className="mt-8 space-y-3">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center">
                      <div className={`w-2 h-2 ${s.color} rounded-full mr-3`}></div>
                      <span className="text-black font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-20 py-16 bg-black rounded-3xl text-white">
          <div className="text-3xl md:text-5xl font-black mb-6">READY TO <span className="text-brand">DOMINATE</span> YOUR MARKET?</div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let&apos;s build something that makes your competition nervous</p>
          <button className="bg-brand hover:bg-brand-light text-white px-12 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105">
            LET&apos;S CONQUER TOGETHER
          </button>
        </div>
      </div>
    </section>
  );
}