import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

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
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/png/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/png/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/png/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/icons/png/icon-180.png', type: 'image/png', sizes: '180x180' }
    ],
    shortcut: '/icons/icon.svg',
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
    url: 'https://matthewspelman.com',
    images: [
      {
        url: '/icons/png/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Matthew Spelman',
      },
      {
        url: '/icons/png/icon-1200.png',
        width: 1200,
        height: 630,
        alt: 'Matthew Spelman',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Spelman',
    description: 'Personal website of Matthew Spelman - Software Engineer and Builder',
    creator: '@matthewspelman',
    images: [
      {
        url: '/icons/png/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Matthew Spelman',
      },
      {
        url: '/icons/png/icon-1200.png',
        width: 1200,
        height: 630,
        alt: 'Matthew Spelman',
      }
    ],
  },
  other: {
    'og:site_name': 'Matthew Spelman',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/png/icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/png/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/png/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/png/icon-180.png" />
        <link rel="shortcut icon" href="/icons/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        {children}
      </body>
    </html>
  )
} 