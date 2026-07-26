import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are Zinia AI Tutor. Explain answers clearly for school students.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return NextResponse.json({
      answer: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        answer: error.message,
      },
      {
        status: 500,
      }
    );
  }
}