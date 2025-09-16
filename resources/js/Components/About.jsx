import React, { useState } from "react";
import {
    FiAward,
    FiBriefcase,
    FiHeadphones,
    FiDownload,
    FiCheckCircle,
} from "react-icons/fi";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaLaravel,
    FaDatabase,
    FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

// --- Komponen Kecil ---
const InfoCard = ({ icon, title, subtitle }) => (
    <div className="flex flex-col items-center gap-2 p-4 text-center transition-all duration-300 border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1">
        {icon}
        <h3 className="font-bold text-black dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
);

const ListItem = ({ text }) => (
    <li className="flex items-center gap-3">
        <FiCheckCircle className="flex-shrink-0 text-blue-500" />
        <span>{text}</span>
    </li>
);

const SkillIcon = ({ icon, name }) => (
    <div className="flex flex-col items-center gap-2 text-gray-600 transition-transform duration-300 dark:text-gray-300 hover:scale-110">
        {icon}
        <span className="text-sm font-semibold">{name}</span>
    </div>
);

// --- Data sertifikat (gunakan direct-view link Google Drive) ---
const certifications = [
    {
        title: "BNSP Certified Web Developer",
        image: "/images/bnsp.jpg",
    },
    {
        title: "HTML5 Application Development",
        image: "/images/html5.png",
    },
];

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [activeTab, setActiveTab] = useState("skills");
    const [tabKey, setTabKey] = useState(0);
    const [selectedCert, setSelectedCert] = useState(null); // ✅ state modal

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setTabKey((prev) => prev + 1);
    };

    return (
        <section
            id="about"
            ref={ref}
            className={`py-24 dark:bg-gray-900 transition-opacity duration-1000 ease-out ${
                inView ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="container px-6 mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-black dark:text-white">
                        About Me
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        My introduction
                    </p>
                </div>

                <div className="grid items-start max-w-5xl gap-12 mx-auto lg:grid-cols-2">
                    {/* Foto Profil */}
                    <div
                        className={`flex justify-center transition-all duration-700 ease-out ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <img
                            src="/images/foto.jpg"
                            alt="Foto Profil"
                            className="object-cover transition-transform duration-300 shadow-lg rounded-2xl w-80 h-80 hover:scale-105"
                        />
                    </div>

                    {/* Info & Tabs */}
                    <div
                        className={`flex flex-col gap-8 transition-all duration-700 ease-out delay-200 ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                        }`}
                    >
                        {/* InfoCard */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            <InfoCard
                                icon={
                                    <FiAward
                                        size={24}
                                        className="text-blue-800"
                                    />
                                }
                                title="Experience"
                                subtitle="1+ Years"
                            />
                            <InfoCard
                                icon={
                                    <FiBriefcase
                                        size={24}
                                        className="text-blue-800"
                                    />
                                }
                                title="Completed"
                                subtitle="10+ Projects"
                            />
                            <InfoCard
                                icon={
                                    <FiHeadphones
                                        size={24}
                                        className="text-blue-800"
                                    />
                                }
                                title="Support"
                                subtitle="Online 24/7"
                            />
                        </div>

                        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                            Full-stack developer, creating web applications with
                            a focus on clean UI/UX. Experienced in Laravel,
                            React, and Tailwind CSS—delivering responsive,
                            high-performance solutions.
                        </p>

                        {/* Tabs */}
                        <div>
                            <div className="flex p-1 mb-6 space-x-2 bg-gray-100 rounded-lg dark:bg-gray-800">
                                {["skills", "education", "certifications"].map(
                                    (tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`w-full py-2 rounded-md font-semibold transition-colors ${
                                                activeTab === tab
                                                    ? "bg-white dark:bg-gray-700 text-blue-700"
                                                    : "text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700/50"
                                            }`}
                                        >
                                            {tab.charAt(0).toUpperCase() +
                                                tab.slice(1)}
                                        </button>
                                    )
                                )}
                            </div>

                            {/* Konten Tab */}
                            <div
                                key={tabKey}
                                className="text-gray-600 dark:text-gray-300 animate-fade-in"
                            >
                                {activeTab === "skills" && (
                                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
                                        <SkillIcon
                                            icon={<FaHtml5 size={40} />}
                                            name="HTML5"
                                        />
                                        <SkillIcon
                                            icon={<FaCss3Alt size={40} />}
                                            name="CSS3"
                                        />
                                        <SkillIcon
                                            icon={<FaJsSquare size={40} />}
                                            name="JavaScript"
                                        />
                                        <SkillIcon
                                            icon={<FaReact size={40} />}
                                            name="React"
                                        />
                                        <SkillIcon
                                            icon={<FaLaravel size={40} />}
                                            name="Laravel"
                                        />
                                        <SkillIcon
                                            icon={<FaFigma size={40} />}
                                            name="Figma"
                                        />
                                        <SkillIcon
                                            icon={<FaDatabase size={40} />}
                                            name="MySQL"
                                        />
                                        <SkillIcon
                                            icon={
                                                <RiTailwindCssFill size={40} />
                                            }
                                            name="Tailwind CSS"
                                        />
                                    </div>
                                )}

                                {activeTab === "education" && (
                                    <ul className="space-y-3">
                                        <ListItem text="Bachelor of Computer Science – Universitas Muhammadiyah Yogyakarta (2021–2025)" />
                                        <ListItem text="Full-Stack Laravel & React – BuildWithAngga (2024)" />
                                    </ul>
                                )}

                                {activeTab === "certifications" && (
                                    <ul className="space-y-3">
                                        {certifications.map((cert, i) => (
                                            <li
                                                key={i}
                                                onClick={() =>
                                                    setSelectedCert(cert)
                                                }
                                                className="flex items-center gap-3 cursor-pointer hover:text-blue-600"
                                            >
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500" />
                                                <span>{cert.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Download CV */}
                        <a
                            href="/cv-amaadd.pdf"
                            download
                            className="flex items-center self-start gap-3 px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700 hover:bg-black dark:hover:bg-gray-600 hover:shadow-xl hover:-translate-y-1"
                        >
                            Download CV <FiDownload />
                        </a>
                    </div>
                </div>
            </div>

            {/* === Modal Sertifikat === */}
            {selectedCert && (
                <div
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg"
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute text-gray-600 top-2 right-2 hover:text-black"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="object-contain max-h-[80vh] rounded-md"
                        />
                        <p className="mt-3 font-semibold text-center text-gray-800">
                            {selectedCert.title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
