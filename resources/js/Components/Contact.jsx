import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Komponen untuk setiap baris info kontak
const ContactInfoItem = ({ icon, text }) => (
    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
        <span className="text-xl">{icon}</span>
        <span>{text}</span>
    </div>
);

// Komponen untuk input form
const FormInput = ({ type, name, placeholder, isTextArea = false }) => {
    const commonProps = {
        name: name,
        placeholder: placeholder,
        className:
            "w-full p-4 bg-gray-100 dark:bg-gray-800/50 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-800 dark:text-gray-200",
        required: true,
    };

    return isTextArea ? (
        <textarea {...commonProps} rows="6"></textarea>
    ) : (
        <input type={type} {...commonProps} />
    );
};

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="contact"
            ref={ref}
            // Latar belakang section dibuat transparan
            className={`py-24 transition-opacity dark:bg-gray-900 duration-1000 ease-out ${
                inView ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="container px-6 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
                        Get in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Touch
                        </span>
                    </h2>
                </div>

                <div className="grid items-start max-w-6xl gap-12 mx-auto lg:grid-cols-2">
                    {/* Kolom Kiri: Info Kontak */}
                    <div
                        className={`flex flex-col gap-8 transition-all duration-700 ease-out ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <h3 className="text-3xl font-bold text-black dark:text-white">
                            Let's{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                talk
                            </span>
                        </h3>
                        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                            I'm currently available to take on new projects, so
                            feel free to send me a message about anything that
                            you want me to work on. You can contact anytime.
                        </p>
                        <div className="space-y-4">
                            <ContactInfoItem
                                icon={<FiMail />}
                                text="muhammadsyafei110303@gmail.com"
                            />
                            <ContactInfoItem
                                icon={<FiPhone />}
                                text="+6282176630163"
                            />
                            <ContactInfoItem
                                icon={<FiMapPin />}
                                text="Indonesia"
                            />
                        </div>
                    </div>

                    {/* Kolom Kanan: Form Kontak */}
                    <form
                        action="#" // Ganti dengan endpoint form Anda
                        className={`flex flex-col gap-6 transition-all duration-700 ease-out delay-200 ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                        }`}
                    >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                Your Name
                            </label>
                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                Your Email
                            </label>
                            <FormInput
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                Write your message here
                            </label>
                            <FormInput
                                name="message"
                                placeholder="Enter your message"
                                isTextArea={true}
                            />
                        </div>

                        <button
                            type="submit"
                            className="self-start px-8 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-purple-500/50 hover:-translate-y-1"
                        >
                            Submit now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
