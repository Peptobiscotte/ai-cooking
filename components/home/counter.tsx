'use client'

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const addCounter = function() {
        setCounter(counter + 1)
    }
    const logCounter = function() {
        console.log(counter)
    }

    return (
        <div className="flex flex-col items-center gap-1">
            <div>
                <button onClick={addCounter} className="border-2 rounded-md px-2 py-1 hover:bg-zinc-900">{counter}</button>
            </div>
            <div>
                <button onClick={logCounter} className="border-2 rounded-md px-2 py-1 hover:bg-zinc-900">Log Counter</button>
            </div>
        </div>
    )
}