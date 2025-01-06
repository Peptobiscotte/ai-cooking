'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Layout() {
const pathname = usePathname()
const router = useRouter()

const goToHome = function() {
    router.push('/')
}


    return (
        <div className="flex justify-start border-b border-zinc-800">
            <div className="mx-64 flex">
                <div onClick={goToHome} className="flex items-center gap-0 border-r border-zinc-800 pr-6 cursor-pointer">
                    <Image alt="dino" src='/dinosaur.svg' width={20} height={20} className="w-14"></Image>
                    <p className="text-md font-bold">Hey Bud</p>
                </div>
                <div className="flex items-center pl-6 gap-6 text-zinc-400 text-sm">
                    <Link href='/poli' className={pathname === '/poli' ? "text-zinc-100" : "hover:text-zinc-200"}>Poliwhirl</Link>
                    <Link href='/tangela' className={pathname === '/tangela' ? "text-zinc-100" : "hover:text-zinc-200"}>Tangela</Link>
                    <Link href='/random' className={pathname === '/random' ? "text-zinc-100" : "hover:text-zinc-200"}>Random</Link>
                    <Link href='/contacts' className={pathname === '/contacts' ? "text-zinc-100" : "hover:text-zinc-200"}>Contacts</Link>
                </div>
            </div>
        </div>
    )
}