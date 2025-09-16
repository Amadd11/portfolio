import React, { useState, useEffect } from "react";
import {
    FiInstagram,
    FiTwitter,
    FiGithub,
    FiSend,
    FiArrowDown,
} from "react-icons/fi";

export default function Hero() {
    // State untuk mengontrol kapan animasi dimulai
    const [isMounted, setIsMounted] = useState(false);

    // useEffect akan berjalan sekali setelah komponen dimuat
    useEffect(() => {
        // Atur isMounted menjadi true setelah sedikit penundaan untuk memicu transisi
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 500);

        // Cleanup function untuk membersihkan timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex items-center justify-center min-h-screen px-6 overflow-hidden transition-colors duration-300 dark:bg-gray-900">
            <div className="container relative mx-auto">
                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">
                    {/* Kolom Kiri: Ikon Sosial (dengan animasi) */}
                    <aside
                        className={`hidden lg:flex flex-col items-center gap-6 transition-all duration-700 ease-out ${
                            isMounted
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <a
                            href="https://www.instagram.com/aamaadd_"
                            className="text-gray-500 transition-colors dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            <FiInstagram size={24} />
                        </a>
                        <a
                            href="https://github.com/Amadd11"
                            className="text-gray-500 transition-colors dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            <FiGithub size={24} />
                        </a>
                    </aside>

                    {/* Kolom Tengah: Konten Utama (dengan animasi) */}
                    <main
                        className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out delay-200 ${
                            isMounted
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h1 className="flex items-center gap-3 text-4xl font-bold text-black md:text-5xl dark:text-white">
                            Muhammad Syafei <span className="text-2xl">👋</span>
                        </h1>
                        <div className="flex items-center gap-4 my-4">
                            <div className="w-16 h-px bg-gray-400 dark:bg-gray-600"></div>
                            <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                                Full-Stack Developer
                            </h2>
                        </div>
                        <p className="max-w-md mb-8 text-gray-500 dark:text-gray-400">
                            I’m a creative developer based in Indonesia,
                            passionate and dedicated to building modern web
                            experiences. A Fresh Graduate Web Developer from
                            Universitas Muhammadiyah Yogyakarta, I specialize in
                            Laravel, React, and Tailwind CSS. I have experience
                            creating responsive, high-performance web
                            applications through academic projects and freelance
                            work. My portfolio includes a dynamic multi-section
                            website and 3+ interactive full-stack projects,
                            showcasing both front-end development and UI/UX
                            design expertise.
                        </p>
                        {/* Tombol Aksi */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                href="#contact"
                                className="w-full px-6 py-3 font-semibold text-center text-white transition-all duration-300 transform rounded-lg shadow-lg sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#work"
                                className="w-full px-6 py-3 font-semibold text-center text-white transition-all duration-300 bg-gray-700 border border-gray-400 rounded-lg sm:w-auto dark:bg-zinc-800 hover:bg-black dark:hover:bg-gray-600 dark:border-gray-600"
                            >
                                View Project
                            </a>
                        </div>
                    </main>

                    {/* Kolom Kanan: Gambar Profil (dengan animasi) */}
                    <aside
                        className={`relative flex items-center justify-center order-first lg:order-none transition-all duration-700 ease-out delay-400 ${
                            isMounted
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90"
                        }`}
                    >
                        {/* Bentuk dekoratif di belakang gambar */}
                        <div className="absolute w-56 h-56 transform rounded-full md:w-72 md:h-72 rotate-12"></div>

                        <img
                            src="/images/foto.jpg"
                            alt="Foto profil Amaadd"
                            className="relative z-10 object-cover w-48 h-48 rounded-full shadow-2xl md:w-64 md:h-64 grayscale"
                        />
                    </aside>
                </div>

                {/* Tombol Scroll Down (dengan animasi) */}
                <a
                    href="#about"
                    className={`absolute -bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-700 ease-out delay-500 ${
                        isMounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <FiArrowDown />
                    <span>Scroll down</span>
                </a>
            </div>
        </section>
    );
}
