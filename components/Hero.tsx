export default function Hero() {
  return (
    <section className="text-center py-24 px-6">

      <h1 className="text-6xl font-extrabold leading-tight">
        Learn Smarter with
      </h1>

      <h2 className="text-7xl font-black mt-4 text-cyan-300">
        🌸 Zinia AI
      </h2>

      <p className="mt-8 text-2xl text-gray-200">
        India's Free AI Learning Platform
      </p>

      <div className="max-w-3xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full rounded-full p-5 text-black text-lg"
        />
      </div>

    </section>
  );
}