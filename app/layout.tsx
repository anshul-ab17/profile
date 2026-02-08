import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Anshul Bharat | Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f1117] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
