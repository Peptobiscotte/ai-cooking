'use client'

import Course from "@/components/gemini/course";
import Ingredients from "@/components/gemini/ingredients";
import TextGen from "@/components/gemini/textGen";
import { useState } from "react";


export default function Contacts() {
    const [isCourse, setIsCourse] = useState('')
    const [ingredients, setIngredients] = useState<string[]>([])

    return (
        <div>
            <Course isCourse={isCourse} setIsCourse={setIsCourse}></Course>
            <Ingredients ingredients={ingredients} setIngredients={setIngredients}></Ingredients>
            <TextGen isCourse={isCourse} ingredients={ingredients}></TextGen>
        </div>
    )
}
