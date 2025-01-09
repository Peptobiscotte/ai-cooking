'use client'

import Image from "next/image"
// import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Layout() {
// const pathname = usePathname()
const router = useRouter()

const goToHome = function() {
    router.push('/')
}


    return (
        <div className="flex justify-start border-b border-zinc-800">
            <div className="mx-64 flex">
                <div onClick={goToHome} className="flex items-center gap-2 border-r border-zinc-800 pr-6 cursor-pointer">
                    <Image alt="dino" src='/ramen.svg' width={20} height={20} className="w-12 py-2"></Image>
                    <p className="text-md font-bold">What&apos;s for dinner?</p>
                </div>
                {/* <div className="flex items-center pl-6 gap-6 text-zinc-400 text-sm">
                    <Link href='/contacts' className={pathname === '/contacts' ? "text-zinc-100" : "hover:text-zinc-200"}>Contacts</Link>
                </div> */}
            </div>
        </div>
    )
}