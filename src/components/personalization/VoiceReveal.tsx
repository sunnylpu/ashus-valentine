"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Play, Pause, Lock, Unlock } from "lucide-react";

export default function VoiceReveal() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleUnlock = () => {
        setIsUnlocked(true);
        // Add immersive dark mood class to body if possible or just use fullscreen overlay
    };

    const togglePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/audio/secret-letter.mp3");
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
        <section className="py-24 px-4 relative flex justify-center items-center">
            <AnimatePresence>
                {isUnlocked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-md w-full space-y-8"
                        >
                            <h3 className="font-great-vibes text-5xl text-rose-500 mb-2">My Secret Letter</h3>
                            <p className="font-cormorant text-xl text-white/60 italic overflow-hidden">
                                "Ashu... agar tum ye sun rahi ho..."
                            </p>

                            <button
                                onClick={togglePlay}
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-wine-red to-rose-900 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(154,9,48,0.5)] hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause size={32} className="text-white fill-current" /> : <Play size={32} className="text-white fill-current pl-2" />}
                            </button>

                            <button
                                onClick={() => {
                                    setIsUnlocked(false);
                                    setIsPlaying(false);
                                    if (audioRef.current) audioRef.current.pause();
                                }}
                                className="mt-12 text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                            >
                                Close Secret
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={handleUnlock}
                className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center relative overflow-hidden group hover:border-wine-red/50 transition-colors"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-white/10 rounded-full group-hover:bg-wine-red/20 transition-colors">
                        <Lock className="w-8 h-8 text-champagne-gold" />
                    </div>
                </div>

                <h3 className="font-playfair text-3xl text-white mb-2">
                    Only For Ashu 💌
                </h3>
                <p className="font-inter text-sm text-white/50 tracking-wider uppercase">
                    Click to Reveal Secret
                </p>
            </motion.div>
        </section>
    );
}
