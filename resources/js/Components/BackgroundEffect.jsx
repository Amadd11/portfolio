import React, { useState, useEffect } from "react";
import { useTheme } from "@/Context/ThemeContext"; // 1. Impor hook useTheme

export default function BackgroundEffect() {
    const { theme } = useTheme(); // 2. Dapatkan tema saat ini (light/dark)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // 3. Tentukan warna sorotan berdasarkan tema
    const spotlightColor =
        theme === "dark"
            ? "rgba(29, 78, 216, 0.2)" // Biru terang untuk mode gelap (sedikit lebih tebal)
            : "rgba(0, 0, 0, 0.08)"; // Abu-abu gelap untuk mode terang

    const backgroundStyle = {
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
    };

    return (
        <div
            style={backgroundStyle}
            className="fixed inset-0 -z-10 transition-all duration-300 pointer-events-none"
        ></div>
    );
}
