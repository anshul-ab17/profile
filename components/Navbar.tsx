import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f1117]/80 border-b border-white/10">
      <div className="flex justify-center gap-12 py-6">
        <a href="/" className="hover:text-gray-300">Projects</a>
        <a href="/about" className="hover:text-gray-300">About</a>
        <a href="/blog" className="hover:text-gray-300">Blog</a>
      </div>
    </nav>
  )
}
