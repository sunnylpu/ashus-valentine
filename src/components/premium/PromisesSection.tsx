"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { relationshipPromises } from "@/lib/data";

export default function PromisesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-32 px-4 relative max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-great-vibes text-5xl md:text-7xl text-center text-rose-300 mb-24"
            >
                If We Ever Fight...
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relationshipPromises.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl group-hover:bg-wine-red/10 transition-colors duration-500" />

                        <div className="relative border border-white/10 bg-black/20 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col justify-center text-center hover:border-wine-red/30 transition-colors duration-500">
                            <h3 className="font-playfair text-2xl text-champagne-gold mb-4">
                                {promise.title}
                            </h3>
                            <p className="font-cormorant text-xl text-white/80 leading-relaxed">
                                {promise.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="font-inter text-xs text-white/30 uppercase tracking-widest">
                    This is my commitment to you.
                </p>
            </div>
        </section>
    );
}
