"use client";

import { motion } from "framer-motion";
import { ifICouldContent } from "@/lib/data";

export default function IfICouldSection() {
    return (
        <section className="py-20 px-8 min-h-[50vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-3xl space-y-16">
                {ifICouldContent.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, delay: index * 0.5 }}
                        className="font-playfair text-2xl md:text-4xl text-warm-ivory/90 leading-relaxed"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
