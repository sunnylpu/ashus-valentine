"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mic, Play, Pause } from "lucide-react";

export default function VoiceReveal() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/audio/voice-message.mp3");
            audioRef.current.onended = () => setIsPlaying(false);
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Play failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-20 px-4 flex justify-center">
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md w-full text-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-wine-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="font-nothing text-2xl text-champagne-gold mb-6 relative z-10">
                    Jab akele ho tab sunna...
                </h3>

                <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-wine-red flex items-center justify-center mx-auto hover:scale-110 transition-transform shadow-lg shadow-wine-red/30 relative z-10"
                >
                    {isPlaying ? <Pause className="text-white fill-current" /> : <Play className="text-white fill-current pl-1" />}
                </button>

                <p className="font-inter text-xs text-white/40 mt-6 tracking-widest uppercase relative z-10">
                    {isPlaying ? "Aankhein band karo Ashu..." : "Tumhare liye ek voice note"}
                </p>
            </motion.div>
        </section>
    );
}
