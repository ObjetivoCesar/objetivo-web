import type { Metadata, Viewport } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cesarreyesjaramillo.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bn.webp`;

// Preload configuration for critical resources
export const preloadConfig = {
  fonts: [
    { url: '/fonts/Inter.var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/PoiretOne-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/Montserrat.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/Poppins-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/PlayfairDisplay-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  ],
  images: [
    { url: '/images/bn.webp', as: 'image', type: 'image/webp' },
  ]
};

export const metadata: Metadata = {
  title: {
    default: "César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador",
    template: "%s | César Reyes Jaramillo"
  },
  description: "Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables. +50 negocios transformados en Loja y Ecuador.",
  keywords: [
    "posicionamiento web",
    "SEO Loja",
    "SEO Ecuador",
    "agencia SEO",
    "consultor SEO",
    "posicionamiento web Ecuador",
    "SEO local",
    "experto SEO",
    "Google Maps posicionamiento",
    "SEO ChatGPT"
  ],
  authors: [{ name: "César Reyes Jaramillo" }],
  creator: "César Reyes Jaramillo",
  publisher: "César Reyes Jaramillo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador",
    description: "Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables.",
    url: SITE_URL,
    siteName: "César Reyes Jaramillo",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'César Reyes Jaramillo - SEO y Posicionamiento Web en Ecuador'
      }
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador",
    description: "Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables.",
    images: [DEFAULT_OG_IMAGE],
    creator: '@cesarreyesj',
  },
  // Add preload links to metadata
  other: {
    'preload-1': '<link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-2': '<link rel="preload" href="/fonts/PoiretOne-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-3': '<link rel="preload" href="/fonts/Montserrat.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-4': '<link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-5': '<link rel="preload" href="/fonts/PlayfairDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-6': '<link rel="preload" href="/images/bn.webp" as="image" type="image/webp" />',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplaza con tu código de verificación de Google Search Console
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com',
    languages: {
      'es-EC': '/es-EC',
    },
  },
  metadataBase: new URL(SITE_URL),
  generator: 'Next.js',
  applicationName: 'César Reyes Jaramillo - Consultoría Empresarial',
  referrer: 'origin-when-cross-origin',
  category: 'Consultoría Empresarial',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}
