'use client'

import { useState } from "react";

export default function TextGen() {
    const [output, setOutput] = useState('')

    const submit = async function(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        console.log(formData)
        const inputQuestion = formData.get('inputQuestion') as string
        
        try {
            const response = await fetch('/api/gemini', {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify({body: inputQuestion})
            });
      
            const data = await response.json();
      
            if(response.ok) {
              setOutput(data.output)
            } else {
              setOutput(data.error)
            }
      
          } catch(error) {
            console.error('Error:', error)
          }
    }

    return(
        <div className="flex flex-col items-center pt-8 gap-8">
            <h1>Ask anything</h1>
            <form onSubmit={submit} className="flex flex-col gap-4">
                    <input name="inputQuestion" type="text" className="bg-zinc-950 border-2 rounded-md focus:outline-none px-2 py-1"/>
                    <div className="flex justify-center">
                        <button type="submit" className="border-2 rounded-md px-2 py-1">Submit</button>
                    </div>
            </form>
            <div className="flex max-w-[600px]">
                <p>{output}</p>
            </div>
        </div>
    )
}