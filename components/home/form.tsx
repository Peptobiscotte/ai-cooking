'use client'

import { useState } from "react"

export default function HomeForm() {

    const [name, setName] = useState('')
    const [cool, setCool] = useState('')
    const [show, setShow] = useState(false);

    const submit = function(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        console.log(formData)
        const inputName = formData.get('inputName') as string
        const isCool = formData.get('myRadio') as string

        setName(inputName)
        setCool(isCool)
        setShow(true)
    }

    return(
        <div className="flex flex-col items-center gap-6">
            <div>
                <form onSubmit={submit} className="flex flex-col gap-4">
                    <input name="inputName" type="text" className="bg-zinc-950 border-2 rounded-md focus:outline-none px-2 py-1"/>
                    <label><input type="radio" name="myRadio" value="cool" />Cool</label>
                    <label><input type="radio" name="myRadio" value="not cool" />Not Cool</label>
                    <div className="flex justify-center">
                        <button type="submit" className="border-2 rounded-md px-2 py-1">Submit</button>
                    </div>
                </form>
            </div>
            {show && <div className="text-4xl">{name} is {cool}</div>}
        </div>
    )
}