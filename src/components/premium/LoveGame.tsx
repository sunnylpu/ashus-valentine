"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveGame() {
    const [score, setScore] = useState(0);
    const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);

    // Win condition check, but doesn't stop game
    const showWinMessage = score >= 5;

    useEffect(() => {
        // Continuous heart generation
        const interval = setInterval(() => {
            setHearts(prev => {
                // Keep max 20 hearts to avoid performance issues
                if (prev.length > 20) return prev;

                return [...prev, {
                    id: Date.now(),
                    x: Math.random() * 90 + 5, // 5% to 95% width
                    delay: 0, // Immediate start for new ones
                }];
            });
        }, 800); // Add new heart every 800ms

        return () => clearInterval(interval);
    }, []);

    const handleCatch = (id: number) => {
        setScore((prev) => prev + 1);
        setHearts((prev) => prev.filter((h) => h.id !== id));
    };

    // Remove heart when animation completes (optional optimization, 
    // but framer motion handling exit is tricky with strictly Controlled lists, 
    // simpler to just filter out if they go off screen or just let React handle updates)
    // For now, simpler logic:

    return (
        <section className="py-20 px-4 min-h-[60vh] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/5">
            <h3 className="font-playfair text-3xl text-center mb-8 z-10 relative">
                Dil pakdo ❤️ <span className="text-sm block font-sans opacity-60 mt-2">Score: {score}</span>
            </h3>

            {/* Hearts Layer - Always Active */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    {hearts.map((heart) => (
                        <motion.div
                            key={heart.id}
                            initial={{ top: -100, left: `${heart.x}%`, opacity: 1 }}
                            animate={{ top: "110%" }}
                            // On animation complete, we could remove it, but for simplicity in this snippet we let them fall
                            // To prevent memory leak in long run, good to remove.
                            onAnimationComplete={() => setHearts(prev => prev.filter(h => h.id !== heart.id))}
                            transition={{ duration: Math.random() * 3 + 6, ease: "linear" }}
                            className="absolute cursor-pointer p-4"
                            onClick={() => handleCatch(heart.id)}
                        >
                            <Heart className="text-wine-red hover:text-rose-500 fill-current w-20 h-20 drop-shadow-2xl filter hover:brightness-110 transition-all opacity-80 hover:opacity-100" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Win Message Overlay */}
            <AnimatePresence>
                {showWinMessage && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
                    >
                        <div className="bg-wine-red/90 p-8 rounded-full shadow-[0_0_50px_rgba(154,9,48,0.6)] text-center border-2 border-champagne-gold/50 max-w-md mx-4 relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
                            />

                            <h4 className="text-4xl font-great-vibes text-champagne-gold mb-2 relative">Jeet Gayi Tum!</h4>
                            <p className="font-cormorant text-xl text-white relative">
                                Par sach toh ye hai...<br />
                                Tumne mera dil toh kab ka chura liya hai. 💘
                            </p>

                            <p className="text-xs text-white/50 mt-4 uppercase tracking-widest relative">
                                (Dil girte rahenge... bas tumhare liye)
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
