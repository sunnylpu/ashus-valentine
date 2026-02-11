"use client";

import { motion } from "framer-motion";
import { whatYouMeanContent } from "@/lib/data";

export default function MeaningSection() {
    return (
        <section className="py-32 px-8 flex flex-col justify-center items-center text-center bg-white/5">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-5xl font-great-vibes text-champagne-gold mb-16"
            >
                {whatYouMeanContent.title}
            </motion.h2>

            <div className="max-w-3xl space-y-12">
                {whatYouMeanContent.lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="font-playfair text-2xl md:text-4xl text-warm-ivory"
                    >
                        {line}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
