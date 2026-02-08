import "./globals.css"
import Navbar from "@/components/Navbar"
import AppLoader from "@/components/AppLoader"

export const metadata = {
  title: "Anshul Bharat | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f1117] text-white">
        <AppLoader>
          <Navbar />
          {children}
        </AppLoader>
      </body>
    </html>
  )
}
