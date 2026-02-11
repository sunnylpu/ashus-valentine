"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { reasons } from "@/lib/data";
import { Heart } from "lucide-react";

const Card = ({ reason, index }: { reason: string; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    // Auto-close after 4 seconds
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isFlipped) {
            timer = setTimeout(() => {
                setIsFlipped(false);
                setIsAnimating(true);
            }, 8000);
        }
        return () => clearTimeout(timer);
    }, [isFlipped]);

    return (
        <div
            className="bg-transparent cursor-pointer group perspective w-full h-64"
            onClick={handleFlip}
        >
            <motion.div
                className="relative w-full h-full duration-700"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-midnight-blue to-[#0f0f1b] border border-champagne-gold/30 rounded-xl p-6 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(230,179,37,0.1)] group-hover:shadow-[0_0_25px_rgba(230,179,37,0.3)] transition-shadow"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="mb-4 text-wine-red drop-shadow-[0_0_10px_rgba(154,9,48,0.5)]">
                        <Heart size={40} fill="currentColor" />
                    </div>
                    <h3 className="font-playfair text-2xl text-warm-ivory">Reason #{index + 1}</h3>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-wine-red to-[#5a021a] border border-white/10 rounded-xl p-6 flex items-center justify-center text-center shadow-xl"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden"
                    }}
                >
                    <p className="font-cormorant text-xl md:text-2xl text-white leading-relaxed">
                        "{reason}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default function ReasonsSection() {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto min-h-screen">
            <h2 className="text-4xl md:text-6xl font-great-vibes text-center text-blush-pink mb-24">
                Why I Love You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
                    <Card key={index} reason={reason} index={index} />
                ))}
                {/* Add more placeholder cards if needed to fill grid */}
                {[...Array(8 - reasons.length).keys()].map((i) => (
                    <Card key={`placeholder-${i}`} reason="And so many more reasons..." index={reasons.length + i} />
                ))}
            </div>
        </section>
    );
}
