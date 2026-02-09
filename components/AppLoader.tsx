"use client"
import { useEffect, useState } from "react"
export default function AppLoader({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true)
      setTimeout(() => setLoading(false), 400)
    }, 1000)  

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && (
            <div
            className={`fixed inset-0 z-999 flex items-center justify-center bg-black transition-all duration-500 ${
                fade
                ? "opacity-0 scale-105 blur-sm"
                : "opacity-100 scale-100 blur-0"
            }`}
            >

          <h1 className="text-2xl md:text-2l font-bold tracking-[0.4em] text-white">
            ANSHUL BHARAT
          </h1>
        </div>
      )}

      <div className={loading ? "invisible" : "visible"}>
        {children}
      </div>
    </>
  )
}
