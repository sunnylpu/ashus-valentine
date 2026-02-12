"use client";

import { motion } from "framer-motion";
import { deserveMoreContent } from "@/lib/data";

export default function DeserveMoreSection() {
    return (
        <section className="py-24 px-4 relative min-h-[60vh] flex flex-col justify-center items-center text-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine-red/5 to-transparent pointer-events-none" />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-playfair text-3xl md:text-5xl text-champagne-gold mb-16 relative z-10"
            >
                {deserveMoreContent.title}
            </motion.h2>

            <div className="max-w-4xl w-full space-y-12">
                {deserveMoreContent.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <p className="font-cormorant text-xl md:text-3xl text-white/90 leading-relaxed italic">
                            "{item}"
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="mt-20 font-inter text-sm md:text-base tracking-[0.2em] uppercase text-blush-pink"
            >
                {deserveMoreContent.closing}
            </motion.p>
        </section>
    );
}
