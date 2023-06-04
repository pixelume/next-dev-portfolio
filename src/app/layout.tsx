import './globals.css'
import { quicksand } from '../assets'
import Header from '@/components/Header'

export const metadata = {
  title: 'Pieter Wolmarans Frontend Developer',
  description: 'Frontend React Developer based in Port Elizabeth, South Africa',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
