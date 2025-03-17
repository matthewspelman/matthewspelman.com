import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Matthew Spelman',
  description: 'Personal website of Matthew Spelman - Software Engineer and Builder',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  openGraph: {
    title: 'Matthew Spelman',
    description: 'Personal website of Matthew Spelman - Software Engineer and Builder',
    type: 'website',
    locale: 'en_US',
    siteName: 'Matthew Spelman',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Spelman',
    description: 'Personal website of Matthew Spelman - Software Engineer and Builder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        {children}
      </body>
    </html>
  )
} 