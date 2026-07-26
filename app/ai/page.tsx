"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";

export default function AITutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">

        <h1 className="mb-8 text-center text-4xl font-bold text-black">
          🎓 Zinia AI Tutor
        </h1>

        <div className="mb-5 flex gap-4">
          <div className="rounded-full bg-blue-600 p-3 text-white">
            <FaUser />
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask any question..."
            className="h-40 flex-1 rounded-xl border border-gray-300 bg-white p-4 text-lg text-black placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={askAI}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          <FaPaperPlane />
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        <div className="mt-8 flex gap-4">
          <div className="rounded-full bg-green-600 p-3 text-white">
            <FaRobot />
          </div>

          <div className="flex-1 rounded-2xl border border-gray-300 bg-gray-50 p-6">

            <h2 className="mb-4 text-2xl font-bold text-black">
              AI Response
            </h2>

            {loading ? (
              <p className="text-black">🤖 Thinking...</p>
            ) : (
              <div className="text-black leading-8">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {answer || "Your AI answer will appear here..."}
                </ReactMarkdown>
              </div>
            )}

          </div>
        </div>

      </div>
    </main>
  );
}