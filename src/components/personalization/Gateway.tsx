"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";

export default function Gateway({ onUnlock }: { onUnlock: () => void }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    // The password logic - simple check
    // You can change "2023-02-26" to whatever date or text
    const correctPassword = "2023-08-21";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === correctPassword) {
            onUnlock();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-blue text-warm-ivory">
            <div className="text-center space-y-8 p-8 max-w-md w-full">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-16 h-16 bg-wine-red/20 rounded-full flex items-center justify-center border border-wine-red/50"
                >
                    <Lock className="w-8 h-8 text-wine-red" />
                </motion.div>

                <div>
                    <h1 className="font-playfair text-3xl mb-2">Sirf Ashu ko pata hai...</h1>
                    <p className="font-inter text-sm opacity-60">Hint: Jis din hum pehli baar mile (YYYY-MM-DD)</p>
                </div>

                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Wo date likho..."
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-center focus:outline-none focus:border-champagne-gold transition-colors font-poppins tracking-widest"
                    />

                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute -bottom-8 left-0 right-0 text-red-400 text-sm"
                            >
                                Galat password, meri jaan.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>

                <button
                    onClick={handleSubmit}
                    className="mt-4 text-sm uppercase tracking-widest hover:text-champagne-gold transition-colors"
                >
                    Andar Aao
                </button>
            </div>
        </div>
    );
}
