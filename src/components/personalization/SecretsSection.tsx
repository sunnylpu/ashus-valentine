"use client";

import { motion } from "framer-motion";

const secrets = [
    "The way you get angry and then smile after 2 minutes.",
    "That 'hmmm' voice you make when you're sleepy.",
    "How you say 'kuch nahi' but mean everything.",
    "Your happy dance when you see food.",
];

export default function SecretsSection() {
    return (
        <section className="py-32 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-20"
            >
                <span className="text-sm font-inter tracking-[0.3em] text-champagne-gold uppercase">Inside Our Hearts</span>
                <h2 className="text-4xl md:text-6xl font-nothing text-warm-ivory mt-4">Our Little World 🤫</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secrets.map((secret, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="group relative bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
                    >
                        <div className="absolute top-4 left-4 text-4xl opacity-10 font-great-vibes text-champagne-gold group-hover:opacity-20 transition-opacity">
                            #{index + 1}
                        </div>

                        <p className="font-cormorant text-2xl text-warm-ivory/90 leading-relaxed text-center italic">
                            "{secret}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
