import React from "react";
import { useTheme } from "@/Context/ThemeContext"; // Pastikan Anda sudah membuat ThemeContext
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
    // Ambil tema saat ini dan fungsi untuk mengubahnya dari context
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
            aria-label="Toggle theme"
        >
            {/* Tampilkan ikon yang sesuai dengan tema saat ini */}
            {theme === "dark" ? <HiSun size={22} /> : <HiMoon size={22} />}
        </button>
    );
}
