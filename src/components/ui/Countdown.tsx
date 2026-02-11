"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2026-02-14T00:00:00"); // Adjust year as needed
        // If date passed, maybe count to next year or show "Today is the day!"

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                // Handle expiration
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 text-warm-ivory/80 font-inter text-sm tracking-widest mt-8">
            <div className="flex flex-col items-center">
                <span className="text-xl font-playfair">{timeLeft.days}</span>
                <span className="text-[10px] uppercase">Days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-playfair">{timeLeft.hours}</span>
                <span className="text-[10px] uppercase">Hrs</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-playfair">{timeLeft.minutes}</span>
                <span className="text-[10px] uppercase">Mins</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-playfair">{timeLeft.seconds}</span>
                <span className="text-[10px] uppercase">Secs</span>
            </div>
        </div>
    );
}
