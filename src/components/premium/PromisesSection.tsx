"use client";

import { motion } from "framer-motion";
import { promises } from "@/lib/data";

export default function PromisesSection() {
    return (
        <section className="py-24 px-4 bg-midnight-blue relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-great-vibes text-center text-wine-red mb-16 drop-shadow-[0_0_15px_rgba(154,9,48,0.5)]">
                    My Promises to You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 border border-champagne-gold/20 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-champagne-gold/50 transition-colors group"
                        >
                            <div className="text-champagne-gold text-xl mb-4 opacity-50 font-playfair italic">
                                Promise {index + 1}
                            </div>
                            <p className="font-cormorant text-2xl text-warm-ivory leading-relaxed">
                                {promise}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
