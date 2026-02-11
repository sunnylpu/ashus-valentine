"use client";

import { useState } from "react";
import Gateway from "@/components/personalization/Gateway";
import NicknameSection from "@/components/personalization/NicknameSection";
import SecretsSection from "@/components/personalization/SecretsSection";
import WhisperMode from "@/components/personalization/WhisperMode";
import VoiceReveal from "@/components/personalization/VoiceReveal";
import FloatingSurprise from "@/components/personalization/FloatingSurprise";
import HiddenHeart from "@/components/personalization/HiddenHeart";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/premium/IntroSection";
import MemoryTimeline from "@/components/premium/MemoryTimeline";
import StarMapSection from "@/components/premium/StarMapSection";
import IfICouldSection from "@/components/premium/IfICouldSection";
import HiddenVideo from "@/components/premium/HiddenVideo";
import LoveGame from "@/components/premium/LoveGame";
import ReasonsSection from "@/components/sections/ReasonsSection";
import MeaningSection from "@/components/premium/MeaningSection";
import LetterSection from "@/components/sections/LetterSection";
import PromisesSection from "@/components/premium/PromisesSection";
import ProposalSection from "@/components/sections/ProposalSection";
import BackgroundMusic from "@/components/audio/BackgroundMusic";
import StarryBackground from "@/components/background/StarryBackground";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen bg-midnight-blue selection:bg-rose-500 selection:text-white overflow-hidden">
      <StarryBackground />
      <BackgroundMusic />

      {/* Interactive Floating/Overlay Elements */}
      {unlocked && (
        <>
          <WhisperMode />
          <FloatingSurprise />
          <HiddenHeart />
        </>
      )}

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div key="gateway" exit={{ opacity: 0 }}>
            <Gateway onUnlock={() => setUnlocked(true)} />
          </motion.div>
        ) : !started ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="absolute inset-0 z-50"
          >
            <HeroSection onStart={() => setStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative z-10"
          >
            <div className="relative z-10 space-y-20 pb-32">
              <NicknameSection />
              <IntroSection />
              <MemoryTimeline />
              <StarMapSection />
              <IfICouldSection />
              <HiddenVideo />
              <LoveGame />
              <ReasonsSection />
              <MeaningSection />
              <SecretsSection />
              <VoiceReveal />
              <LetterSection />
              <PromisesSection />
              <ProposalSection />

              <footer className="text-center py-20 opacity-60">
                <p className="font-cormorant italic text-lg">Yours Forever, Sunny.</p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
