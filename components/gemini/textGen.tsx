'use client'

import { useState } from "react";
import { BeatLoader } from "react-spinners";

type GenProps = {
  ingredients: string[];
  isCourse: string;
};

export default function TextGen({isCourse, ingredients}: GenProps) {
    const [output, setOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submit = async function() {
        setIsLoading(true)
        const inputQuestion = `create a ${isCourse} recipe using these ingredients: ${ingredients}`
        console.log(inputQuestion)
        
        try {
            const response = await fetch('/api/gemini', {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify({body: inputQuestion})
            });
      
            const data = await response.json();
            const splitted = data.output.split('**').join('\n')
            console.log(splitted)
      
            if(response.ok) {
              setOutput(splitted)
            } else {
              setOutput(data.error)
            }
      
          } catch(error) {
            console.error('Error:', error)
          } finally {
            setIsLoading(false)
          }
          
    }

    const renderOutput = (output: string) => {
      return output.split('\n').map((line, index) => {
        if (line.startsWith('##')) {
          return <h2 key={index} className="text-2xl text-center font-bold">{line.slice(2).trim()}</h2>;
        }
        return <p key={index}>{line}</p>;
      });
    };

    return(
        <div className="flex flex-col items-center py-8 gap-8">
            <button onClick={submit} className="border-2 rounded-md py-1 px-2">Ask for a recipe</button>
            <div className="flex flex-col max-w-[800px] gap-4 items-center">
              {isLoading && <BeatLoader color="#ffffff"/>}
              {output && 
                <div className="rounded-md border-2 p-4">{renderOutput(output)}</div>
              }
              {output && <div><button onClick={() => window.location.reload()} className="border-2 rounded-md py-1 px-2">Try another recipe</button></div>}
            </div>
        </div>
    )
}