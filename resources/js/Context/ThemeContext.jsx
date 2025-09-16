import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Buat Context
const ThemeContext = createContext();

// 2. Buat Provider Component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Cek tema dari localStorage saat pertama kali load
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Hapus class lama dan tambahkan class baru
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);

        // Simpan preferensi tema di localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Buat custom hook untuk kemudahan penggunaan
export function useTheme() {
    return useContext(ThemeContext);
}
