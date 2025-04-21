'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Array of video sources
const videos = [
    "/hero.mp4",
    "/hero_2.mp4"

];

const VideoHero: React.FC = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Change video every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 10000); // 10 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative h-135 w-full overflow-hidden">
            {/* Background Videos */}
            {videos.map((videoSrc, index) => (
                <video
                    key={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover z-[-2] transition-opacity duration-1000 ${index === currentVideoIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}

            <header className="bg-transparent text-white p-4 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Nigheban.pk Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <span className="text-2xl font-bold">Nigheban.pk</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-10">
                            <li>
                                <Link href="/" className="hover:text-blue-300 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/report" className="hover:text-blue-300 transition-colors">
                                    Report
                                </Link>
                            </li>
                            <li>
                                <Link href="/report" className="hover:text-blue-300 transition-colors">
                                    Consultency
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-blue-300 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/report" className="hover:text-blue-300 transition-colors">
                                    Explore
                                </Link>
                            </li>

                            <button className="bg-blue-600 text-white px-2 py-0.5 rounded hover:bg-blue-800 transition-colors border-black">
                                <Link href="/login" className="hover:text-gray-200 transition-colors">
                                    Log in
                                </Link>
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55 z-[-1]" />

            {/* Content */}
            <div className="relative flex flex-col items-start justify-center h-full text-left text-gray-400 px-8 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Safer Communities
                    <br />
                    <span className="text-gray-400">starts with </span>
                    <span className="text-blue-500">You</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
                    Join us in creating a safer and more secure future. Take action today!
                </p>


            </div>

            {/* Video indicator dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentVideoIndex ? "bg-blue-500" : "bg-white/50"
                            }`}
                        onClick={() => setCurrentVideoIndex(index)}
                        aria-label={`Show video ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default VideoHero;