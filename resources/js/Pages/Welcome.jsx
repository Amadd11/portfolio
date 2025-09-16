import React from "react";
import { Head } from "@inertiajs/react";

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Work from "@/Components/Work";
import Contact from "@/Components/Contact";
import BackgroundEffect from "@/Components/BackgroundEffect";

// 1. Terima 'projects' dan 'aboutData' sebagai prop
export default function Welcome({ projects, aboutData }) {
    return (
        <>
            <Head>
                <title>Portfolio - Web Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Amaadd, a professional web developer building scalable and modern websites."
                />
            </Head>

            <div className="relative min-h-screen font-sans text-gray-800 transition-colors duration-300 bg-gradient-to-br from-gray-50 to-blue-100 dark:bg-gray-900 dark:text-gray-200">
                <BackgroundEffect />
                <Navbar />
                <main>
                    <Hero />
                    {/* 2. Teruskan prop 'aboutData' ke komponen About */}
                    <About />
                    {/* 3. Teruskan prop 'projects' ke komponen Work */}
                    <Work projects={projects} />
                    <Contact />
                </main>
            </div>
        </>
    );
}
