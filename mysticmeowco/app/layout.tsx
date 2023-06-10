import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from './context/stateContext'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mystic Meow & Co.',
  description: 'A small business that sells wax melts and other products.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <StateContext>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StateContext>
  
  )
}
