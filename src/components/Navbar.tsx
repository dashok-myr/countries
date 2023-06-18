"use client"
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

export default function Navbar() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex justify-between items-center py-6 text-very-dark-blue dark:text-white font-semibold">
            <div>Where in the world?</div>
            <div className="flex">
                <div>
                    <select value={theme} onChange={e => setTheme(e.target.value)}>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

