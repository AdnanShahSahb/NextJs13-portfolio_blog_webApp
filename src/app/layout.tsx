export const metadata = {
  title: 'Adnan Shah',
  description: 'Elevate your digital presence with Adnan Shah. We specialize in creating stunning designs and turning your ideas into reality. Explore our portfolio, insightful blog, and learn about our dedicated team. Contact us today to see how we can enhance your brand.',
}
import "./global.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContextWrapper from "@/context/ContextProvider"
import SessionProviderComponent from "@/components/SessionProviderComponent"
import Sidebar from "@/components/Sidebar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="">
        <ContextWrapper>
          <SessionProviderComponent>
            <div className="min-h-screen flex flex-col justify-between px-5 md:px-40 overflow-hidden">
              <Navbar />
              <main className=" ">
                {children}
              </main>
              <Footer />
            </div>
          </SessionProviderComponent>
        </ContextWrapper>
      </body>
    </html >
  )
}
