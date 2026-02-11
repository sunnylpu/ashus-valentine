"use client";

import { motion } from "framer-motion";

export default function StarMapSection() {
    return (
        <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background - Reusing the global star system but maybe denser or just different context */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-midnight-blue via-[#0d0d1a] to-black z-0" />

            {/* Stars - we can assume the global star background is visible or add a specific one here. 
          For now, let's rely on the global background or add a simple static overlay if needed.
      */}

            <div className="z-10 text-center space-y-8 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full max-w-lg mx-auto aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                >
                    {/* Simulation of a star map visualization */}
                    <div className="absolute inset-0 rounded-full opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                    <div className="relative z-20">
                        <h3 className="font-playfair text-3xl md:text-5xl text-warm-ivory mb-2">
                            The Beginning
                        </h3>
                        <p className="font-poppins text-champagne-gold tracking-widest uppercase text-sm">
                            August 21, 2023
                        </p>
                        <div className="mt-8 opacity-60 font-cormorant italic">
                            Coordinates of our destiny
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-great-vibes text-3xl md:text-5xl text-white/80 mt-12"
                >
                    On this day, the stars aligned for us. ✨
                </motion.p>
            </div>
        </section>
    );
}
