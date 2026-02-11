"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const messages = [
    "Ashu, tum mera sukoon ho.",
    "Main har roz bas tumhe hi chunta hoon.",
    "Khamoshi mein bhi main tumhe mehsoos karta hoon.",
    "Tum option nahi, meri decision ho.",
    "Jis tarah tum mujhe dekhti ho... haaye.",
    "Tum meri duniya roshan karti ho.",
    "Main kitna lucky hoon ki tum meri ho."
];

export default function FloatingSurprise() {
    const [msg, setMsg] = useState<string | null>(null);

    const handleClick = () => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setMsg(randomMsg);

        // Auto hide after 3 seconds
        setTimeout(() => setMsg(null), 4000);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="fixed bottom-20 right-6 z-40 bg-champagne-gold/20 backdrop-blur-md border border-champagne-gold/50 p-3 rounded-full text-champagne-gold hover:bg-champagne-gold hover:text-midnight-blue transition-all shadow-[0_0_15px_rgba(230,179,37,0.3)] animate-bounce"
                style={{ animationDuration: "3s" }}
            >
                <Sparkles size={20} />
            </button>

            <AnimatePresence>
                {msg && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed bottom-32 right-10 z-50 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl max-w-xs shadow-2xl"
                    >
                        <p className="font-dancing text-xl text-warm-ivory leading-relaxed">
                            "{msg}"
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
