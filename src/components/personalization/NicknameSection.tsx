"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function NicknameSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <section ref={ref} className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wine-red/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center space-y-12">
                <div className="relative h-32 md:h-48 flex items-center justify-center">
                    {/* Public Name - Fades Out */}
                    <motion.h2
                        className="absolute text-5xl md:text-8xl font-playfair text-gray-500 blur-[2px] opacity-30"
                        animate={isInView ? { opacity: 0, scale: 0.8 } : { opacity: 0.3, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        Aastha
                    </motion.h2>

                    {/* Nickname - Glows In */}
                    <motion.h2
                        className="absolute text-6xl md:text-9xl font-great-vibes text-transparent bg-clip-text bg-gradient-to-r from-champagne-gold to-wine-red drop-shadow-[0_0_25px_rgba(154,9,48,0.6)]"
                        initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0 }}
                        transition={{ delay: 1, duration: 2 }}
                    >
                        Ashu
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="max-w-xl mx-auto space-y-4"
                >
                    <p className="font-cormorant text-2xl md:text-3xl text-warm-ivory">
                        When the world calls you Aastha…
                    </p>
                    <p className="font-cormorant text-2xl md:text-3xl text-champagne-gold">
                        I call you Ashu.
                    </p>
                    <p className="font-inter text-sm opacity-60 tracking-widest uppercase mt-8">
                        Because that name belongs to my heart.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
