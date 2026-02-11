"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timelineData } from "@/lib/data";
import { Heart, Camera, MessageCircle, Frown, Smile } from "lucide-react";

export default function MemoryTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const getIcon = (type: string) => {
        switch (type) {
            case "milestone": return <Heart className="text-wine-red w-5 h-5 fill-current" />;
            case "memory": return <Camera className="text-wine-red w-5 h-5" />;
            case "growth": return <Smile className="text-wine-red w-5 h-5" />;
            default: return <Heart className="text-wine-red w-5 h-5" />;
        }
    };

    return (
        <section ref={containerRef} className="relative py-32 px-4 md:px-0 min-h-screen">
            <div className="text-center mb-24 space-y-4">
                <h2 className="text-4xl md:text-6xl font-great-vibes text-champagne-gold">From Stranger to My Forever</h2>
                <p className="font-cormorant text-xl text-warm-ivory opacity-80">Every moment that led me to you.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-wine-red to-transparent origin-top"
                />

                <div className="space-y-24">
                    {timelineData.map((item, index) => (
                        <div key={index} className={`flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                            {/* Spacer */}
                            <div className="w-5/12 hidden md:block" />

                            {/* Center Icon */}
                            <div className="z-10 bg-midnight-blue border-4 border-wine-red p-3 rounded-full shadow-[0_0_20px_rgba(154,9,48,0.4)] relative">
                                {getIcon(item.type)}
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-5/12 ml-12 md:ml-0 md:px-0 px-4"
                            >
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 shadow-xl relative group">
                                    <span className="text-champagne-gold font-poppins text-xs tracking-widest uppercase">{item.date}</span>
                                    <h3 className="text-2xl font-playfair text-warm-ivory mt-2 mb-3">{item.title}</h3>
                                    <p className="text-gray-300 font-inter leading-relaxed text-sm">{item.description}</p>

                                    {/* Handwriting Decoration */}
                                    <div className="absolute -bottom-4 -right-4 font-nothing text-wine-red/40 text-4xl opacity-0 group-hover:opacity-100 transition-opacity rotate-[-10deg]">
                                        ♥
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
