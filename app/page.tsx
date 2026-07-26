import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-700 to-purple-700">
      <h1 className="text-6xl font-bold text-white">
        🎓 Zinia AI
      </h1>

      <p className="text-xl text-white mt-4">
        AI Learning Platform
      </p>

      <Link
        href="/ai"
        className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold"
      >
        Open AI Tutor
      </Link>
    </main>
  );
}