// components/VideoHero.tsx

import React from "react";

const VideoHero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[-2]"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-[-1]" />

            {/* Content */}
            <div className="relative flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-16">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
    Safer Communities 
    <br />
    <span className="text-white">starts with </span>
    <span className="text-blue-500">You</span>
  </h1>
  <p className="text-lg md:text-xl text-gray-300 max-w-xl">
    Join us in creating a safer and more secure future. Take action today!
  </p>
</div>

        </section>
    );
};

export default VideoHero;