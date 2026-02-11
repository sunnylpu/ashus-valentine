"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timelineData } from "@/lib/data";
import { Heart } from "lucide-react";

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [index % 2 === 0 ? -50 : 50, 0]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity, x }}
            className={`flex items-center justify-between w-full mb-24 ${index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
        >
            <div className="w-5/12 hidden md:block" />

            {/* Center Icon */}
            <div className="z-10 bg-midnight-blue border-4 border-champagne-gold p-3 rounded-full shadow-[0_0_20px_rgba(230,179,37,0.4)]">
                <Heart className="text-wine-red w-6 h-6 fill-current" />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 shadow-xl">
                <span className="text-champagne-gold font-poppins text-sm tracking-widest">{item.date}</span>
                <h3 className="text-2xl font-playfair text-warm-ivory mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-300 font-inter leading-relaxed">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default function TimelineSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-32 px-4 md:px-0 min-h-screen">
            <h2 className="text-4xl md:text-6xl font-great-vibes text-center text-champagne-gold mb-24">Our Love Story</h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-champagne-gold to-transparent origin-top"
                />

                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
