"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ear } from "lucide-react";

export default function WhisperMode() {
    const [active, setActive] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Placeholder audio path
        audioRef.current = new Audio("/audio/heartbeat.mp3");
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        }
    }, []);

    const toggleMode = () => {
        if (!audioRef.current) return;

        if (!active) {
            setActive(true);
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        } else {
            setActive(false);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={toggleMode}
                className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-warm-ivory hover:bg-white/20 transition-all shadow-lg hover:shadow-wine-red/20 group"
                title="Press if you miss me"
            >
                <Ear size={24} className="group-hover:text-wine-red transition-colors" />
            </button>

            {/* Overlay */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-center px-4"
                        onClick={toggleMode} // Click anywhere to close
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="space-y-8"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-24 h-24 bg-wine-red rounded-full mx-auto blur-xl opacity-50"
                            />

                            <div className="space-y-4 relative -mt-20">
                                <p className="font-playfair text-3xl md:text-5xl text-white/90">
                                    Ashu... idhar aao.
                                </p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5, duration: 2 }}
                                    className="font-cormorant text-xl text-white/60"
                                >
                                    Main kahin nahi ja raha.<br />
                                    Tum mere saath safe ho.
                                </motion.p>
                            </div>
                        </motion.div>

                        <p className="absolute bottom-10 text-xs text-white/20 uppercase tracking-widest">
                            Band karne ke liye kahin bhi tap karo
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
