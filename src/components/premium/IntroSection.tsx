"use client";

import { motion } from "framer-motion";
import { introContent } from "@/lib/data";

export default function IntroSection() {
    return (
        <section className="py-24 px-8 min-h-[60vh] flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-playfair text-wine-red mb-12 drop-shadow-sm"
            >
                {introContent.title}
            </motion.h2>

            <div className="space-y-8">
                {introContent.text.map((paragraph, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.3, duration: 1 }}
                        className="font-cormorant text-2xl md:text-3xl text-warm-ivory/90 leading-relaxed"
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
