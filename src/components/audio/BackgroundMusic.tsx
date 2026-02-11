"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/audio/background-music.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Listen for initial interaction to start auto-play if valid
    useEffect(() => {
        const handleInteraction = () => {
            if (!hasInteracted && audioRef.current) {
                setHasInteracted(true);
                // Attempt to play on first interaction if not already playing
                if (!isPlaying) {
                    audioRef.current.play().then(() => {
                        setIsPlaying(true);
                    }).catch(() => { });
                }
            }
        };

        window.addEventListener("click", handleInteraction);
        return () => window.removeEventListener("click", handleInteraction);
    }, [hasInteracted, isPlaying]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isPlaying && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={toggleMute}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-warm-ivory hover:bg-white/20 transition-all shadow-lg hover:shadow-gold/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
