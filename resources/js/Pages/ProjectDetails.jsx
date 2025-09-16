import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import BackgroundEffect from "@/Components/BackgroundEffect";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

export default function ProjectDetail({ project }) {
    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 dark:text-gray-300 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-950">
                <p className="mb-4 text-lg">Project not found.</p>
                <Link
                    href="/"
                    className="px-4 py-2 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                    Go back home
                </Link>
            </div>
        );
    }

    // default gambar utama = gambar pertama
    const [mainImage, setMainImage] = useState(
        project.imageUrl?.[0]
            ? `/storage/${project.imageUrl[0]}`
            : "/default.jpg"
    );

    return (
        <>
            <Head title={project.title} />
            <div className="relative min-h-screen font-sans text-gray-800 transition-colors duration-300 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 dark:text-gray-200">
                <BackgroundEffect />
                <Navbar />
                <main className="container px-6 py-24 pt-32 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        {/* Tombol Kembali */}
                        <Link
                            href="/#work"
                            className="flex items-center gap-2 mb-8 text-gray-600 transition-colors dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            <FiArrowLeft />
                            <span>Back to Portfolio</span>
                        </Link>

                        {/* Judul */}
                        <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-white">
                            {project.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* ======= GALLERY ======= */}
                        <div className="flex flex-col items-center">
                            {/* Gambar Utama */}
                            <div className="w-full mb-6">
                                <img
                                    src={mainImage}
                                    alt={project.title}
                                    className="object-contain w-full shadow-lg rounded-xl"
                                />
                            </div>

                            {/* Thumbnail */}
                            {project.imageUrl?.length > 1 && (
                                <div className="flex flex-wrap justify-center gap-4">
                                    {project.imageUrl.map((img, i) => {
                                        const fullPath = `/storage/${img}`;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() =>
                                                    setMainImage(fullPath)
                                                }
                                                className={`border-2 rounded-lg overflow-hidden focus:outline-none transition
                                                    ${
                                                        mainImage === fullPath
                                                            ? "border-blue-500"
                                                            : "border-transparent hover:border-gray-400"
                                                    }`}
                                            >
                                                <img
                                                    src={fullPath}
                                                    alt={`${
                                                        project.title
                                                    } thumb ${i + 1}`}
                                                    className="object-cover w-24 h-16"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Deskripsi */}
                        <h2 className="mt-10 mb-4 text-2xl font-bold text-black dark:text-white">
                            About this project
                        </h2>
                        <div
                            className="prose prose-lg text-gray-600 max-w-none dark:prose-invert dark:text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: project.description,
                            }}
                        />

                        {/* Tautan */}
                        <div className="flex gap-4 mt-8">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-200 transition-colors duration-300 rounded-lg bg-gray-800/80 hover:bg-gray-700/80"
                                >
                                    <FiGithub /> View Code
                                </a>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
