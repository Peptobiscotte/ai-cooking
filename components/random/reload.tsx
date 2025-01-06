'use client'

import { useRouter } from 'next/navigation'

export default function Reload() {
    const router = useRouter()
    const reload = function() {
        router.push('/random')
    }

    return (
        <div className="pt-8">
            <button onClick={reload} className='border-2 rounded-md py-1 px-2'>Generate a New One</button>
        </div>
    )
}