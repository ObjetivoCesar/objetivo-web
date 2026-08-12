import { Metadata } from 'next'
import HomePersonalClient from '@/components/home/HomePersonalClient'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import WebsiteSchema from '@/components/schema/WebsiteSchema'
import CookieBannerSPDP from '@/components/CookieBannerSPDP'

export const metadata: Metadata = {
  title: 'César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador',
  description: 'Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables. +50 negocios transformados en Loja y Ecuador.',
  keywords: [
    "posicionamiento web",
    "SEO Loja",
    "SEO Ecuador",
    "agencia SEO",
    "consultor SEO",
    "posicionamiento web Ecuador",
    "SEO local",
    "experto SEO"
  ],
  openGraph: {
    title: 'César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador',
    description: 'Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables.',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'César Reyes Jaramillo | SEO y Posicionamiento Web en Ecuador',
    description: 'Posiciono negocios en Google, Maps y buscadores de IA en Ecuador. SEO, posicionamiento web y estrategias con resultados verificables.',
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com'
  }
}

export default function HomePage() {
  return (
    <>
      <HomePersonalClient />
      <OrganizationSchema />
      <WebsiteSchema />
      <CookieBannerSPDP />
    </>
  )
}
