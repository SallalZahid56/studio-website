import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "REVOLUTIONARY E-COMMERCE",
    category: "WEB DESIGN",
    desc: "A game-changing e-commerce platform that increased conversions by 400% and redefined online shopping.",
    tagline: "THE FUTURE OF SHOPPING",
    img: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?w=1080",
    stats: [["2M+", "Views"], ["+400%", "Growth"], ["5", "Awards"]],
    tags: ["UI/UX", "Frontend", "E-commerce"],
    reverse: false,
  },
  {
    title: "FINTECH DISRUPTION",
    category: "MOBILE APP",
    desc: "A financial app that's changing how millions manage money with AI-powered insights.",
    tagline: "BANKING REIMAGINED",
    img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1080",
    stats: [["5M+", "Views"], ["+650%", "Growth"], ["12", "Awards"]],
    tags: ["Mobile", "FinTech", "AI"],
    reverse: true,
  },
  {
    title: "ICONIC BRAND IDENTITY",
    category: "BRANDING",
    desc: "A brand identity so powerful it went viral within hours and became an industry benchmark.",
    tagline: "VIRAL FROM DAY ONE",
    img: "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?w=1080",
    stats: [["10M+", "Views"], ["+1200%", "Growth"], ["8", "Awards"]],
    tags: ["Branding", "Logo", "Identity"],
    reverse: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black text-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
            <div>WORK THAT</div>
            <div className="text-brand">BREAKS THE INTERNET</div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Every project is a <span className="text-brand font-bold">masterpiece</span>. Every result is <span className="text-white font-bold">mind-blowing</span>.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((p, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${p.reverse ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Project Image */}
              <div className={`relative group ${p.reverse ? "lg:col-start-2" : ""}`}>
                <div className="absolute inset-0 bg-brand/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative overflow-hidden border-0 bg-gray-900 rounded-3xl">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={1080}
                    height={720}
                    className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-125"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {p.stats.map((s, idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-black text-brand">{s[0]}</div>
                          <div className="text-xs text-gray-300 uppercase tracking-wide">{s[1]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/20 rounded-full mb-6">
                    <span className="text-brand font-bold text-sm uppercase tracking-wide">{p.category}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">{p.title}</h3>
                  <div className="text-xl md:text-2xl text-brand font-bold mb-6 tracking-wide">{p.tagline}</div>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">{p.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {p.tags.map(t => (
                    <span key={t} className="px-4 py-2 bg-gray-800 text-white rounded-full font-medium text-sm">{t}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center bg-brand hover:bg-brand-light text-white px-8 py-3 rounded-full font-bold transition-all group">
                    VIEW CASE STUDY <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition-all">
                    LIVE PREVIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-32">
          <div className="text-3xl md:text-4xl font-black mb-10">WANT TO BE OUR <span className="text-brand">NEXT SUCCESS STORY?</span></div>
          <button className="inline-flex items-center bg-brand hover:bg-brand-light text-white px-12 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all group">
            LET&apos;S CREATE MAGIC <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}