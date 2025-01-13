'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Layout() {
const router = useRouter()

const goToHome = function() {
    router.push('/')
}


    return (
        <div className="sticky top-0 flex justify-start border-b border-zinc-800 bg-zinc-950 z-50">
            <div className="mx-64 flex">
                <div onClick={goToHome} className="flex items-center gap-2 border-r border-zinc-800 pr-6 cursor-pointer">
                    <Image alt="dino" src='/ramen.svg' width={20} height={20} className="w-12 py-2"></Image>
                    <p className="text-md font-bold">What&apos;s for dinner?</p>
                </div>
            </div>
        </div>
    )
}