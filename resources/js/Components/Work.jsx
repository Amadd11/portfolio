import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "@inertiajs/react";

// Komponen kartu proyek
const ProjectCard = ({ project, delay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Link
            href={`/projects/${project.slug}`}
            ref={ref}
            className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out ${
                inView
                    ? `opacity-100 translate-y-0 delay-${delay}`
                    : "opacity-0 translate-y-10"
            }`}
        >
            <img
                src={
                    project.imageUrl?.length
                        ? `/storage/${project.imageUrl[0]}`
                        : "/default.jpg"
                }
                alt={project.title}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 opacity-0 bg-black/70 group-hover:opacity-100">
                <h3 className="mb-2 text-2xl font-bold text-white">
                    {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-200">
                    Click to see details
                </p>
            </div>
        </Link>
    );
};

// Halaman Work
export default function Work({ projects = [] }) {
    return (
        <section id="work" className="py-24 dark:bg-gray-900">
            <div className="container px-6 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-black dark:text-white">
                        My Portfolio
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Most recent work
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
