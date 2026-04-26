import { Metadata } from 'next'
import HomePersonalClient from '@/components/home/HomePersonalClient'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import WebsiteSchema from '@/components/schema/WebsiteSchema'

export const metadata: Metadata = {
  title: 'César Reyes Jaramillo | Ingeniería de Eficiencia e Inteligencia Artificial',
  description: 'Consultoría estratégica en IA y desarrollo de sistemas de alta eficiencia en Ecuador. Soluciones personalizadas para optimizar negocios y eliminar procesos manuales.',
  openGraph: {
    title: 'César Reyes Jaramillo | Ingeniería de Eficiencia e Inteligencia Artificial',
    description: 'Transformamos la operatividad en rentabilidad mediante IA y automatización estratégica.',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes',
    locale: 'es_EC',
    type: 'website',
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
    </>
  )
}
