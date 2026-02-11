"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function HiddenHeart() {
    const [clicks, setClicks] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        const newCount = clicks + 1;
        setClicks(newCount);

        if (newCount === 7) {
            setShowModal(true);
            setClicks(0); // Reset
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 opacity-20 hover:opacity-100 transition-opacity z-40 text-wine-red"
                title="?"
            >
                <Heart size={16} fill="currentColor" />
            </button>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center text-center px-6"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="space-y-6 max-w-lg"
                        >
                            <div className="w-20 h-20 bg-wine-red rounded-full mx-auto flex items-center justify-center animate-pulse">
                                <Heart size={40} className="text-white fill-current" />
                            </div>

                            <h2 className="font-playfair text-3xl md:text-4xl text-white">
                                Agar tum abhi ro rahi ho...
                            </h2>

                            <p className="font-cormorant text-xl text-white/80 leading-relaxed">
                                Aao gale lag jao.<br />
                                Ye maine sirf tumhare liye banaya hai.<br />
                                <span className="text-sm uppercase tracking-widest opacity-50 mt-4 block">
                                    I love you, Ashu.
                                </span>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
