"use client";
import Reveal from "./Reveal";

const RevealSection = () => {
  return (
    <section className="bg-black text-white px-8 md:px-16 py-24">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold">
            Discover What Makes <span className="text-blue-500">Nigheban.pk</span> Powerful
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            A community-powered safety platform that delivers real-time alerts, tools, and
            awareness—right when you need it most.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition">
            Get Started
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default RevealSection;
