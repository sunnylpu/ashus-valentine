"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, X } from "lucide-react";

export default function HiddenVideo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12 flex justify-center">
            <button
                onClick={() => setIsOpen(true)}
                className="group px-8 py-4 bg-black/40 border border-wine-red/50 rounded-full flex items-center gap-3 hover:bg-wine-red/20 transition-all shadow-[0_0_20px_rgba(154,9,48,0.2)]"
            >
                <Video className="text-wine-red group-hover:scale-110 transition-transform" />
                <span className="font-playfair text-lg text-warm-ivory uppercase tracking-widest">
                    Sirf Ashu ke liye 💌 (Akele mein dekhna)
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white"
                        >
                            <X size={32} />
                        </button>

                        <div className="max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative">
                            {/* Placeholder Video - User needs to replace src */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 border border-white/10">
                                <Video size={64} className="mb-4 opacity-50" />
                                <p className="font-inter uppercase tracking-widest text-sm">
                                    Apna video yahan lagana<br />
                                    /public/videos/surprise.mp4
                                </p>
                            </div>
                            {/* 
                        <video src="/videos/surprise.mp4" controls autoPlay className="w-full h-full object-cover" />
                        */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
