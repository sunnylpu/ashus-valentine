"use client";

import { motion } from "framer-motion";

const photos = [
    { id: 1, src: "/placeholder-1.jpg", caption: "Our First Trip" },
    { id: 2, src: "/placeholder-2.jpg", caption: "Crazy Adventures" },
    { id: 3, src: "/placeholder-3.jpg", caption: "Quiet Moments" },
    { id: 4, src: "/placeholder-4.jpg", caption: "Just Us" },
];

export default function GallerySection() {
    return (
        <section className="py-32 px-4 min-h-screen flex flex-col items-center justify-center bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-great-vibes text-champagne-gold mb-20 text-center"
            >
                Captured Moments
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl w-full">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -2 : 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-white p-4 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer"
                    >
                        <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                                <span className="font-poppins text-sm">Upload Photo {photo.id}</span>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="font-nothing-you-could-do font-handwriting text-2xl text-gray-800 opacity-80 group-hover:opacity-100 transition-opacity">
                                {photo.caption}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
