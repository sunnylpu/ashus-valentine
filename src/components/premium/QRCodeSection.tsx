"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { qrCodeContent } from "@/lib/data";

export default function QRCodeSection() {
    return (
        <section className="py-24 px-4 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="mb-8 relative inline-block group">
                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full group-hover:bg-wine-red/20 transition-colors duration-700" />
                    <div className="relative bg-white p-4 rounded-xl shadow-2xl">
                        {/* Placeholder for actual QR code image - fallback to icon if not found */}
                        <div className="w-48 h-48 bg-white flex items-center justify-center overflow-hidden">
                            {/* User needs to put qr-code.png in public/images/ */}
                            <img
                                src="/images/qr-code.png"
                                alt="Scan Me"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback if image fails
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="hidden flex flex-col items-center justify-center text-black/80 gap-2">
                                <QrCode size={48} />
                                <span className="text-xs uppercase tracking-widest">No QR Found</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="font-playfair text-2xl text-white mb-2">
                    {qrCodeContent.title}
                </h3>
                <p className="font-inter text-sm text-white/50 uppercase tracking-widest">
                    {qrCodeContent.instruction}
                </p>
            </motion.div>
        </section>
    );
}
