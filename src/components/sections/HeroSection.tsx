"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "@/components/ui/Countdown";
import { heroContent } from "@/lib/data";

export default function HeroSection({ onStart }: { onStart: () => void }) {
    const [step, setStep] = useState(0);

    const handleEnter = () => {
        onStart();
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-midnight-blue text-warm-ivory">
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-wine-red)_0%,_var(--color-midnight-blue)_70%)] opacity-30 animate-pulse-slow" />

            {/* Content Container */}
            <motion.div
                className="z-10 text-center px-4 max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="relative h-20 md:h-24 mb-6 flex items-center justify-center">
                    <motion.h1
                        className="absolute font-playfair text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
                        initial={{ opacity: 0, filter: "blur(0px)" }}
                        animate={{ opacity: [0, 1, 1, 0], filter: ["blur(0px)", "blur(0px)", "blur(0px)", "blur(10px)"] }}
                        transition={{ duration: 4, times: [0, 0.2, 0.8, 1] }}
                    >
                        {heroContent.subtitle.split("...")[0]}...
                    </motion.h1>

                    <motion.h1
                        className="absolute font-playfair text-5xl md:text-7xl font-bold tracking-tight drop-shadow-[0_0_25px_rgba(230,179,37,0.5)]"
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: 3.5, duration: 1.5 }}
                    >
                        {heroContent.title}
                    </motion.h1>
                </div>

                <motion.p
                    className="font-cormorant text-2xl md:text-3xl italic mb-12 opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5, duration: 1.5 }}
                >
                    {heroContent.text}
                </motion.p>

                <motion.button
                    onClick={handleEnter}
                    className="px-8 py-4 bg-transparent border border-warm-ivory/30 rounded-full font-poppins text-lg tracking-widest uppercase hover:bg-wine-red hover:border-transparent transition-all duration-500 shadow-[0_0_20px_rgba(230,179,37,0.1)] hover:shadow-[0_0_30px_rgba(123,3,35,0.4)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    Enter My Heart
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5, duration: 1 }}
                >
                    <Countdown />
                </motion.div>
            </motion.div >
        </div >
    );
}
