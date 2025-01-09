'use client'

import { useState } from "react"

export default function Course() {
    const [isCourse, setIsCourse] = useState('')

    const handleCourse = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const currentChoice = e.currentTarget.id
        setIsCourse(currentChoice)
    }

    return (
        <div className="flex justify-center gap-8 pt-8">
            <button id="starter" onClick={handleCourse} className={`border-2 rounded-md w-32 h-32 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 ${isCourse === 'starter' ? 'scale-125': ''}`}><p>Starter</p></button>
            <button id="main" onClick={handleCourse} className={`border-2 rounded-md w-32 h-32 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 ${isCourse === 'main' ? 'scale-125': ''}`}><p>Main</p></button>
            <button id="dessert" onClick={handleCourse} className={`border-2 rounded-md w-32 h-32 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 ${isCourse === 'dessert' ? 'scale-125': ''}`}><p>Dessert</p></button>
        </div>
    )
}
