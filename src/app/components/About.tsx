import Image from "next/image";
import { Target, Zap, Award, Heart } from "lucide-react";

const stats = [
  { label: "BRANDS TRANSFORMED", value: "200+" },
  { label: "AVERAGE ROI INCREASE", value: "500%" },
  { label: "INDUSTRY AWARDS", value: "25+" },
  { label: "CREATIVE OBSESSION", value: "24/7" },
];

const values = [
  { icon: Target, title: "OBSESSED", desc: "We don't just care about your project—we're completely obsessed with making it legendary." },
  { icon: Zap, title: "FEARLESS", desc: "We take creative risks others won't. The biggest breakthroughs happen outside comfort zones." },
  { icon: Award, title: "RELENTLESS", desc: "Good enough isn't in our vocabulary. We push until we create something extraordinary." },
  { icon: Heart, title: "AUTHENTIC", desc: "No BS, no fluff. Just honest work, real results, and genuine partnerships that last." },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Intro Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="text-6xl md:text-7xl font-black leading-none tracking-tight mb-8">
              <div className="text-black">WE ARE</div>
              <div className="text-brand">PIXEL CRAFT</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-black mb-8 leading-tight">
              THE AGENCY THAT <span className="text-brand">REFUSES TO BLEND IN</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by rebels who got tired of boring design and weak strategies. We&rsquo;re not just another agency—we&rsquo;re the <span className="text-black font-bold">creative force</span> that transforms businesses into <span className="text-brand font-bold">market leaders</span>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              While others follow trends, we <span className="text-black font-bold">create them</span>. While others play it safe, we <span className="text-brand font-bold">break boundaries</span>. That&rsquo;s how we&rsquo;ve helped 200+ businesses dominate their industries.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand/10 rounded-3xl transform -rotate-3"></div>
            <Image
              src="https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?w=1080"
              alt="Creative team collaboration"
              width={1080}
              height={720}
              className="relative h-125 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <div key={i} className={`text-center p-8 rounded-3xl ${i % 2 === 0 ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
              <div className="text-4xl md:text-5xl font-black text-brand mb-2">{s.value}</div>
              <div className="font-bold uppercase tracking-wider text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <div className="text-4xl md:text-5xl font-black mb-6 text-black">WHAT MAKES US <span className="text-brand">UNSTOPPABLE</span></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These aren&rsquo;t just values—they&rsquo;re the <span className="text-black font-bold">DNA</span> that drives every decision, every design, and every breakthrough we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col gap-6 rounded-xl text-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 group p-8">
              <div className="w-20 h-20 bg-black group-hover:bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <v.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-black tracking-wide text-black">{v.title}</h4>
              <p className="text-gray-600 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-20 py-16 bg-black rounded-3xl text-white">
          <div className="text-3xl md:text-5xl font-black mb-6">READY TO <span className="text-brand">JOIN THE REVOLUTION?</span></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Stop blending in. Start standing out. Let&rsquo;s build something that changes everything.</p>
          <button className="bg-brand hover:bg-brand-light text-white px-12 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105">
            LET&rsquo;S REVOLUTIONIZE TOGETHER
          </button>
        </div>

      </div>
    </section>
  );
}