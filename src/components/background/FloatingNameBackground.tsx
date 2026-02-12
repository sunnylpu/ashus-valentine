"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingNameBackground() {
    // Generate random positions for the name "Ashu"
    const [elements, setElements] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const count = 15; // Number of floating names
        const newElements = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 20 + 10, // Slow float 10-30s
            delay: Math.random() * 10
        }));
        setElements(newElements);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    initial={{ opacity: 0, x: `${el.x}vw`, y: `${110}vh` }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        y: `-10vh`
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "linear"
                    }}
                    className="absolute text-5xl md:text-7xl font-great-vibes text-white/5 select-none"
                    style={{ left: `${el.x}vw` }}
                >
                    Ashu
                </motion.div>
            ))}
        </div>
    );
}
