"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true) // start fade
      setTimeout(() => setShowSplash(false), 500) // remove after fade
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="p-10">
        <h2 className="text-3xl">Welcome</h2>
      </div> 
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-2xl md:text-2l font-bold tracking-widest animate-pulse">
            ANSHUL BHARAT
          </h1>
        </div>
      )}
    </main>
  )
}
