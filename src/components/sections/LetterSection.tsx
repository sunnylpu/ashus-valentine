"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { loveLetter } from "@/lib/data";

export default function LetterSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-2xl w-full bg-[#fdfbf7] text-gray-800 p-8 md:p-12 rounded-sm shadow-2xl relative rotate-1"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                }}
            >
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 rotate-1 shadow-sm backdrop-blur-sm" />

                <div className="font-nothing text-2xl md:text-3xl leading-relaxed text-gray-700/90 space-y-6">
                    {loveLetter.map((line, index) => (
                        <motion.p key={index} variants={itemVariants}>
                            {line}
                        </motion.p>
                    ))}

                    <motion.p variants={itemVariants} className="pt-8 text-right font-dancing text-4xl text-wine-red">
                        - Your idiot. 😌
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
