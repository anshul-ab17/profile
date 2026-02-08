"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  Instagram,
  X,
  Mail,
  Clock,
  MapPin,
} from "lucide-react"

export default function Sidebar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28 mb-5">
          <Image
            src="https://avatars.githubusercontent.com/u/96761799?v=4"
            alt="Anshul Bharat"
            fill
            className="rounded-full object-cover border border-white/10 shadow-lg shadow-purple-500/10"
            sizes="112px"
          />
        </div>

        <h2 className="text-xl font-semibold tracking-wide">
          Anshul Bharat
        </h2>

        <p className="text-muted-foreground text-sm">
          Full Stack Developer
        </p>
      </div>
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 justify-center">
        {["NextJS", "React", "Node", "Postgres", "Rust"].map((tech) => (
          <span
            key={tech}
            className="text-xs bg-white/10 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Resume */}
      <a
        href="https://drive.google.com/uc?export=download&id=1ypcwHe5hkx_eG4ESyqaUWRijyr44-LvF"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Resume
      </a>

      {/* Info */}
      <div className="space-y-3 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>📍 Nawada, India</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{time}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>anshul.ab17x@email.com</span>
        </div>
      </div>

      {/* Social Links */}
        <div className="flex justify-center gap-10 pt-4 border-t border-white/10">
        <a href="https://github.com/anshul-ab17" target="_blank">
          <Github className="hover:text-white transition" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/anshul-bharat-1ba271223/" target="_blank">
          <Linkedin className="hover:text-white transition" size={20} />
        </a>
        <a href="https://instagram.com/anshul_ab.17" target="_blank">
          <Instagram className="hover:text-white transition" size={20} />
        </a>
        <a href="https://x.com/yourusername" target="_blank">
          <X className="hover:text-white transition" size={20} />
        </a>

      </div>
    </div>
  )
}
