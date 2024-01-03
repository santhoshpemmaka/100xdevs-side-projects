import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo NextJS 13',
  description: 'Demo NextJS project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
          <body className={inter.className}>
              <Header />
              <div style={{minHeight:"80vh"}}>
                  {children}
                </div>
              <h3>Footer Section !</h3>
        </body>
    </html>
  )
}
