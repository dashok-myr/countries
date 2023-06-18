"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";


export default function ToggleButton() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option className="bg-white" value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    )
}



