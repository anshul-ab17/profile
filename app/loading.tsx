"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onFinish, 500) // fade out duration
    }, 2000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white animate-pulse">
        ANSHUL BHARAT
      </h1>
    </div>
  )
}
