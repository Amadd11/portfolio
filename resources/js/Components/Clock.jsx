import React, { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Atur interval untuk memperbarui waktu setiap 1 detik (1000 ms)
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function untuk membersihkan interval saat komponen tidak lagi digunakan
        return () => {
            clearInterval(timerId);
        };
    }, []); // Array kosong berarti efek ini hanya berjalan sekali

    // Format waktu ke format lokal (misal: 14:30:55)
    const formattedTime = time.toLocaleTimeString("en-GB");

    return (
        <div className="text-base font-medium text-gray-600 dark:text-gray-300 transition-colors">
            <span>{formattedTime}</span>
        </div>
    );
}
