"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { proposalContent } from "@/lib/data";

export default function ProposalSection() {
    const [accepted, setAccepted] = useState(false);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleYes = () => {
        setAccepted(true);
        // Fire confetti
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const handleNoHover = () => {
        if (accepted) return;

        // Move button randomly within container
        const x = Math.random() * 200 - 100; // -100 to 100
        const y = Math.random() * 200 - 100;

        setNoButtonPos({ x, y });
    };

    return (
        <section ref={containerRef} className="py-32 px-4 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">

            <AnimatePresence>
                {!accepted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="z-10 bg-black/40 backdrop-blur-lg p-12 rounded-3xl border border-white/10 shadow-2xl max-w-4xl w-full"
                    >
                        <h2 className="text-4xl md:text-6xl font-playfair text-white mb-8">
                            {proposalContent.title}
                        </h2>

                        <div className="space-y-6 mb-12 text-left bg-white/5 p-6 rounded-xl max-h-[40vh] overflow-y-auto custom-scrollbar">
                            {proposalContent.textParts.map((line, i) => (
                                <p key={i} className="font-cormorant text-xl text-gray-300">
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative h-32">
                            <motion.button
                                onClick={handleYes}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-4 bg-gradient-to-r from-wine-red to-[#59051E] text-white font-bold rounded-full text-xl shadow-[0_0_20px_rgba(154,9,48,0.4)] hover:shadow-[0_0_30px_rgba(154,9,48,0.6)] transition-all"
                            >
                                YES 💖
                            </motion.button>

                            <motion.button
                                onMouseEnter={handleNoHover}
                                onClick={handleNoHover} // Mobile support
                                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="px-12 py-4 bg-gray-700 text-gray-400 font-bold rounded-full text-xl hover:bg-gray-600 transition-colors"
                            >
                                NO 🙈
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="z-10 text-center"
                    >
                        <motion.h2
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-6xl md:text-8xl font-great-vibes text-champagne-gold mb-6 drop-shadow-lg"
                        >
                            She Said YES! 💖
                        </motion.h2>
                        <p className="text-3xl font-cormorant text-white mb-12">
                            You just made me the happiest person alive.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}
                            className="space-y-6"
                        >
                            <p className="font-playfair text-xl md:text-2xl text-warm-ivory/80">
                                No matter what happens…<br />
                                I choose you.<br />
                                Today. Tomorrow. Always.
                            </p>

                            <p className="font-great-vibes text-4xl text-champagne-gold mt-8">
                                — Yours Forever, Sunny
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
