export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-white">
        🌸 Zinia AI
      </h1>

      <div className="hidden md:flex gap-8 text-white">
        <a href="#">Home</a>
        <a href="#">Boards</a>
        <a href="#">AI Tutor</a>
        <a href="#">About</a>
      </div>

      <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
        Login
      </button>
    </nav>
  );
}