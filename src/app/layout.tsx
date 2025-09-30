import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export const metadata: Metadata = {
  title: 'ISCRS',
  description: 'Iraqi Society of Cataract and Refractive Surgery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
