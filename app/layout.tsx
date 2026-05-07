import type React from "react"
import "./globals.css"
import { Inter, Poiret_One, Montserrat, Poppins, Playfair_Display } from "next/font/google"
// Google Tag Manager will be implemented manually with Script component
import Footer from "@/components/footer"
import VisitTracker from '@/components/VisitTracker'
// import TransparentHeader from '@/components/transparent-header'
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu'
import { Providers } from './providers'
import { SearchProvider } from '@/context/SearchContext'

import Script from 'next/script'
import ClarityAnalytics from '@/components/ClarityAnalytics'
import FloatingPromoCardWrapper from '@/components/FloatingPromoCardWrapper';
import PersonSchema from '@/components/schema/PersonSchema';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import TermsPopup from '@/components/TermsPopup';

declare global {
  interface Window {
    _uxa?: any[];
  }
}

// Importar metadata desde el archivo separado
export { metadata, viewport } from './metadata'

// Mover las fuentes fuera del componente para evitar recrearlas en cada render
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
})

const poppins = Poppins({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poiretOne.variable} ${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
      style={{
        // Prevenir zoom en iOS al hacer doble toque
        touchAction: 'manipulation',
        // Suavizar el desplazamiento en iOS
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <body
        className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{
          // Mejorar el rendimiento de desplazamiento en iOS
          WebkitFontSmoothing: 'antialiased',
          // Prevenir desbordamiento horizontal
          overflowX: 'hidden',
          // Mejorar el manejo del teclado en móviles
          position: 'relative',
          minHeight: '100vh',
          // Asegurar que el contenido no se desplace con el teclado en iOS
          height: '100%',
        }}
      >
        <PersonSchema />
        <OrganizationSchema />
        
        {/* Contentsquare Analytics - Movido al body para evitar errores de hidratación en Next.js 15 */}
        <Script
          id="contentsquare-analytics"
          strategy="afterInteractive"
        >
          {`
            window._uxa = window._uxa || [];
            // Retrasar carga para priorizar LCP
            window.addEventListener('load', function() {
              setTimeout(function() {
                var d = document, g = d.createElement('script');
                g.type = 'text/javascript'; g.async = true;
                g.src = 'https://t.contentsquare.net/uxa/275c1908ab462.js';
                var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(g, s);
              }, 3000);
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            // Delay GTM to prioritize LCP
            window.addEventListener('load', function() {
              setTimeout(function() { f.parentNode.insertBefore(j,f); }, 3500);
            });
            })(window,document,'script','dataLayer','GTM-NLQ7BVT8');
          `}
        </Script>

        <Providers>
          <SearchProvider>
            {/* <TransparentHeader /> */}
            <ModernSidebarMenu />
            <main className="min-h-[calc(100vh-64px)] w-full overflow-x-hidden">
              <VisitTracker />
              {children}
              <Footer />
              <ClarityAnalytics />
              <FloatingPromoCardWrapper />
              <TermsPopup />
            </main>
          </SearchProvider>
        </Providers>
      </body>
    </html>
  )
}