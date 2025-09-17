import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import Clock from "./Clock";

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);

    // Kelas link diperbarui untuk mendukung dark/light mode
    const getLinkClass = (path) =>
        url === path
            ? "bg-black dark:bg-white text-white dark:text-gray-900 font-medium px-4 py-1.5 rounded-full"
            : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white px-4 py-1.5 rounded-full transition";

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#work", label: "Work" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 flex items-center w-full h-20 dark:bg-gray-900 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full max-w-screen-xl px-6 mx-auto">
                {/* Logo */}
                <Link
                    href="/"
                    className="z-50 text-2xl font-bold text-black dark:text-white"
                >
                    ⚡️ Portfolio
                </Link>

                {/* Menu tengah (Desktop) */}
                <nav className="items-center hidden px-2 py-1 space-x-2 rounded-full md:flex bg-gray-200/50 dark:bg-zinc-800/50 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={getLinkClass(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Tombol kanan & Toggle (Desktop) */}
                <div className="items-center hidden gap-2 md:flex">
                    <ThemeToggle />
                    <Clock />
                </div>

                {/* Tombol Hamburger (Mobile) */}
                <button
                    className="z-50 text-black md:hidden dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </button>
            </div>
            {/* Menu Dropdown Mobile */}
            <div
                className={`md:hidden absolute top-0 left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg pt-24 pb-8 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <nav className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={getLinkClass(link.href)}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-6">
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
