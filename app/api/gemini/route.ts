import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        
        const genAI = new GoogleGenerativeAI(process.env.API_KEY as string)

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        const data = await req.json()

        const prompt = data.body

        const result = await model.generateContent(prompt)
        const response = await result.response;
        const output = await response.text();

        return NextResponse.json({ output: output })
    } catch (error) {
        console.error(error)
    }
}