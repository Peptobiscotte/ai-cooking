'use client'

import Image from "next/image"

type IngredientsProps = {
    ingredients: string[];
    setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
  };

export default function Ingredients({ingredients, setIngredients}: IngredientsProps) {
    
    const submit = function(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const regex = /^[a-zA-Z]+$/

        const formData = new FormData(e.currentTarget)
        const ing = formData.get('ing') as string

        const lowerIng = ing.trim().toLowerCase()
        const cleanIng = lowerIng.charAt(0).toUpperCase() + lowerIng.slice(1)

        if(ing.trim() === '' || !regex.test(ing) || ingredients.includes(cleanIng)) {
            return
        }
    

        setIngredients((prevState) => [...prevState, cleanIng])
    }

    const removeIng = function(e: React.MouseEvent<HTMLImageElement>) {
        const selectedIng = e.currentTarget.previousElementSibling?.id
        setIngredients((prevState) => [...prevState.filter(item => item !== selectedIng)])
    }

    return (
        <div className="flex flex-col items-center justify-center pt-8 gap-8">
            <div className="flex gap-2">
                {ingredients.map(ing => 
                    <div key={ing} className="flex gap-2 border-2 rounded-md py-1 px-1">
                        <p id={ing}>{ing}</p>
                        <Image onClick={removeIng} alt="cross" src='/cross.svg' width={20} height={20} className="cursor-pointer"></Image>
                    </div>
                )}
            </div>
            <form onSubmit={submit} className="flex gap-2">
                <input type="text" name="ing" className="bg-zinc-950 border-2 rounded-md focus:outline-none px-2 py-1"/>
                <button type="submit" className="border-2 rounded-md px-2 py-1">Add</button>
            </form>
        </div>
    )
}