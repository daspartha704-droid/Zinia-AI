import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is missing." },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

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

  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message || "Unknown Error",
      },
      {
        status: 500,
      }
    );
  }
}